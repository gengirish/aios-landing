# IntelliForge AI OS — Landing Page

**aios.intelliforge.tech** — The OSS harness framework + India-first hosted platform for building executable, verifiable, and stateful AI agent systems.

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Neon PostgreSQL (waitlist)
- lucide-react

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Neon PostgreSQL (waitlist)
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require

# AiSensy WhatsApp (optional — waitlist confirmation)
AISENSY_API_KEY=your_aisensy_key
AISENSY_CAMPAIGN_NAME=aios_waitlist_confirmation
```

## Project Structure

```
aios-landing/
├── app/
│   ├── api/waitlist/  — Waitlist POST endpoint
│   ├── docs/          — SDK install docs
│   ├── layout.tsx     — Root layout + metadata
│   ├── page.tsx       — Main page (assembles sections)
│   └── globals.css    — IF design system + Tailwind
├── components/        — Landing page sections
├── lib/
│   ├── db.ts          — Neon waitlist insert
│   ├── aisensy.ts     — WhatsApp confirmation
│   └── packages.ts    — Shared SDK package metadata
└── tailwind.config.ts — IF design tokens
```

## Research Basis

- **IF-RES-2026-016** — Code as Agent Harness survey brief
- **IF-RES-2026-017** — IntelliForge AI OS product vision
- **arXiv:2605.18747** — Source research paper (UIUC/Meta/Stanford, May 2026)

---

*IntelliForge Digital Services · Kondapur, Hyderabad · [intelliforge.tech](https://intelliforge.tech)*
