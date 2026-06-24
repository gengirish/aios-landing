import { Github, Linkedin, ExternalLink } from 'lucide-react'

const LINKS = {
  Product: [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Products', href: '#products' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '/docs' },
  ],
  Research: [
    { label: 'IF-RES-2026-016', href: '#' },
    { label: 'IF-RES-2026-017', href: '#' },
    { label: 'FinAgentEval', href: '#' },
    { label: 'arXiv:2605.18747', href: 'https://arxiv.org/abs/2605.18747', external: true },
    { label: 'AID Framework', href: '#' },
  ],
  IntelliForge: [
    { label: 'intelliforge.tech', href: 'https://intelliforge.tech', external: true },
    { label: 'AI Bootcamp', href: 'https://upskill.intelliforge.tech', external: true },
    { label: 'MVP Labs', href: 'https://mvplabs.intelliforge.tech', external: true },
    { label: 'AgencyOS', href: 'https://agencyos.intelliforge.tech', external: true },
    { label: 'Contact', href: 'mailto:girish@intelliforge.tech' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="if-mono">IF</div>
              <div>
                <div className="text-sm font-800 text-white">IntelliForge</div>
                <div className="text-xs text-gradient-if font-700">AI OS</div>
              </div>
            </div>
            <p className="text-xs text-if-text-dim leading-relaxed mb-4">
              OSS harness framework + India-first hosted platform for building
              executable, verifiable, and stateful AI agent systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/gengirish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-if-text-dim hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/girishhiremath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-if-text-dim hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-700 text-white uppercase tracking-wider mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-xs text-if-text-dim hover:text-white transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      {'external' in link && link.external && <ExternalLink size={10} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-if-text-dim">
            © 2026 IntelliForge Digital Services · Kondapur, Hyderabad · India
          </p>
          <div className="flex items-center gap-4 text-[11px] text-if-text-dim">
            <span>EU entity: Estonia OÜ (e-Residency)</span>
            <span>·</span>
            <a href="mailto:girish@intelliforge.tech" className="hover:text-white transition-colors">
              girish@intelliforge.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
