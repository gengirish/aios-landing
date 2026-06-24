import { Code2, Layers, Cpu, Globe } from 'lucide-react'
import { HARNESS_PACKAGES } from '@/lib/packages'

const LAYERS = [
  {
    icon: <Layers size={18} className="text-green-400" />,
    label: 'Evaluation',
    title: 'FinAgentEval + HarnessEval',
    desc: 'Harness-level benchmarks beyond final task success. Temporal leakage detection, distribution shift robustness, intermediate failure analysis. The only India-built agent evaluation harness.',
    color: '#10b981',
    border: 'border-green-500/30',
    bg: 'bg-green-500/5',
  },
  {
    icon: <Cpu size={18} className="text-indigo-400" />,
    label: 'Multi-Agent',
    title: 'Scaling the Harness',
    desc: 'Role taxonomy (Manager · Planner · Coder · Reviewer · Tester). Collaboration modes: sequential pipeline, red-team, adversarial. Shared code-centric harness substrate with transactional state sync.',
    color: '#4f46e5',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/5',
  },
  {
    icon: <Code2 size={18} className="text-purple-400" />,
    label: 'Mechanisms',
    title: 'Plan → Execute → Verify Loop',
    desc: '4 planning paradigms. 5-tier memory system (working · semantic · experiential · long-term · multi-agent). Function / environment / verification / workflow tool use. Sandboxed execution with permission tiers.',
    color: '#7c3aed',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
  },
  {
    icon: <Code2 size={18} className="text-cyan-400" />,
    label: 'Interface',
    title: 'Code for Reasoning · Acting · Environment',
    desc: 'Program-delegated reasoning, formal/symbolic verification, iterative code-grounded loops. Grounded skill selection, programmatic policy generation, lifelong skill libraries. Structured world representations and verifiable environment construction.',
    color: '#06b6d4',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
  },
  {
    icon: <Globe size={18} className="text-orange-400" />,
    label: 'India Layer',
    title: 'Native India-First Connectors',
    desc: 'Sarvam AI (STT/TTS · Vocal Bridge WebRTC) · Razorpay (payments · UPI · subscriptions) · AiSensy (WhatsApp Business) · NDHM/ABDM (health) · IST-aware scheduling · INR paise pricing · E.164 phones · Aadhaar KYC hooks.',
    color: '#f97316',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/5',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Architecture</p>
          <h2 className="text-4xl font-800 text-white mb-4">
            Five Harness Layers.<br />
            <span className="text-gradient-if">Two Deployable Products.</span>
          </h2>
          <p className="text-if-text-dim max-w-2xl mx-auto text-base leading-relaxed">
            Every architectural decision maps to a validated research construct from
            arXiv:2605.18747. No ad-hoc tooling — a rigorous taxonomy implemented as
            production TypeScript.
          </p>
        </div>

        {/* Two-product split */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <div className="glass-card-indigo rounded-xl p-6">
            <div className="text-xs font-700 text-indigo-400 uppercase tracking-widest mb-2">Layer A · OSS</div>
            <h3 className="text-xl font-800 text-white mb-2">@intelliforge/harness</h3>
            <p className="text-sm text-if-text-dim leading-relaxed">
              TypeScript SDK. MIT licensed. Ships in the <code className="text-cyan-400 text-xs">@intelliforge/*</code> Turborepo
              namespace. Plugin architecture for custom memory backends, tool registries, and verifiers.
              Any team can install and build harness-native agents — no cloud required.
            </p>
            <div className="mt-4 font-mono text-xs text-cyan-400/80 bg-black/30 rounded-lg px-4 py-3">
              npm install @intelliforge/harness-core
            </div>
          </div>
          <div className="glass-card-cyan rounded-xl p-6">
            <div className="text-xs font-700 text-cyan-400 uppercase tracking-widest mb-2">Layer B · Hosted</div>
            <h3 className="text-xl font-800 text-white mb-2">ForgeOS Cloud</h3>
            <p className="text-sm text-if-text-dim leading-relaxed">
              Managed harness runtime on Fly.io Mumbai (<code className="text-cyan-400 text-xs">bom</code> region).
              Supabase shared harness state. BullMQ execution queues. Pre-wired India-first connectors.
              Dashboard, telemetry, and agent observatory. INR pricing with freemium entry.
            </p>
            <div className="mt-4 font-mono text-xs text-cyan-400/80 bg-black/30 rounded-lg px-4 py-3">
              aios.intelliforge.tech → ForgeOS Cloud
            </div>
          </div>
        </div>

        {/* Layer stack */}
        <div className="space-y-3 mb-16">
          {LAYERS.map((layer) => (
            <div
              key={layer.label}
              className={`${layer.bg} border ${layer.border} rounded-xl p-5 flex gap-5 items-start group hover:scale-[1.01] transition-transform`}
            >
              <div className="mt-0.5 flex-shrink-0">{layer.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-700 tracking-widest uppercase" style={{ color: layer.color }}>
                    {layer.label}
                  </span>
                  <span className="text-sm font-700 text-white">{layer.title}</span>
                </div>
                <p className="text-sm text-if-text-dim leading-relaxed">{layer.desc}</p>
              </div>
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 mt-2 animate-pulse"
                style={{ background: layer.color }}
              />
            </div>
          ))}
        </div>

        {/* Package table */}
        <div>
          <h3 className="text-xl font-700 text-white mb-4">
            SDK Package Design — <span className="text-gradient-cyan">8 Packages</span>
          </h3>
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-5 py-3 text-[11px] font-700 text-if-text-dim uppercase tracking-wider">Package</th>
                  <th className="text-left px-5 py-3 text-[11px] font-700 text-if-text-dim uppercase tracking-wider hidden md:table-cell">Implements</th>
                  <th className="text-left px-5 py-3 text-[11px] font-700 text-if-text-dim uppercase tracking-wider hidden lg:table-cell">Key Exports</th>
                </tr>
              </thead>
              <tbody>
                {HARNESS_PACKAGES.map((pkg, i) => (
                  <tr
                    key={pkg.pkg}
                    className={`border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${
                      i % 2 === 0 ? 'bg-white/[0.01]' : ''
                    }`}
                  >
                    <td className="px-5 py-3">
                      <code className="text-cyan-400 text-xs font-mono">{pkg.pkg}</code>
                    </td>
                    <td className="px-5 py-3 text-if-text-dim text-xs hidden md:table-cell">{pkg.implements}</td>
                    <td className="px-5 py-3 hidden lg:table-cell">
                      <code className="text-purple-300 text-xs font-mono">{pkg.exports}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
