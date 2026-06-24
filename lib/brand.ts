/**
 * IntelliForge AI OS — brand identity tokens
 * Single source of truth for colors, voice, and asset paths.
 */

export const BRAND = {
  product: 'IntelliForge AI OS',
  parent: 'IntelliForge',
  subline: 'AI OS',
  platform: 'ForgeOS Cloud',
  sdk: '@intelliforge/harness',

  tagline: 'Build reliable AI agents.',
  descriptor:
    'OSS harness framework + India-first hosted platform for executable, verifiable, and stateful AI agent systems.',

  pitch:
    'The Code-as-Agent-Harness stack — 8 SDK packages, 5 architecture layers, INR pricing.',

  voice: {
    tone: ['precise', 'engineering-first', 'India-grounded', 'research-backed'],
    avoid: ['revolutionary', 'synergy', 'magic', '10x without evidence'],
    prefer: ['executable', 'verifiable', 'stateful', 'harness', 'oracle'],
  },
} as const

export const BRAND_COLORS = {
  dark: '#0f172a',
  darkElevated: '#1e293b',
  text: '#e2e8f0',
  textDim: '#94a3b8',

  indigo: '#4f46e5',
  purple: '#7c3aed',
  cyan: '#06b6d4',
  orange: '#f97316',
  green: '#10b981',

  gradient: 'linear-gradient(90deg, #4f46e5, #7c3aed, #06b6d4)',
  gradientDiagonal: 'linear-gradient(135deg, #4f46e5, #7c3aed, #06b6d4)',
  ctaGradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
} as const

export const HARNESS_LAYERS = [
  { id: 'india', label: 'INDIA', color: BRAND_COLORS.orange },
  { id: 'interface', label: 'INTERFACE', color: BRAND_COLORS.cyan },
  { id: 'mechanisms', label: 'MECHANISMS', color: BRAND_COLORS.purple },
  { id: 'multi', label: 'MULTI-AGENT', color: BRAND_COLORS.indigo },
  { id: 'eval', label: 'EVAL', color: BRAND_COLORS.green },
] as const

export const BRAND_ASSETS = {
  mark: '/brand/logo-mark.svg',
  markLight: '/brand/logo-mark-light.svg',
  wordmark: '/brand/wordmark.svg',
  lockup: '/brand/lockup-horizontal.svg',
  harnessStack: '/brand/harness-stack.svg',
  socialBanner: '/brand/social-banner.svg',
  linkedinBanner: '/brand/linkedin-banner.svg',
  icon512: '/brand/icon-512.svg',
} as const

export const TYPOGRAPHY = {
  sans: "'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700, black: 800 },
} as const
