import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'IntelliForge AI OS — Build Reliable AI Agents',
  description:
    'The OSS harness framework + India-first hosted platform for building executable, verifiable, and stateful AI agent systems. Built on Code as Agent Harness research. Powered by @intelliforge/harness.',
  keywords: [
    'AI agent framework', 'agent harness', 'LLM agents', 'India AI platform',
    'IntelliForge', 'ForgeOS', 'harness engineering', 'AI OS',
  ],
  openGraph: {
    title: 'IntelliForge AI OS',
    description: 'OSS harness framework + India-first hosted platform for AI agents.',
    url: 'https://aios.intelliforge.tech',
    siteName: 'IntelliForge AI OS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelliForge AI OS',
    description: 'OSS harness framework + India-first hosted platform for AI agents.',
  },
  metadataBase: new URL('https://aios.intelliforge.tech'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
