'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Github, Zap } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

// Animated code traces that cycle through harness operations
const CODE_TRACES = [
  'harness.plan({ task: "resolve issue #412", model: "claude-sonnet-4-6" })',
  'memory.semantic.retrieve({ query: "razorpay webhook handler", k: 5 })',
  'tools.sarvam.transcribe({ audio: stream, lang: "hi-IN" })',
  'sandbox.execute({ code: patchFn, timeout: 30_000 })',
  'verifier.run({ tests: ["unit", "integration"], strict: true })',
  'agents.planner.delegate({ role: "coder", spec: issueSpec })',
  'harness.control.verify({ outcome, oracle: testSuite })',
  'memory.experiential.store({ skill: "webhook-debug", trace })',
  'permissions.check({ action: "deploy:production", tier: 3 })',
  'harness.evolve({ mutation: "add-retry-policy", evidence: telemetry })',
]

const HARNESS_LAYERS = [
  {
    id: 'eval',
    label: 'EVAL',
    title: 'Evaluation Layer',
    subtitle: 'FinAgentEval · HarnessEval · Oracle Adequacy',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.3)',
  },
  {
    id: 'multi',
    label: 'MULTI-AGENT',
    title: 'Scaling the Harness',
    subtitle: 'Manager · Planner · Coder · Reviewer · Tester',
    color: '#4f46e5',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.3)',
  },
  {
    id: 'mechanisms',
    label: 'MECHANISMS',
    title: 'Harness Mechanisms',
    subtitle: 'Plan → Execute → Verify · Memory · Tools · Control',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.3)',
  },
  {
    id: 'interface',
    label: 'INTERFACE',
    title: 'Harness Interface',
    subtitle: 'Code for Reasoning · Acting · Environment',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
  },
  {
    id: 'india',
    label: 'INDIA',
    title: 'India-First Integration Layer',
    subtitle: 'Sarvam AI · Razorpay · WhatsApp · NDHM · UPI',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.25)',
  },
]

export default function Hero() {
  const [traceIdx, setTraceIdx] = useState(0)
  const [activeLayer, setActiveLayer] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Entrance animation
    const t = setTimeout(() => setVisible(true), 100)

    // Cycle code traces
    const interval = setInterval(() => {
      setTraceIdx((i) => (i + 1) % CODE_TRACES.length)
    }, 2800)

    return () => {
      clearTimeout(t)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(79,70,229,0.4) 0%, rgba(124,58,237,0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Copy ── */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow">Introducing</span>
              <span className="tag-pill tag-indigo">
                <Zap size={10} />
                IF-RES-2026-017
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-900 leading-[1.05] tracking-tight mb-5">
              <span className="text-white">IntelliForge</span>
              <br />
              <span className="text-gradient-if">AI OS</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-if-text-dim leading-relaxed mb-4 max-w-lg">
              The OSS harness framework + India-first hosted platform for building
              <span className="text-white"> executable, verifiable, and stateful</span> AI agent systems.
            </p>
            <p className="text-sm text-if-text-dim/70 mb-8 max-w-md">
              Built on the Code as Agent Harness research taxonomy (UIUC · Meta · Stanford, 2026).
              Powered by <code className="text-cyan-400 font-mono text-xs">@intelliforge/harness</code>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <TrackedLink href="#waitlist" cta="join_waitlist" location="hero" className="btn-primary">
                Join Waitlist
                <ArrowRight size={16} />
              </TrackedLink>
              <TrackedLink
                href="https://github.com/gengirish"
                target="_blank"
                rel="noopener noreferrer"
                cta="github_harness"
                location="hero"
                className="btn-secondary"
              >
                <Github size={16} />
                @intelliforge/harness
              </TrackedLink>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: '3-Layer Harness', color: 'tag-indigo' },
                { label: 'Sarvam AI · Razorpay · WhatsApp', color: 'tag-orange' },
                { label: 'FinAgentEval', color: 'tag-cyan' },
                { label: '10+ Live Products', color: 'tag-green' },
                { label: 'MIT Licensed', color: 'tag-purple' },
              ].map((t) => (
                <span key={t.label} className={`tag-pill ${t.color}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Harness Stack Visual ── */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Code trace header */}
            <div className="glass-card rounded-t-xl px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-if-text-dim text-xs font-mono ml-2">harness.ts</span>
            </div>

            {/* Live code trace */}
            <div className="glass-card px-4 py-3 border-b border-white/5 min-h-[52px] flex items-center">
              <p
                key={traceIdx}
                className="code-trace text-[11px] leading-relaxed animate-fade-in truncate"
              >
                <span className="text-purple-400">await </span>
                {CODE_TRACES[traceIdx]}
              </p>
            </div>

            {/* Harness layer stack */}
            <div className="glass-card rounded-b-xl p-4 space-y-2">
              {HARNESS_LAYERS.map((layer, i) => (
                <div
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className="harness-layer cursor-default"
                  style={{
                    borderLeftColor: layer.color,
                    background: activeLayer === layer.id ? layer.bg : 'rgba(255,255,255,0.02)',
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-[9px] font-800 tracking-widest uppercase"
                          style={{ color: layer.color }}
                        >
                          {layer.label}
                        </span>
                      </div>
                      <div className="text-[13px] font-600 text-white">{layer.title}</div>
                      <div className="text-[11px] text-if-text-dim">{layer.subtitle}</div>
                    </div>
                    <div
                      className="w-1.5 h-1.5 rounded-full ml-3 flex-shrink-0 animate-pulse-slow"
                      style={{ background: layer.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom stat bar */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                { value: '5', label: 'Memory Types', color: '#4f46e5' },
                { value: '8', label: 'SDK Packages', color: '#06b6d4' },
                { value: '₹2,999', label: 'Starter / mo', color: '#10b981' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-lg p-3 text-center">
                  <div className="text-xl font-800" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] text-if-text-dim mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
