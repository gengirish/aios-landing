import { NextResponse } from 'next/server'
import { getDb, insertWaitlistEntry } from '@/lib/db'
import { sendWaitlistConfirmation } from '@/lib/aisensy'

const VALID_ROLES = ['founder', 'engineer', 'researcher', 'student', 'other'] as const
type Role = (typeof VALID_ROLES)[number]

function isValidRole(value: unknown): value is Role {
  return typeof value === 'string' && VALID_ROLES.includes(value as Role)
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, role, use_case, phone } = body as Record<string, unknown>

  if (typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  if (typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
  }

  if (!isValidRole(role)) {
    return NextResponse.json({ error: 'Valid role is required' }, { status: 400 })
  }

  if (!getDb()) {
    return NextResponse.json(
      { error: 'Waitlist is not configured. Missing DATABASE_URL.' },
      { status: 503 }
    )
  }

  try {
    await insertWaitlistEntry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      use_case: typeof use_case === 'string' && use_case.trim() ? use_case.trim() : null,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    if (message.includes('duplicate key') || message.includes('unique constraint')) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist.' },
        { status: 409 }
      )
    }

    console.error('[waitlist] insert failed:', message)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }

  // Fire-and-forget WhatsApp confirmation when phone + AiSensy are configured
  if (typeof phone === 'string' && phone.trim()) {
    sendWaitlistConfirmation({ name: name.trim(), phone: phone.trim() }).catch((err) =>
      console.error('[aisensy] unexpected error:', err)
    )
  }

  return NextResponse.json({ ok: true })
}
