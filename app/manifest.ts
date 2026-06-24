import type { MetadataRoute } from 'next'
import { BRAND, BRAND_ASSETS } from '@/lib/brand'
import { SITE_URL } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.product,
    short_name: BRAND.subline,
    description: BRAND.descriptor,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#4f46e5',
    icons: [
      {
        src: BRAND_ASSETS.icon512,
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: BRAND_ASSETS.icon512,
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    id: SITE_URL,
  }
}
