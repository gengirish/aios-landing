import { track } from '@vercel/analytics'

export type AnalyticsEvent =
  | 'waitlist_submit'
  | 'cta_click'
  | 'section_view'

export function trackEvent(
  name: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | null>
): void {
  track(name, properties)
}

export function trackCta(label: string, location?: string): void {
  trackEvent('cta_click', { label, ...(location ? { location } : {}) })
}

export function trackSectionView(section: string): void {
  trackEvent('section_view', { section })
}

export function trackWaitlistSubmit(hasPhone: boolean): void {
  trackEvent('waitlist_submit', { has_phone: hasPhone })
}
