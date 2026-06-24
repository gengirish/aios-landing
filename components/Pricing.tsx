import { Check } from 'lucide-react'
import TrackedLink from '@/components/TrackedLink'

const TIERS = [
  {
    name: 'OSS',
    tagline: 'Community',
    price: 'Free',
    unit: 'forever',
    color: '#94a3b8',
    border: 'border-white/10',
    bg: 'bg-white/[0.02]',
    cta: 'Install SDK',
    ctaStyle: 'btn-secondary',
    href: '#docs',
    features: [
      'Full @intelliforge/harness SDK',
      'Local execution — unlimited',
      'MIT licensed, fork freely',
      'Community Discord',
      'All 8 SDK packages',
      'Bootcamp curriculum access',
    ],
  },
  {
    name: 'Starter',
    tagline: 'Indie Builders',
    price: '₹2,999',
    unit: '/month',
    color: '#06b6d4',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    cta: 'Join Waitlist',
    ctaStyle: 'btn-secondary border-cyan-500/40 text-cyan-300',
    href: '#waitlist',
    features: [
      'ForgeOS Cloud managed runtime',
      '1M execution steps / month',
      '5 India-first connectors',
      'Basic telemetry dashboard',
      '2 concurrent agents',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Product Teams',
    price: '₹9,999',
    unit: '/month',
    color: '#4f46e5',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/8',
    cta: 'Join Waitlist',
    ctaStyle: 'btn-primary',
    href: '#waitlist',
    highlight: true,
    features: [
      '10M execution steps / month',
      'All India-first connectors',
      'Multi-agent orchestration',
      'HarnessEval access',
      '10 concurrent agents',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Scale + Compliance',
    price: 'Custom',
    unit: 'annual contract',
    color: '#7c3aed',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
    cta: 'Talk to Girish',
    ctaStyle: 'btn-secondary border-purple-500/40 text-purple-300',
    href: 'mailto:girish@intelliforge.tech',
    features: [
      'Unlimited execution',
      'Dedicated Fly.io Mumbai infra',
      'EU routing via Estonia OÜ',
      'FinAgentEval private benchmarks',
      'On-prem option available',
      'SLA + white-label',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Pricing</p>
          <h2 className="text-4xl font-800 text-white mb-4">
            Free to build.<br />
            <span className="text-gradient-if">₹ to scale.</span>
          </h2>
          <p className="text-if-text-dim max-w-xl mx-auto text-base">
            The OSS SDK is always free. ForgeOS Cloud charges only for managed execution —
            priced in INR, built for Indian teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.bg} border ${tier.border} rounded-xl p-6 flex flex-col ${
                tier.highlight ? 'ring-2 ring-indigo-500/40' : ''
              }`}
            >
              {tier.highlight && (
                <div className="text-center text-[10px] font-800 text-indigo-300 uppercase tracking-widest mb-4 -mt-1">
                  ★ Most Popular
                </div>
              )}
              <div className="mb-4">
                <div className="text-[10px] font-700 uppercase tracking-widest mb-1" style={{ color: tier.color }}>
                  {tier.name}
                </div>
                <div className="text-xs text-if-text-dim mb-3">{tier.tagline}</div>
                <div className="text-3xl font-900 text-white">{tier.price}</div>
                <div className="text-xs text-if-text-dim mt-0.5">{tier.unit}</div>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-if-text-dim">
                    <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <TrackedLink
                href={tier.href}
                cta={tier.cta.toLowerCase().replace(/\s+/g, '_')}
                location={`pricing_${tier.name.toLowerCase()}`}
                className={`${tier.ctaStyle} justify-center text-sm py-2.5 px-4 rounded-lg font-600 text-center block`}
              >
                {tier.cta}
              </TrackedLink>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-if-text-dim mt-8">
          College & institutional pricing available. Contact{' '}
          <a href="mailto:girish@intelliforge.tech" className="text-indigo-400 hover:underline">
            girish@intelliforge.tech
          </a>
          {' '}· EU enterprise via Estonia OÜ entity.
        </p>
      </div>
    </section>
  )
}
