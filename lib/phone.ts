import { parsePhoneNumberFromString } from 'libphonenumber-js'

type PhoneResult =
  | { ok: true; e164?: string }
  | { ok: false; error: string }

export function validateOptionalIndianPhone(value: unknown): PhoneResult {
  if (value == null || (typeof value === 'string' && value.trim() === '')) {
    return { ok: true }
  }

  if (typeof value !== 'string') {
    return { ok: false, error: 'Invalid phone number' }
  }

  const parsed = parsePhoneNumberFromString(value.trim(), 'IN')
  if (!parsed?.isValid() || parsed.country !== 'IN') {
    return { ok: false, error: 'Enter a valid +91 Indian mobile number' }
  }

  return { ok: true, e164: parsed.format('E.164') }
}
