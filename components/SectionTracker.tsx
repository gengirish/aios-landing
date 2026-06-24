'use client'

import { useEffect } from 'react'
import { trackSectionView } from '@/lib/analytics'

const SECTION_IDS = ['architecture', 'products', 'roadmap', 'pricing', 'waitlist']

export default function SectionTracker() {
  useEffect(() => {
    const seen = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id)
            trackSectionView(id)
          }
        }
      },
      { threshold: 0.35 },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
