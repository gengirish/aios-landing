import { neon } from '@neondatabase/serverless'

export function getDb() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

type WaitlistEntry = {
  name: string
  email: string
  phone: string | null
  role: string
  use_case: string | null
}

export async function insertWaitlistEntry(entry: WaitlistEntry): Promise<void> {
  const sql = getDb()
  if (!sql) {
    throw new Error('DATABASE_URL is not configured')
  }

  await sql`
    insert into aios_waitlist (name, email, phone, role, use_case)
    values (${entry.name}, ${entry.email}, ${entry.phone}, ${entry.role}, ${entry.use_case})
  `
}
