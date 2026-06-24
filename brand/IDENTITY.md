# IntelliForge AI OS — Brand Identity

**Product:** IntelliForge AI OS · **Platform:** ForgeOS Cloud · **SDK:** `@intelliforge/harness`  
**Domain:** [aios.intelliforge.tech](https://aios.intelliforge.tech)

## Positioning

IntelliForge AI OS is the **Code-as-Agent-Harness** product line from IntelliForge Digital Services — an OSS framework plus India-first hosted runtime for teams building **executable, verifiable, and stateful** AI agents.

| Attribute | Value |
|---|---|
| Tagline | Build reliable AI agents. |
| Parent brand | IntelliForge (agency + product studio) |
| Product name | IntelliForge **AI OS** (always two words for the subline) |
| Platform name | ForgeOS Cloud |
| Research anchor | IF-RES-2026-017 |

## Visual thesis

**Dark precision engineering** — a harness-terminal aesthetic where the five-layer stack is the hero motif. Not generic “AI purple”; a deliberate **indigo → purple → cyan** spectrum with **India orange** and **eval green** as layer anchors.

### Signature element

The **IF monogram** with five vertical accent bars (EVAL → MULTI → MECHANISMS → INTERFACE → INDIA). This is the primary mark; do not replace with abstract neural-network icons.

## Color system

| Token | Hex | Use |
|---|---|---|
| `if-dark` | `#0f172a` | Page background |
| `if-text` | `#e2e8f0` | Body text |
| `if-text-dim` | `#94a3b8` | Secondary text |
| `if-indigo` | `#4f46e5` | Primary brand, CTAs |
| `if-purple` | `#7c3aed` | Secondary gradient stop |
| `if-cyan` | `#06b6d4` | Accent, code traces |
| `if-orange` | `#f97316` | India layer |
| `if-green` | `#10b981` | Eval layer |

**Primary gradient:** `linear-gradient(90deg, #4f46e5, #7c3aed, #06b6d4)`

## Typography

| Role | Font | Weight |
|---|---|---|
| UI / marketing | Inter | 400–900 |
| Code traces / SDK | JetBrains Mono | 400–700 |

Do not use Space Grotesk, Roboto, or system-only stacks on marketing surfaces.

## Logo usage

### Clear space

Minimum clear space = height of the IF mark on all sides.

### Minimum size

- Mark only: 24px digital minimum
- Lockup: 120px width minimum

### Do

- Use SVG assets from `/public/brand/`
- Use `Logo` component in app UI
- Keep “IF” monogram styling on dark `#0f172a` or light `#ffffff`

### Don't

- Rotate, stretch, or recolor the gradient border
- Change “IF” letterforms
- Place the mark on busy photographic backgrounds without a scrim
- Use the parent IntelliForge agency logo interchangeably with AI OS lockup

## Voice & copy

**Tone:** precise, engineering-first, India-grounded, research-backed.

**Prefer:** executable, verifiable, stateful, harness, oracle, PEV loop, ForgeOS Cloud.

**Avoid:** revolutionary, synergy, magic, “10x” without evidence.

## Digital assets

All files live in `public/brand/`:

| File | Dimensions | Use |
|---|---|---|
| `logo-mark.svg` | 64×64 | Favicon source, app icon base, avatars |
| `logo-mark-light.svg` | 64×64 | Light backgrounds |
| `wordmark.svg` | 320×48 | Text-only lockup |
| `lockup-horizontal.svg` | 420×64 | Nav, docs header |
| `harness-stack.svg` | 120×160 | Architecture diagrams, merch |
| `icon-512.svg` | 512×512 | PWA, app stores |
| `social-banner.svg` | 1200×630 | OG fallback, presentations |
| `linkedin-banner.svg` | 1584×396 | LinkedIn company / personal banner |

**Live preview:** [/brand](/brand) on the site.

## Code references

- Tokens: `lib/brand.ts`
- React component: `components/Logo.tsx`
- CSS utilities: `app/globals.css` (`.if-mono`, `.text-gradient-if`, `.glass-card`)

---

*IntelliForge Digital Services · Kondapur, Hyderabad · IF-RES-2026-017*
