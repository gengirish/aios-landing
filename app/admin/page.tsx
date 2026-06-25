'use client'

import { useEffect, useState, useCallback } from 'react'
import { Download, LogOut, RefreshCw, Lock } from 'lucide-react'

type WaitlistEntry = {
  id: number
  name: string
  email: string
  phone: string | null
  role: string
  use_case: string | null
  created_at?: string
}

type ApiResponse = {
  total: number
  byRole: Record<string, number>
  entries: WaitlistEntry[]
}

const ROLES = ['founder', 'engineer', 'researcher', 'student', 'other'] as const

const ROLE_COLORS: Record<string, string> = {
  founder: 'tag-indigo',
  engineer: 'tag-cyan',
  researcher: 'tag-green',
  student: 'tag-orange',
  other: 'tag-purple',
}

const ROLE_LABELS: Record<string, string> = {
  founder: 'Founder',
  engineer: 'Engineer',
  researcher: 'Researcher',
  student: 'Student',
  other: 'Other',
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <div className="text-2xl font-800 mb-1" style={{ color }}>{value}</div>
      <div className="text-xs text-if-text-dim">{label}</div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="glass-card rounded-xl p-5 animate-pulse">
      <div className="h-8 bg-white/10 rounded mb-2 w-12" />
      <div className="h-3 bg-white/5 rounded w-20" />
    </div>
  )
}

