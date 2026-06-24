'use client'

import { useState, useEffect } from 'react'
import { Github } from 'lucide-react'
import Logo from '@/components/Logo'
import TrackedLink from '@/components/TrackedLink'

const NAV_LINKS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Brand', href: '/brand' },
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
        <Logo variant="lockup" size="md" href="/" />

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
          <TrackedLink
            href="https://github.com/gengirish"
            target="_blank"
            rel="noopener noreferrer"
            cta="github"
            location="navbar"
            className="text-if-text-dim hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </TrackedLink>
          <TrackedLink href="#waitlist" cta="join_waitlist" location="navbar" className="btn-primary text-sm py-2 px-4">
            Join Waitlist
          </TrackedLink>
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
          <TrackedLink
            href="#waitlist"
            cta="join_waitlist"
            location="navbar_mobile"
            className="btn-primary w-full justify-center mt-3 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </TrackedLink>
        </div>
      )}
    </header>
  )
}
