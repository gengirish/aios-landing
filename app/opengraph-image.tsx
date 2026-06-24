import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'IntelliForge AI OS — OSS harness framework + India-first AI platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 800,
              color: 'white',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          >
            IF
          </div>
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#e2e8f0',
            }}
          >
            IntelliForge AI OS
          </span>
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #06b6d4)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '18px',
          }}
        >
          Build reliable AI agents
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#94a3b8',
            maxWidth: '780px',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          OSS harness framework + India-first ForgeOS Cloud. Executable, verifiable,
          stateful agent systems.
        </div>
        <div
          style={{
            marginTop: '36px',
            fontSize: '18px',
            color: '#64748b',
          }}
        >
          aios.intelliforge.tech
        </div>
      </div>
    ),
    { ...size },
  )
}
