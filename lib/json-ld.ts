import { SITE, SITE_URL } from '@/lib/site'

export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE.org,
        url: SITE.orgUrl,
        logo: `${SITE_URL}/opengraph-image`,
        sameAs: [SITE.orgUrl, 'https://www.linkedin.com/in/girishhiremath'],
        areaServed: 'IN',
        knowsAbout: [
          'AI agent frameworks',
          'Code as Agent Harness',
          'LLM orchestration',
          'India-first AI infrastructure',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        description: SITE.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: SITE.locale,
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE.name,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cross-platform',
        offers: [
          { '@type': 'Offer', name: 'OSS', price: '0', priceCurrency: 'INR' },
          { '@type': 'Offer', name: 'Starter', price: '2999', priceCurrency: 'INR' },
          { '@type': 'Offer', name: 'Pro', price: '9999', priceCurrency: 'INR' },
        ],
        url: SITE_URL,
      },
    ],
  }
}
