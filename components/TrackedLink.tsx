'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackCta } from '@/lib/analytics'

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  cta: string
  location?: string
  children: ReactNode
}

export default function TrackedLink({
  cta,
  location,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackCta(cta, location)
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
