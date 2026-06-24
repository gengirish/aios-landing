import Link from 'next/link'
import { BRAND, BRAND_ASSETS, BRAND_COLORS, HARNESS_LAYERS } from '@/lib/brand'

export const metadata = {
  title: 'Brand Kit',
  description: 'IntelliForge AI OS logo, colors, and digital assets.',
  robots: { index: false, follow: false },
}

const ASSETS = [
  { name: 'Logo mark (dark)', file: BRAND_ASSETS.mark, w: 64, h: 64, light: false },
  { name: 'Logo mark (light)', file: BRAND_ASSETS.markLight, w: 64, h: 64, light: true },
  { name: 'Wordmark', file: BRAND_ASSETS.wordmark, w: 320, h: 48, light: false },
  { name: 'Horizontal lockup', file: BRAND_ASSETS.lockup, w: 420, h: 64, light: false },
  { name: 'Harness stack', file: BRAND_ASSETS.harnessStack, w: 120, h: 160, light: false },
  { name: 'App icon 512', file: BRAND_ASSETS.icon512, w: 512, h: 512, light: false },
  { name: 'Social banner', file: BRAND_ASSETS.socialBanner, w: 1200, h: 630, light: false },
  { name: 'LinkedIn banner', file: BRAND_ASSETS.linkedinBanner, w: 1584, h: 396, light: false },
] as const

export default function BrandKitPage() {
  return (
    <main className="min-h-screen bg-if-dark">
      <header className="border-b border-white/5 bg-[#0f172a]/90 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm text-if-text-dim hover:text-white transition-colors">
            ← Back to site
          </Link>
          <span className="text-xs font-700 text-if-text-dim uppercase tracking-wider">Brand Kit</span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="eyebrow mb-3">Brand Identity</p>
        <h1 className="text-4xl font-800 text-white mb-3">{BRAND.product}</h1>
        <p className="text-if-text-dim text-lg mb-2">{BRAND.tagline}</p>
        <p className="text-if-text-dim/80 text-sm max-w-2xl mb-12">{BRAND.descriptor}</p>

        <section className="glass-card-indigo rounded-2xl p-10 mb-12 flex flex-col items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND_ASSETS.lockup} alt={BRAND.product} width={420} height={64} />
          <p className="text-xs text-if-text-dim text-center max-w-md">
            Primary lockup — use on dark backgrounds. Download SVGs below for print, social, and app stores.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-6">Color palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { name: 'Dark', hex: BRAND_COLORS.dark },
              { name: 'Indigo', hex: BRAND_COLORS.indigo },
              { name: 'Purple', hex: BRAND_COLORS.purple },
              { name: 'Cyan', hex: BRAND_COLORS.cyan },
              { name: 'Orange', hex: BRAND_COLORS.orange },
              { name: 'Green', hex: BRAND_COLORS.green },
              { name: 'Text', hex: BRAND_COLORS.text },
              { name: 'Dim', hex: BRAND_COLORS.textDim },
            ].map((c) => (
              <div key={c.name} className="glass-card rounded-lg overflow-hidden">
                <div className="h-16" style={{ background: c.hex }} />
                <div className="p-2.5">
                  <div className="text-[11px] font-600 text-white">{c.name}</div>
                  <div className="text-[10px] font-mono text-if-text-dim">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-3 rounded-full max-w-xl" style={{ background: BRAND_COLORS.gradient }} />
          <p className="text-[11px] text-if-text-dim mt-2">Primary brand gradient</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-6">Harness layer spectrum</h2>
          <div className="flex flex-wrap gap-3">
            {HARNESS_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="tag-pill"
                style={{
                  background: `${layer.color}22`,
                  color: layer.color,
                  border: `1px solid ${layer.color}55`,
                }}
              >
                {layer.label}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-700 text-white mb-6">Digital assets</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {ASSETS.map((asset) => (
              <div key={asset.file} className="glass-card rounded-xl p-5 flex flex-col gap-4">
                <div
                  className={`rounded-lg flex items-center justify-center p-4 min-h-[120px] overflow-hidden ${
                    asset.light ? 'bg-white' : 'bg-if-dark border border-white/5'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.file}
                    alt={asset.name}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-600 text-white">{asset.name}</h3>
                  <p className="text-[11px] text-if-text-dim font-mono mt-0.5">
                    {asset.w}×{asset.h} · SVG
                  </p>
                </div>
                <a href={asset.file} download className="btn-secondary text-xs py-2 justify-center">
                  Download SVG
                </a>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-xs text-if-text-dim mt-16">
          Full guidelines in <code className="text-cyan-400/80">brand/IDENTITY.md</code> · Tokens in{' '}
          <code className="text-cyan-400/80">lib/brand.ts</code>
        </p>
      </div>
    </main>
  )
}
