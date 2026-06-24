'use client'

import { useState, useEffect } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="if-mono group-hover:border-indigo-400 transition-colors">IF</div>
          <div className="flex flex-col">
            <span className="text-[13px] font-800 text-white leading-none tracking-tight">
              IntelliForge
            </span>
            <span className="text-[11px] font-700 text-gradient-if leading-none">
              AI OS
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-500 text-if-text-dim hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/gengirish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-if-text-dim hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a href="#waitlist" className="btn-primary text-sm py-2 px-4">
            Join Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-if-text-dim hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-white/5 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-if-text-dim hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#waitlist" className="btn-primary w-full justify-center mt-3 text-sm">
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  )
}
