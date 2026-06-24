'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { trackWaitlistSubmit } from '@/lib/analytics'
import { validateOptionalIndianPhone } from '@/lib/phone'

type Role = 'founder' | 'engineer' | 'researcher' | 'student' | 'other'

const ROLES: { value: Role; label: string }[] = [
  { value: 'founder', label: '🚀 Founder' },
  { value: 'engineer', label: '⚙️ Engineer' },
  { value: 'researcher', label: '🔬 Researcher' },
  { value: 'student', label: '🎓 Student' },
  { value: 'other', label: '💡 Other' },
]

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<Role | null>(null)
  const [useCase, setUseCase] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email || !name || !role) {
      setError('Please fill in your name, email, and role.')
      return
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    const phoneResult = validateOptionalIndianPhone(phone)
    if (!phoneResult.ok) {
      setError(phoneResult.error)
      return
    }

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phoneResult.e164,
          role,
          use_case: useCase.trim() || undefined,
        }),
      })

      const data = (await res.json()) as { error?: string }

      if (!res.ok) {
        setStatus('error')
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      trackWaitlistSubmit(Boolean(phoneResult.e164))
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or email girish@intelliforge.tech')
    }
  }

  if (status === 'success') {
    return (
      <section id="waitlist" className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-800 text-white mb-3">You're on the list.</h2>
          <p className="text-if-text-dim text-base leading-relaxed">
            We'll reach out as ForgeOS Cloud Alpha opens. Follow{' '}
            <a
              href="https://www.linkedin.com/in/girishhiremath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Girish on LinkedIn
            </a>{' '}
            for launch updates.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,70,229,0.4), transparent)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Early Access</p>
          <h2 className="text-4xl font-800 text-white mb-4">
            Join the waitlist.<br />
            <span className="text-gradient-if">Build the harness.</span>
          </h2>
          <p className="text-if-text-dim text-base leading-relaxed">
            ForgeOS Cloud alpha opens August 2026. Get early access, shape the roadmap,
            and build your agents on India's first harness platform.
          </p>
        </div>

        <div className="glass-card-indigo rounded-2xl p-8">
          <div className="space-y-5">

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-600 text-if-text-dim mb-1.5">Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Girish Hiremath"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-if-text-dim/50 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-600 text-if-text-dim mb-1.5">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-if-text-dim/50 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors"
                />
              </div>
            </div>

            {/* Phone (optional — WhatsApp confirmation) */}
            <div>
              <label htmlFor="waitlist-phone" className="block text-xs font-600 text-if-text-dim mb-1.5">
                WhatsApp <span className="opacity-50">(optional, +91)</span>
              </label>
              <input
                id="waitlist-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-if-text-dim/50 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors"
              />
            </div>

            {/* Role selector */}
            <div>
              <label className="block text-xs font-600 text-if-text-dim mb-1.5">I am a... *</label>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`text-xs font-600 px-3 py-2 rounded-lg border transition-all ${
                      role === r.value
                        ? 'bg-indigo-500/25 border-indigo-500/60 text-indigo-300'
                        : 'bg-white/5 border-white/10 text-if-text-dim hover:border-white/20'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Use case */}
            <div>
              <label className="block text-xs font-600 text-if-text-dim mb-1.5">
                What are you building? <span className="opacity-50">(optional)</span>
              </label>
              <textarea
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="Voice billing agent for SMBs in Tier 2 India..."
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-if-text-dim/50 focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 transition-colors resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center"
            >
              {status === 'loading' ? (
                <><Loader2 size={16} className="animate-spin" /> Joining...</>
              ) : (
                <>Join ForgeOS Waitlist <ArrowRight size={16} /></>
              )}
            </button>

            <p className="text-center text-[11px] text-if-text-dim/60">
              No spam. Alpha invites roll out from August 2026.
              Add WhatsApp for instant confirmation when available.
              By submitting you agree to receive launch updates from IntelliForge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
