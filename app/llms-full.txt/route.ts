import { NextResponse } from 'next/server'
import { buildLlmsFullTxt } from '@/lib/llms-content'

export async function GET() {
  return new NextResponse(buildLlmsFullTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
