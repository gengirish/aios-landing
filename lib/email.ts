/**
 * Transactional email via AgentMail (pattern from citeforge).
 * Fail-soft when AGENTMAIL_API_KEY is unset — same as WhatsApp/AiSensy.
 */
import { waitUntil } from '@vercel/functions'
import { SITE, SITE_URL } from '@/lib/site'

const AGENTMAIL_BASE_URL = process.env.AGENTMAIL_BASE_URL ?? 'https://api.agentmail.to'

export type EmailMessage = {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export type SendResult =
  | { sent: true; id: string; threadId?: string }
  | { sent: false; reason: 'no_api_key' | 'no_inbox' | 'error'; error?: string }

export async function sendEmail(msg: EmailMessage): Promise<SendResult> {
  const apiKey = process.env.AGENTMAIL_API_KEY
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `[email] (skipped — no AGENTMAIL_API_KEY) to=${Array.isArray(msg.to) ? msg.to.join(',') : msg.to} subject=${JSON.stringify(msg.subject)}`,
      )
    }
    return { sent: false, reason: 'no_api_key' }
  }

  const inboxId = process.env.AGENTMAIL_INBOX_ID
  if (!inboxId) {
    return { sent: false, reason: 'no_inbox' }
  }

  try {
    const res = await fetch(
      `${AGENTMAIL_BASE_URL}/v0/inboxes/${encodeURIComponent(inboxId)}/messages/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: msg.to,
          subject: msg.subject,
          html: msg.html,
          text: msg.text,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    )

    if (!res.ok) {
      let detail = `HTTP ${res.status}`
      try {
        const body = (await res.json()) as { message?: string; name?: string } | undefined
        if (body?.message) detail = body.message
        else if (body?.name) detail = body.name
      } catch {
        /* keep status-based detail */
      }
      console.error('[email] send failed:', detail)
      return { sent: false, reason: 'error', error: detail }
    }

    const data = (await res.json()) as { message_id?: string; thread_id?: string }
    return {
      sent: true,
      id: data.message_id ?? '',
      threadId: data.thread_id,
    }
  } catch (err: unknown) {
    console.error('[email] send threw:', err)
    return { sent: false, reason: 'error', error: err instanceof Error ? err.message : 'Unknown error' }
  }
}

/** Fire-and-forget — keeps Vercel alive until send completes (citeforge pattern). */
export function sendEmailAsync(msg: EmailMessage): void {
  const promise = sendEmail(msg).catch((err) => console.error('[email] background send failed:', err))
  waitUntil(promise)
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  )
}

function shell(title: string, body: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#e2e8f0;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0f172a;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#1e293b;border:1px solid #334155;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px 0;">
                <span style="font-weight:700;font-size:16px;color:#fff;">
                  <span style="display:inline-block;width:18px;height:18px;border-radius:5px;background:linear-gradient(135deg,#4f46e5,#7c3aed,#06b6d4);vertical-align:middle;margin-right:8px;"></span>
                  IntelliForge AI OS
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px;line-height:1.55;font-size:15px;color:#e2e8f0;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 24px;border-top:1px solid #334155;color:#94a3b8;font-size:12px;line-height:1.5;">
                ${SITE.org} · Hyderabad, India<br/>
                <a href="${SITE_URL}" style="color:#818cf8;text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, '')}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export function waitlistConfirmationEmail(args: { to: string; name: string }): EmailMessage {
  const first = args.name.trim().split(/\s+/)[0] || 'there'
  const body = `
    <h1 style="margin:0 0 14px;font-size:22px;color:#fff;">You're on the waitlist</h1>
    <p style="margin:0 0 14px;">Hi ${escapeHtml(first)},</p>
    <p style="margin:0 0 14px;">
      Thanks for joining the ForgeOS Cloud alpha waitlist. We'll reach out as early access opens in August 2026.
    </p>
    <p style="margin:0 0 14px;color:#94a3b8;font-size:14px;">
      In the meantime, follow launch updates on LinkedIn or reply to this email if you have questions.
    </p>
  `
  const text = `Hi ${first},\n\nYou're on the IntelliForge AI OS waitlist. We'll reach out when ForgeOS Cloud alpha opens (August 2026).\n\n${SITE_URL}`
  return {
    to: args.to,
    subject: "You're on the IntelliForge AI OS waitlist",
    html: shell("Waitlist confirmation", body),
    text,
  }
}

export function waitlistTeamAlertEmail(args: {
  name: string
  email: string
  role: string
  useCase: string | null
  hasPhone: boolean
}): EmailMessage {
  const notifyTo = process.env.WAITLIST_NOTIFY_EMAIL ?? SITE.alertsEmail
  const body = `
    <h1 style="margin:0 0 14px;font-size:22px;color:#fff;">New waitlist signup</h1>
    <p style="margin:0 0 8px;"><b>Name:</b> ${escapeHtml(args.name)}</p>
    <p style="margin:0 0 8px;"><b>Email:</b> ${escapeHtml(args.email)}</p>
    <p style="margin:0 0 8px;"><b>Role:</b> ${escapeHtml(args.role)}</p>
    <p style="margin:0 0 8px;"><b>WhatsApp:</b> ${args.hasPhone ? 'yes' : 'no'}</p>
    ${
      args.useCase
        ? `<p style="margin:0 0 8px;"><b>Use case:</b> ${escapeHtml(args.useCase)}</p>`
        : ''
    }
  `
  const text = `New waitlist signup\n\nName: ${args.name}\nEmail: ${args.email}\nRole: ${args.role}\nWhatsApp: ${args.hasPhone ? 'yes' : 'no'}${args.useCase ? `\nUse case: ${args.useCase}` : ''}`
  return {
    to: notifyTo,
    subject: `[AI OS waitlist] ${args.name} (${args.role})`,
    html: shell('New waitlist signup', body),
    text,
  }
}
