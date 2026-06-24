# IntelliForge AI OS — Landing Page

**aios.intelliforge.tech** — The OSS harness framework + India-first hosted platform for building executable, verifiable, and stateful AI agent systems.

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- lucide-react

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment Variables

Create `.env.local`:

```bash
# Supabase (for waitlist form)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# AiSensy WhatsApp (for waitlist confirmation)
AISENSY_API_KEY=your_aisensy_key
```

## Project Structure

```
aios-landing/
├── app/
│   ├── layout.tsx     — Root layout + metadata
│   ├── page.tsx       — Main page (assembles sections)
│   └── globals.css    — IF design system + Tailwind
├── components/
│   ├── Navbar.tsx     — Fixed top nav
│   ├── Hero.tsx       — Animated harness layer stack
│   ├── Architecture.tsx — 5-layer stack + SDK table
│   ├── Products.tsx   — IF portfolio as tenants
│   ├── Roadmap.tsx    — 5 build phases
│   ├── Pricing.tsx    — 4 tiers in INR
│   ├── Waitlist.tsx   — Email capture form
│   └── Footer.tsx     — Links + brand
├── tailwind.config.ts — IF design tokens
└── .cursorrules       — Cursor AI rules for this project
```

## Design System

All tokens in `tailwind.config.ts` under `colors.if-*`.
All reusable classes in `app/globals.css` under `@layer components`.

Key classes:
- `.text-gradient-if` — indigo→purple→cyan gradient
- `.glass-card` — frosted glass card
- `.btn-primary` — indigo gradient button
- `.tag-pill` — small label pill
- `.harness-layer` — left-bordered layer row

## TODOs (wire in Cursor)

- [ ] Wire Waitlist to Supabase (`aios_waitlist` table)
- [ ] Add AiSensy WhatsApp confirmation on submit
- [ ] Create `/app/docs/page.tsx`
- [ ] Deploy to aios.intelliforge.tech
- [ ] Add Vercel Analytics
- [ ] Integrate into Turborepo as `apps/aios-landing`

## Research Basis

- **IF-RES-2026-016** — Code as Agent Harness survey brief
- **IF-RES-2026-017** — IntelliForge AI OS product vision
- **arXiv:2605.18747** — Source research paper (UIUC/Meta/Stanford, May 2026)

---

*IntelliForge Digital Services · Kondapur, Hyderabad · [intelliforge.tech](https://intelliforge.tech)*
