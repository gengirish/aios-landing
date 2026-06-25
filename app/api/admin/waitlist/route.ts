import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

type WaitlistRow = {
  id: number
  name: string
  email: string
  phone: string | null
  role: string
  use_case: string | null
  created_at?: string
}

function validateToken(request: Request): boolean {
  const auth = request.headers.get('Authorization')
  if (!auth || !auth.startsWith('Bearer ')) return false
  return auth.slice(7) === process.env.ADMIN_TOKEN
}

export async function GET(request: Request) {
  const adminToken = process.env.ADMIN_TOKEN
  if (!adminToken) {
    return NextResponse.json({ error: 'ADMIN_TOKEN not configured' }, { status: 503 })
  }

  if (!validateToken(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sql = getDb()
  if (!sql) {
    return NextResponse.json({ error: 'DATABASE_URL not configured' }, { status: 503 })
  }

  const rows = await sql`
    SELECT id, name, email, phone, role, use_case, created_at
    FROM aios_waitlist
    ORDER BY id DESC
  ` as WaitlistRow[]

  const { searchParams } = new URL(request.url)
  if (searchParams.get('format') === 'csv') {
    const header = 'id,name,email,phone,role,use_case,created_at'
    const csvRows = rows.map((r) => [
      r.id,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.email.replace(/"/g, '""')}"`,
      r.phone ?? '',
      r.role,
      r.use_case ? `"${r.use_case.replace(/"/g, '""')}"` : '',
      r.created_at ?? '',
    ].join(','))
    const csv = [header, ...csvRows].join('\n')
    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=waitlist.csv',
      },
    })
  }

  const byRole: Record<string, number> = {}
  for (const row of rows) {
    byRole[row.role] = (byRole[row.role] ?? 0) + 1
  }

  return NextResponse.json({ total: rows.length, byRole, entries: rows })
}
