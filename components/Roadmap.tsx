const PHASES = [
  {
    num: '0',
    timeline: 'Now → July 14, 2026',
    title: '@intelliforge/harness-core v0.1',
    desc: 'Scaffold Turborepo package. Implement HarnessInterface, createHarness(), and the Plan→Execute→Verify loop. Port AID Framework agent loop. Publish to npm. "Hello Harness" example wiring Claude Sonnet 4.6 to a sandboxed tool.',
    status: 'In Progress',
    statusColor: '#f97316',
    packages: ['harness-core'],
  },
  {
    num: '1',
    timeline: 'July 15 → August 1, 2026',
    title: 'Memory + India Tools',
    desc: 'WorkingMemory (Redis/BullMQ), SemanticMemory (Supabase pgvector), ExperientialMemory (skill library). ToolRegistry with Razorpay, Sarvam, WhatsApp as first India connectors. AwaazOS migrates onto harness-memory + harness-india. Demo at Bootcamp Cohort 1 kickoff.',
    status: 'Planned',
    statusColor: '#4f46e5',
    packages: ['harness-memory', 'harness-tools', 'harness-india'],
  },
  {
    num: '2',
    timeline: 'August → September 2026',
    title: 'ForgeOS Cloud Alpha',
    desc: 'Managed runtime on Fly.io Mumbai. Supabase shared harness state. BullMQ queues. Agent observatory dashboard. ForgeAhead + Vettd migrate to cloud. 3 external alpha teams from Bootcamp. FinAgentEval wired as eval module. aios.intelliforge.tech goes live.',
    status: 'Planned',
    statusColor: '#4f46e5',
    packages: ['harness-control', 'harness-eval'],
  },
  {
    num: '3',
    timeline: 'October → December 2026',
    title: 'Multi-Agent + Evaluation',
    desc: 'Agent Role Taxonomy (Manager · Planner · Coder · Reviewer · Tester). Shared harness state with transactional semantics. FinAgentEval benchmark suite open-sourced. College partner pilot (REC Hulkoti / IIIT Dharwad). EU enterprise routing via Estonia OÜ. HarnessEval leaderboard published.',
    status: 'Planned',
    statusColor: '#4f46e5',
    packages: ['harness-multi'],
  },
  {
    num: '4',
    timeline: 'Q1 2027',
    title: 'ForgeOS Cloud GA',
    desc: 'Full 8-package SDK stable. All 4 pricing tiers live. 10+ IF products as production tenants. FinAgentEval paper submitted. BuildWithAIGiri shifts to ForgeOS Cloud scaffolds. 3+ college MoUs signed. International expansion.',
    status: 'Vision',
    statusColor: '#10b981',
    packages: ['all packages stable'],
  },
]

const STATUS_COLORS: Record<string, string> = {
  'In Progress': 'text-orange-400 bg-orange-500/15 border-orange-500/30',
  'Planned':     'text-indigo-400 bg-indigo-500/15 border-indigo-500/30',
  'Vision':      'text-green-400 bg-green-500/15 border-green-500/30',
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Roadmap</p>
          <h2 className="text-4xl font-800 text-white mb-4">
            Thin v1 fast.<br />
            <span className="text-gradient-cyan">Full vision in parallel.</span>
          </h2>
          <p className="text-if-text-dim max-w-xl mx-auto text-base">
            Every phase ships a usable artifact. Every phase is also bootcamp content,
            college partner material, and a LinkedIn post.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-6">
            {PHASES.map((phase) => (
              <div key={phase.num} className="flex gap-6 items-start">

                {/* Phase number bubble */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-900 text-xl hidden md:flex relative z-10">
                  {phase.num}
                </div>

                {/* Content */}
                <div className="glass-card rounded-xl p-5 flex-1 hover:border-white/12 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs text-if-text-dim font-mono">{phase.timeline}</span>
                    <span className={`text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded-full border ${STATUS_COLORS[phase.status]}`}>
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="text-base font-800 text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-if-text-dim leading-relaxed mb-3">{phase.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {phase.packages.map((pkg) => (
                      <code key={pkg} className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                        {pkg}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
