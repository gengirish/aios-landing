const AISENSY_API_URL = 'https://backend.aisensy.com/campaign/t1/api/v2'

type WaitlistConfirmationParams = {
  name: string
  phone?: string
}

export async function sendWaitlistConfirmation({
  name,
  phone,
}: WaitlistConfirmationParams): Promise<void> {
  const apiKey = process.env.AISENSY_API_KEY
  const campaignName = process.env.AISENSY_CAMPAIGN_NAME

  if (!apiKey || !campaignName || !phone) {
    return
  }

  const response = await fetch(AISENSY_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey,
      campaignName,
      destination: phone,
      userName: name,
      templateParams: [name],
    }),
    signal: AbortSignal.timeout(10_000),
  })

  if (!response.ok) {
    console.error('[aisensy] waitlist confirmation failed:', await response.text())
  }
}
