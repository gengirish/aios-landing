import { neon } from '@neondatabase/serverless'

export function getDb() {
  const url = process.env.DATABASE_URL
  if (!url) return null
  return neon(url)
}

export type WaitlistEntry = {
  name: string
  email: string
  role: string
  use_case: string | null
}

export async function insertWaitlistEntry(entry: WaitlistEntry): Promise<void> {
  const sql = getDb()
  if (!sql) {
    throw new Error('DATABASE_URL is not configured')
  }

  await sql`
    insert into aios_waitlist (name, email, role, use_case)
    values (${entry.name}, ${entry.email}, ${entry.role}, ${entry.use_case})
  `
}
