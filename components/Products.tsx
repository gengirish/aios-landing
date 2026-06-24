const PRODUCTS = [
  {
    emoji: '🎙️',
    name: 'AwaazOS',
    tagline: 'Voice Billing Agent',
    harness: 'India Layer + Working Memory',
    desc: 'Sarvam AI STT/TTS + Vocal Bridge WebRTC. Validates the India-first integration layer and audio tool calls.',
    color: '#f97316',
    status: 'Live',
  },
  {
    emoji: '💼',
    name: 'ForgeAhead + Vettd',
    tagline: 'Hiring Intelligence',
    harness: 'Multi-Agent Orchestration',
    desc: 'Manager agent coordinates job-matching and candidate vetting. Validates Manager→Coder→Reviewer role taxonomy.',
    color: '#4f46e5',
    status: 'Live',
  },
  {
    emoji: '❤️',
    name: 'HridLink',
    tagline: 'Rural Cardiac Telemedicine',
    harness: 'Human-in-Loop Safety',
    desc: 'Cardiologist approval gates as permission-tier transitions. NDHM connector. Validates Open Problem #5.',
    color: '#ef4444',
    status: 'MVP',
  },
  {
    emoji: '🏟️',
    name: 'Maidaan',
    tagline: 'Community Sports Platform',
    harness: 'Semantic + Experiential Memory',
    desc: 'Player profiles (long-term memory), match history retrieval (semantic), skill accumulation (experiential).',
    color: '#10b981',
    status: 'Live',
  },
  {
    emoji: '📊',
    name: 'FinAgentEval',
    tagline: 'Evaluation Harness',
    harness: 'Harness-Level Evaluation',
    desc: 'Temporal leakage detection, distribution shift robustness. M.Tech thesis (IIIT Dharwad) + product eval layer.',
    color: '#06b6d4',
    status: 'Research',
  },
  {
    emoji: '🌐',
    name: 'RemoteForge + CiteForge',
    tagline: 'Discovery Platforms',
    harness: 'Semantic Memory + Tool Use',
    desc: 'Affiliate engine, GEO/AEO content optimization. Validates verification-driven tool use at scale.',
    color: '#7c3aed',
    status: 'Live',
  },
]

const STATUS_STYLES: Record<string, string> = {
  Live:     'bg-green-500/15 text-green-400 border border-green-500/30',
  MVP:      'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  Research: 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
}

const MORE_PRODUCTS = [
  'LocalFlash', 'IELTSForge', 'GarageOS', 'KinderOS',
  'AgencyOS', 'SpinForge', 'ComplianceForge.ai', 'AaramOS',
  'MoveMore', 'ForgeID', 'EnglishForge', 'ContentForge',
]

export default function Products() {
  return (
    <section id="products" className="py-24 relative">

      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Portfolio as Proof</p>
          <h2 className="text-4xl font-800 text-white mb-4">
            10+ Live Products.<br />
            <span className="text-gradient-if">Every Harness Layer Validated.</span>
          </h2>
          <p className="text-if-text-dim max-w-2xl mx-auto text-base leading-relaxed">
            IntelliForge's own portfolio are the first ForgeOS Cloud tenants.
            Each product validates a different harness capability in production —
            not a demo, not a toy. Real traffic, real India integrations.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="glass-card rounded-xl p-5 hover:border-white/15 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{product.emoji}</span>
                <span className={`text-[10px] font-700 uppercase tracking-wider px-2 py-1 rounded-full ${STATUS_STYLES[product.status]}`}>
                  {product.status}
                </span>
              </div>
              <h3 className="text-base font-800 text-white mb-0.5">{product.name}</h3>
              <p className="text-[11px] text-if-text-dim mb-2">{product.tagline}</p>
              <div
                className="text-[10px] font-700 uppercase tracking-wider mb-3 px-2 py-1 rounded inline-block"
                style={{ color: product.color, background: `${product.color}15` }}
              >
                {product.harness}
              </div>
              <p className="text-xs text-if-text-dim leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional products chip list */}
        <div className="glass-card rounded-xl p-5">
          <p className="text-xs text-if-text-dim mb-3 font-600">
            Additional ForgeOS Cloud tenants —
          </p>
          <div className="flex flex-wrap gap-2">
            {MORE_PRODUCTS.map((p) => (
              <span
                key={p}
                className="bg-white/5 border border-white/10 text-if-text-dim text-xs font-600 px-3 py-1.5 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
