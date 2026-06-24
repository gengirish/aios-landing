import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import CopyButton from '@/components/CopyButton'
import { HARNESS_PACKAGES, installCommand } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'Docs — IntelliForge AI OS',
  description: 'Install and get started with the @intelliforge/harness SDK packages.',
}

const QUICKSTART = `${installCommand('@intelliforge/harness-core @intelliforge/harness-memory @intelliforge/harness-tools')}

import { createHarness } from '@intelliforge/harness-core'

const harness = createHarness({
  model: 'gpt-4o',
  memory: { tiers: ['working', 'semantic'] },
})

await harness.run({ task: 'Summarize quarterly revenue from CSV' })`

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-if-dark">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-if-text-dim hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to landing
        </Link>

        <p className="eyebrow mb-3">Documentation</p>
        <h1 className="text-4xl font-800 text-white mb-4">
          @intelliforge/harness <span className="text-gradient-if">SDK</span>
        </h1>
        <p className="text-if-text-dim text-base leading-relaxed mb-10 max-w-2xl">
          Eight TypeScript packages implementing the Code as Agent Harness taxonomy.
          MIT licensed. Install individually or compose a full harness stack.
        </p>

        {/* Quick start */}
        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-4">Quick Start</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
              <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">
                TypeScript
              </span>
              <CopyButton text={QUICKSTART} />
            </div>
            <pre className="p-5 text-xs font-mono text-cyan-400/90 leading-relaxed overflow-x-auto">
              {QUICKSTART}
            </pre>
          </div>
        </section>

        {/* Install all */}
        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-4">Install All Packages</h2>
          <div className="glass-card rounded-xl p-4 flex items-center justify-between gap-4">
            <code className="text-xs font-mono text-cyan-400 break-all">
              npm install {HARNESS_PACKAGES.map((p) => p.pkg).join(' ')}
            </code>
            <CopyButton
              text={`npm install ${HARNESS_PACKAGES.map((p) => p.pkg).join(' ')}`}
            />
          </div>
        </section>

        {/* Package list */}
        <section>
          <h2 className="text-xl font-700 text-white mb-4">Package Reference</h2>
          <div className="space-y-3">
            {HARNESS_PACKAGES.map((pkg) => (
              <div key={pkg.pkg} className="glass-card rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <code className="text-sm font-mono text-cyan-400">{pkg.pkg}</code>
                    <p className="text-sm text-if-text-dim mt-1 leading-relaxed">{pkg.desc}</p>
                  </div>
                  <CopyButton text={installCommand(pkg.pkg)} label="Copy install" />
                </div>
                <div className="mt-3 font-mono text-xs text-if-text-dim/80 bg-black/30 rounded-lg px-4 py-2.5">
                  {installCommand(pkg.pkg)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="mt-16 glass-card-indigo rounded-xl p-8 text-center">
          <h2 className="text-xl font-700 text-white mb-2">Source &amp; Examples</h2>
          <p className="text-sm text-if-text-dim mb-5">
            SDK packages ship from the IntelliForge Turborepo. GitHub repo goes live with ForgeOS Cloud Alpha.
          </p>
          <a
            href="https://github.com/gengirish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View on GitHub <ExternalLink size={14} />
          </a>
        </section>
      </div>
    </main>
  )
}
