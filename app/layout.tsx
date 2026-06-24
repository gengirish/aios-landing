import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { buildJsonLd } from '@/lib/json-ld'
import { SITE, SITE_URL } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — Build Reliable AI Agents`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'AI agent framework',
    'agent harness',
    'LLM agents',
    'India AI platform',
    'IntelliForge',
    'ForgeOS',
    'harness engineering',
    'AI OS',
    'Code as Agent Harness',
    '@intelliforge/harness',
  ],
  authors: [{ name: SITE.org, url: SITE.orgUrl }],
  creator: SITE.org,
  publisher: SITE.org,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE_URL,
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — OSS harness framework + India-first AI platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      'text/markdown': '/llms.txt',
    },
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/brand/icon-512.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/brand/icon-512.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = buildJsonLd()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
