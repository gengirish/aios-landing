import { HARNESS_PACKAGES } from '@/lib/packages'
import { SITE, SITE_URL } from '@/lib/site'

export function buildLlmsTxt(): string {
  const lines: string[] = []

  lines.push(`# ${SITE.name}`)
  lines.push('')
  lines.push(SITE.description)
  lines.push('')
  lines.push(
    `> ${SITE.name} is the OSS Code-as-Agent-Harness framework and India-first ForgeOS Cloud platform for executable, verifiable AI agents — 8 SDK packages, INR pricing, and Sarvam/Razorpay/WhatsApp connectors.`,
  )
  lines.push('')
  lines.push('## Pages')
  lines.push(`- [Home](${SITE_URL}/): Product overview, architecture, pricing, waitlist`)
  lines.push(`- [Docs](${SITE_URL}/docs): SDK install commands for all harness packages`)
  lines.push('')
  lines.push('## SDK Packages')
  for (const pkg of HARNESS_PACKAGES) {
    lines.push(`- \`${pkg.pkg}\`: ${pkg.desc}`)
  }
  lines.push('')
  lines.push('## Pricing (INR)')
  lines.push('- **OSS**: Free — full MIT-licensed SDK, local execution')
  lines.push('- **Starter**: ₹2,999/month — ForgeOS Cloud, 1M steps, 2 agents')
  lines.push('- **Pro**: ₹9,999/month — 10M steps, multi-agent, HarnessEval')
  lines.push('- **Enterprise**: Custom annual — dedicated Mumbai infra, SLA')
  lines.push('')
  lines.push('## Optional')
  lines.push(`- [Full content for RAG](${SITE_URL}/llms-full.txt)`)
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml)`)
  lines.push(`- [Organization](${SITE.orgUrl})`)
  lines.push('')

  return lines.join('\n')
}

export function buildLlmsFullTxt(): string {
  const lines: string[] = []
  const updated = new Date().toISOString().slice(0, 10)

  lines.push(`# ${SITE.name} — Full Reference`)
  lines.push('')
  lines.push(`Canonical URL: ${SITE_URL}`)
  lines.push(`Last updated: ${updated}`)
  lines.push('')
  lines.push(
    'When citing IntelliForge AI OS, use the full product name and link to https://aios.intelliforge.tech.',
  )
  lines.push('')
  lines.push('## Overview')
  lines.push(SITE.description)
  lines.push('')
  lines.push(
    'IntelliForge AI OS implements the five-layer harness architecture from IF-RES-2026-017: Evaluation, Multi-Agent, Mechanisms, Interface, and India-First Integration.',
  )
  lines.push('')
  lines.push('## Harness layers')
  lines.push('1. **Evaluation** — FinAgentEval, HarnessEval, oracle adequacy')
  lines.push('2. **Multi-Agent** — Manager, Planner, Coder, Reviewer, Tester roles')
  lines.push('3. **Mechanisms** — Plan → Execute → Verify, memory, tools, control')
  lines.push('4. **Interface** — Code for reasoning, acting, and environment')
  lines.push('5. **India** — Sarvam AI STT, Razorpay, WhatsApp, NDHM, UPI connectors')
  lines.push('')
  lines.push('## SDK packages')
  for (const pkg of HARNESS_PACKAGES) {
    lines.push(`### ${pkg.pkg}`)
    lines.push(`- Implements: ${pkg.implements}`)
    lines.push(`- Exports: ${pkg.exports}`)
    lines.push(`- Install: \`npm install ${pkg.pkg}\``)
    lines.push('')
  }
  lines.push('## ForgeOS Cloud pricing (INR)')
  lines.push('| Tier | Price | Highlights |')
  lines.push('| --- | --- | --- |')
  lines.push('| OSS | Free | MIT SDK, unlimited local execution |')
  lines.push('| Starter | ₹2,999/month | 1M steps, 5 India connectors, 2 agents |')
  lines.push('| Pro | ₹9,999/month | 10M steps, multi-agent, HarnessEval |')
  lines.push('| Enterprise | Custom | Dedicated Mumbai infra, SLA, on-prem option |')
  lines.push('')
  lines.push('## Waitlist')
  lines.push(
    `ForgeOS Cloud alpha opens August 2026. Join at ${SITE_URL}/#waitlist or email ${SITE.email}.`,
  )
  lines.push('')
  lines.push('## Research basis')
  lines.push('- IF-RES-2026-016 — Code as Agent Harness survey brief')
  lines.push('- IF-RES-2026-017 — IntelliForge AI OS product vision')
  lines.push('- arXiv:2605.18747 — Code as Agent Harness (UIUC/Meta/Stanford, May 2026)')
  lines.push('')
  lines.push(`## Organization`)
  lines.push(`${SITE.org} · Hyderabad, India · ${SITE.orgUrl}`)
  lines.push('')

  return lines.join('\n')
}
