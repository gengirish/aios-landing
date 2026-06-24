import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 28,
            background: '#0f172a',
            border: '4px solid transparent',
            backgroundImage: 'linear-gradient(#0f172a, #0f172a), linear-gradient(135deg, #4f46e5, #7c3aed, #06b6d4)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: '#e2e8f0',
              letterSpacing: -3,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            IF
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