export default function AdminPage() {
  const [token, setToken] = useState<string>('')
  const [inputToken, setInputToken] = useState('')
  const [data, setData] = useState<ApiResponse | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'unauthorized'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('admin_token')
    if (stored) setToken(stored)
  }, [])

  const fetchData = useCallback(async (t: string) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/admin/waitlist', {
        headers: { Authorization: `Bearer ${t}` },
      })
      if (res.status === 401) {
        setStatus('unauthorized')
        return
      }
      if (!res.ok) {
        const json = await res.json() as { error?: string }
        setErrorMsg(json.error ?? 'Request failed')
        setStatus('error')
        return
      }
      const json = await res.json() as ApiResponse
      setData(json)
      setStatus('idle')
    } catch {
      setErrorMsg('Network error')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    if (token) fetchData(token)
  }, [token, fetchData])

  const handleLogin = () => {
    const t = inputToken.trim()
    if (!t) return
    localStorage.setItem('admin_token', t)
    setToken(t)
  }

  const handleSignOut = () => {
    localStorage.removeItem('admin_token')
    setToken('')
    setInputToken('')
    setData(null)
    setStatus('idle')
  }

  const handleDownloadCsv = () => {
    const url = `/api/admin/waitlist?format=csv`
    const a = document.createElement('a')
    a.href = url
    a.download = 'waitlist.csv'
    // Pass auth via a signed URL isn't possible here — open in new tab and browser handles download
    // Since fetch with Authorization + blob is cleaner:
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.blob())
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(objectUrl)
      })
      .catch(() => {})
  }

  const hasCreatedAt = data?.entries.some((e) => Boolean(e.created_at))

  // Login screen
  if (!token) {
    return (
      <main className="min-h-screen bg-if-dark flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="if-mono">IF</div>
          </div>
          <h1 className="text-2xl font-800 text-white text-center mb-1">Admin Access</h1>
          <p className="text-if-text-dim text-sm text-center mb-8">Enter your admin token to continue</p>
          <div className="glass-card-indigo rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-xs font-600 text-if-text-dim mb-1.5">Admin Token</label>
              <input
                type="password"
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="••••••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-if-text-dim/50 focus:outline-none focus:border-indigo-500/60 transition-colors"
                autoFocus
              />
            </div>
            <button onClick={handleLogin} className="btn-primary w-full justify-center">
              <Lock size={14} />
              Unlock Dashboard
            </button>
          </div>
        </div>
      </main>
    )
  }

  // Unauthorized
  if (status === 'unauthorized') {
    return (
      <main className="min-h-screen bg-if-dark flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-xl font-700 text-white mb-2">Invalid token</h2>
          <p className="text-if-text-dim text-sm mb-6">The admin token you entered is incorrect.</p>
          <button onClick={handleSignOut} className="btn-secondary">
            Reset token
          </button>
        </div>
      </main>
    )
  }

  // Error
  if (status === 'error') {
    return (
      <main className="min-h-screen bg-if-dark flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-700 text-white mb-2">Something went wrong</h2>
          <p className="text-if-text-dim text-sm mb-6">{errorMsg}</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => fetchData(token)} className="btn-primary">
              <RefreshCw size={14} />
              Retry
            </button>
            <button onClick={handleSignOut} className="btn-secondary">Sign out</button>
          </div>
        </div>
      </main>
    )
  }

  const roleColors: Record<string, string> = {
    founder: '#4f46e5',
    engineer: '#06b6d4',
    researcher: '#10b981',
    student: '#f97316',
    other: '#7c3aed',
  }

  return (
    <main className="min-h-screen bg-if-dark">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="eyebrow mb-1">Internal</p>
            <h1 className="text-3xl font-800 text-white">
              Waitlist <span className="text-gradient-if">Admin</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchData(token)}
              className="btn-secondary text-sm"
              disabled={status === 'loading'}
            >
              <RefreshCw size={14} className={status === 'loading' ? 'animate-spin' : ''} />
              Refresh
            </button>
            {data && data.total > 0 && (
              <button onClick={handleDownloadCsv} className="btn-secondary text-sm">
                <Download size={14} />
                Export CSV
              </button>
            )}
            <button onClick={handleSignOut} className="btn-secondary text-sm">
              <LogOut size={14} />
              Sign out
            </button>
          </div>
        </div>

        {/* Stats */}
        {status === 'loading' && !data ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : data ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            <StatCard label="Total" value={data.total} color="#e2e8f0" />
            {ROLES.map((role) => (
              <StatCard
                key={role}
                label={ROLE_LABELS[role]}
                value={data.byRole[role] ?? 0}
                color={roleColors[role]}
              />
            ))}
          </div>
        ) : null}

        {/* Table */}
        {data && data.entries.length === 0 ? (
          <div className="glass-card rounded-2xl p-16 text-center">
            <p className="text-if-text-dim text-sm">No signups yet.</p>
          </div>
        ) : data ? (
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/8 text-left">
                    <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Name</th>
                    <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Email</th>
                    <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Role</th>
                    <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Phone</th>
                    <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Use Case</th>
                    {hasCreatedAt && (
                      <th className="px-5 py-3.5 text-[11px] font-700 uppercase tracking-wider text-if-text-dim">Joined</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.entries.map((entry, idx) => (
                    <tr
                      key={entry.id}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                        idx === data.entries.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="px-5 py-3.5 text-white font-500 whitespace-nowrap">{entry.name}</td>
                      <td className="px-5 py-3.5 text-if-text-dim whitespace-nowrap">{entry.email}</td>
                      <td className="px-5 py-3.5">
                        <span className={`tag-pill ${ROLE_COLORS[entry.role] ?? 'tag-indigo'} text-[10px]`}>
                          {ROLE_LABELS[entry.role] ?? entry.role}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {entry.phone ? (
                          <span className="text-green-400 font-600">✓</span>
                        ) : (
                          <span className="text-if-text-dim/40">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-if-text-dim max-w-[240px]">
                        {entry.use_case
                          ? entry.use_case.length > 50
                            ? `${entry.use_case.slice(0, 50)}…`
                            : entry.use_case
                          : <span className="opacity-30">—</span>
                        }
                      </td>
                      {hasCreatedAt && (
                        <td className="px-5 py-3.5 text-if-text-dim whitespace-nowrap text-xs">
                          {entry.created_at
                            ? new Date(entry.created_at).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })
                            : '—'
                          }
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  )
}
