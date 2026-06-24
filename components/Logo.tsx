import { BRAND, BRAND_ASSETS } from '@/lib/brand'

type LogoVariant = 'mark' | 'lockup' | 'wordmark'
type LogoTheme = 'dark' | 'light'

type LogoProps = {
  variant?: LogoVariant
  theme?: LogoTheme
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
}

const SIZES = {
  sm: { mark: 32, lockup: { w: 140, h: 32 }, wordmark: { w: 120, h: 24 } },
  md: { mark: 36, lockup: { w: 168, h: 40 }, wordmark: { w: 160, h: 28 } },
  lg: { mark: 48, lockup: { w: 210, h: 48 }, wordmark: { w: 200, h: 32 } },
} as const

function assetFor(variant: LogoVariant, theme: LogoTheme): string {
  if (variant === 'mark') {
    return theme === 'light' ? BRAND_ASSETS.markLight : BRAND_ASSETS.mark
  }
  if (variant === 'wordmark') return BRAND_ASSETS.wordmark
  return BRAND_ASSETS.lockup
}

export default function Logo({
  variant = 'lockup',
  theme = 'dark',
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
  const src = assetFor(variant, theme)
  const width =
    variant === 'mark' ? SIZES[size].mark : SIZES[size][variant].w
  const height =
    variant === 'mark' ? SIZES[size].mark : SIZES[size][variant].h

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={BRAND.product}
      width={width}
      height={height}
      className={`h-auto ${className}`}
      style={{ width, height: 'auto' }}
    />
  )

  if (!href) return img

  return (
    <a href={href} className="inline-flex items-center shrink-0 hover:opacity-90 transition-opacity" aria-label={BRAND.product}>
      {img}
    </a>
  )
}

/** CSS monogram fallback for inline contexts */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div className={`if-mono ${className}`} aria-hidden>
      IF
    </div>
  )
}
