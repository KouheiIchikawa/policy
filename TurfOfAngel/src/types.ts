export type Locale = 'ja' | 'en'

export type PolicySection = {
  title: string
  html: string
}

export type FollowCardContent = {
  eyebrow: string
  title: string
  handle: string
  button: string
  href: string
  imageAlt: string
}

export type StoreContent = {
  title: string
  ariaLabel: string
  appStoreAlt: string
  playStoreAlt: string
  appStoreHref: string
  playStoreHref: string
}

export type PolicyLocaleContent = {
  meta: {
    title: string
    description: string
  }
  ui: {
    privacyPolicy: string
    policySections: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  toc: {
    title: string
  }
  introHtml: string
  sections: PolicySection[]
  followCard: FollowCardContent
  store: StoreContent
  toast: {
    localeChangedTitle: string
    localeChangedDescription: string
  }
  footer: {
    copyright: string
  }
}

export type ToastTone = 'default' | 'error'

export type ToastItem = {
  id: number
  title: string
  description: string
  tone?: ToastTone
}
