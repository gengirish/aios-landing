import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, RefreshCw, Brain, ShieldCheck, Users } from 'lucide-react'
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

        {/* Core Concepts */}
        <section className="mt-16 mb-12">
          <h2 className="text-xl font-700 text-white mb-4">Core Concepts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw size={16} className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm font-700 text-white">Plan → Execute → Verify</span>
              </div>
              <p className="text-xs text-if-text-dim leading-relaxed">
                The PEV loop is the harness heartbeat. The planner decomposes a task into steps,
                the executor runs each step in a sandbox, and the verifier checks correctness against
                an oracle (tests, assertions, or a judge model). The loop repeats until the oracle
                passes or a budget is exhausted.
              </p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Brain size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm font-700 text-white">5-Tier Memory</span>
              </div>
              <p className="text-xs text-if-text-dim leading-relaxed">
                Working (in-context scratchpad), semantic (vector retrieval), experiential (skill
                distillation), long-term (persistent facts), multi-agent (shared state across roles).
                Each tier has a distinct write pattern and eviction policy.
              </p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={16} className="text-purple-400 flex-shrink-0" />
                <span className="text-sm font-700 text-white">Permission Tiers</span>
              </div>
              <p className="text-xs text-if-text-dim leading-relaxed">
                Tier 0 read-only → Tier 1 local writes → Tier 2 tool calls → Tier 3 production
                deploy. The harness enforces tier escalation before dangerous actions, logged
                for audit.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-4">Usage Examples</h2>
          <div className="space-y-4">

            {/* PEV Loop */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">PEV Loop</span>
                <CopyButton text={`import { createHarness } from '@intelliforge/harness-core'
import { ToolRegistry, createTool } from '@intelliforge/harness-tools'

const registry = new ToolRegistry()
registry.register(createTool({
  name: 'read_file',
  fn: async ({ path }) => fs.readFileSync(path, 'utf8'),
}))

const harness = createHarness({ model: 'claude-sonnet-4-6', tools: registry })
const result = await harness.run({
  task: 'Fix the failing unit test in src/billing.ts',
  verifier: 'npm test -- --testPathPattern=billing',
})`} />
              </div>
              <pre className="p-5 text-xs font-mono text-cyan-400/90 leading-relaxed overflow-x-auto">{`import { createHarness } from '@intelliforge/harness-core'
import { ToolRegistry, createTool } from '@intelliforge/harness-tools'

const registry = new ToolRegistry()
registry.register(createTool({
  name: 'read_file',
  fn: async ({ path }) => fs.readFileSync(path, 'utf8'),
}))

const harness = createHarness({ model: 'claude-sonnet-4-6', tools: registry })
const result = await harness.run({
  task: 'Fix the failing unit test in src/billing.ts',
  verifier: 'npm test -- --testPathPattern=billing',
})`}</pre>
            </div>

            {/* Semantic Memory */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">Semantic Memory</span>
                <CopyButton text={`import { SemanticMemory } from '@intelliforge/harness-memory'

const memory = new SemanticMemory({ provider: 'neon-pgvector' })
await memory.store({ key: 'razorpay-webhook', content: handlerCode, tags: ['payments'] })

const hits = await memory.retrieve({ query: 'payment webhook handler', k: 3 })`} />
              </div>
              <pre className="p-5 text-xs font-mono text-cyan-400/90 leading-relaxed overflow-x-auto">{`import { SemanticMemory } from '@intelliforge/harness-memory'

const memory = new SemanticMemory({ provider: 'neon-pgvector' })
await memory.store({ key: 'razorpay-webhook', content: handlerCode, tags: ['payments'] })

const hits = await memory.retrieve({ query: 'payment webhook handler', k: 3 })`}</pre>
            </div>

            {/* India Connectors */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">India Connectors</span>
                <CopyButton text={`import { SarvamSTT, RazorpayTool, WhatsAppTool } from '@intelliforge/harness-india'

const stt = new SarvamSTT({ lang: 'hi-IN' })
const transcript = await stt.transcribe(audioStream)

const razorpay = new RazorpayTool({ keyId: process.env.RAZORPAY_KEY_ID })
const order = await razorpay.createOrder({ amount: 299900, currency: 'INR' })

const wa = new WhatsAppTool({ token: process.env.WA_TOKEN })
await wa.send({ to: '+919876543210', text: \`Order \${order.id} created\` })`} />
              </div>
              <pre className="p-5 text-xs font-mono text-cyan-400/90 leading-relaxed overflow-x-auto">{`import { SarvamSTT, RazorpayTool, WhatsAppTool } from '@intelliforge/harness-india'

const stt = new SarvamSTT({ lang: 'hi-IN' })
const transcript = await stt.transcribe(audioStream)

const razorpay = new RazorpayTool({ keyId: process.env.RAZORPAY_KEY_ID })
const order = await razorpay.createOrder({ amount: 299900, currency: 'INR' })

const wa = new WhatsAppTool({ token: process.env.WA_TOKEN })
await wa.send({ to: '+919876543210', text: \`Order \${order.id} created\` })`}</pre>
            </div>
          </div>
        </section>

        {/* Evaluation */}
        <section className="mb-12">
          <h2 className="text-xl font-700 text-white mb-4">Evaluation</h2>
          <div className="glass-card-cyan rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-[10px] font-700 uppercase tracking-widest text-cyan-400 mb-1">HarnessEval</div>
                <p className="text-xs text-if-text-dim leading-relaxed">
                  Measures oracle adequacy (does your test suite actually catch regressions?), plan efficiency
                  (steps to completion), and memory hit rate. Run via{' '}
                  <code className="text-cyan-400 font-mono">npx @intelliforge/harness-eval</code>.
                </p>
              </div>
              <div>
                <div className="text-[10px] font-700 uppercase tracking-widest text-purple-400 mb-1">FinAgentEval</div>
                <p className="text-xs text-if-text-dim leading-relaxed">
                  Private benchmark for financial AI agents covering GST, TDS, Razorpay flows, and NDHM.
                  Available on Pro and Enterprise plans.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">TypeScript</span>
                <CopyButton text={`import { HarnessEval } from '@intelliforge/harness-eval'

const report = await HarnessEval.run({
  harness,
  suite: './evals/billing.yaml',
  metrics: ['oracle_adequacy', 'plan_efficiency'],
})
console.log(report.summary)`} />
              </div>
              <pre className="p-5 text-xs font-mono text-cyan-400/90 leading-relaxed overflow-x-auto">{`import { HarnessEval } from '@intelliforge/harness-eval'

const report = await HarnessEval.run({
  harness,
  suite: './evals/billing.yaml',
  metrics: ['oracle_adequacy', 'plan_efficiency'],
})
console.log(report.summary)`}</pre>
            </div>
          </div>
        </section>

        {/* Multi-Agent Roles */}
        <section className="mb-16">
          <h2 className="text-xl font-700 text-white mb-4">Multi-Agent Roles</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
              <Users size={14} className="text-indigo-400" />
              <span className="text-[11px] font-600 text-if-text-dim uppercase tracking-wider">
                @intelliforge/harness-multi
              </span>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { role: 'Manager', color: '#4f46e5', desc: 'Owns the top-level goal, allocates subtasks to roles, and resolves conflicts in shared harness state.' },
                { role: 'Planner', color: '#7c3aed', desc: 'Decomposes tasks into steps using LinearPlanner, StructuredPlanner, or SearchPlanner strategies.' },
                { role: 'Coder', color: '#06b6d4', desc: 'Executes code generation and patching steps inside a SandboxedExecutor at the assigned permission tier.' },
                { role: 'Reviewer', color: '#10b981', desc: 'Runs static analysis, diff review, and oracle adequacy checks before signalling verify-pass to the manager.' },
                { role: 'Tester', color: '#f97316', desc: 'Executes the verifier suite, collects HarnessMetrics, and feeds failure traces back to the Planner.' },
              ].map(({ role, color, desc }) => (
                <div key={role} className="flex items-start gap-4 px-5 py-4">
                  <span className="text-[10px] font-800 uppercase tracking-widest w-16 flex-shrink-0 mt-0.5" style={{ color }}>
                    {role}
                  </span>
                  <p className="text-xs text-if-text-dim leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
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
