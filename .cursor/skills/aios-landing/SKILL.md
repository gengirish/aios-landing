---
name: aios-landing
description: IntelliForge AI OS landing page patterns — IF design tokens, waitlist API, LLM SEO routes, Vercel Analytics events. Use when editing aios.intelliforge.tech.
---

# IntelliForge AI OS Landing

## Stack
Next.js 14 App Router · Tailwind IF tokens · Neon waitlist · Vercel Analytics · optional AiSensy WhatsApp

## Reused patterns (from sibling projects)
| Pattern | Source | Location |
|---|---|---|
| E.164 phone validation | awaazos | `lib/phone.ts` |
| llms.txt + AI crawlers | citeforge + llm-seo skill | `app/llms.txt/`, `app/robots.ts` |
| Sitemap + OG + JSON-LD | ImpactForge | `app/sitemap.ts`, `app/opengraph-image.tsx`, `lib/json-ld.ts` |
| Analytics events | .cursorrules TODO | `lib/analytics.ts`, `TrackedLink`, `SectionTracker` |

## Analytics events
- `waitlist_submit` — `{ has_phone: boolean }`
- `cta_click` — `{ label, location? }`
- `section_view` — `{ section }` for architecture, products, roadmap, pricing, waitlist

## LLM SEO routes
- `/llms.txt` — curated discovery file
- `/llms-full.txt` — RAG-friendly full reference
- `/sitemap.xml`, `/robots.txt` — standard + AI crawler allowlist

## Waitlist
- `POST /api/waitlist` — name, email, role, use_case, optional phone (E.164 IN)
- DB: `aios_waitlist` with optional `phone` column
- Migration: `db/migrate-phone.sql`

## Do not change
5-layer harness architecture · 8 SDK package names · INR pricing tiers · IF monogram styling
