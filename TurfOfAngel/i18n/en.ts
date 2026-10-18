import type { PolicyLocaleContent } from '../src/types'

export const en: PolicyLocaleContent = {
  meta: {
    title: 'Privacy Policy | Turf of Angel',
    description: 'Privacy policy for Turf of Angel.',
  },
  ui: {
    privacyPolicy: 'Privacy Policy',
    policySections: 'Privacy policy sections',
  },
  hero: {
    badge: 'Official Game & Privacy',
    title: 'Turf of Angel',
    subtitle: 'A fun and competitive horse racing game with easy-to-read privacy guidance.',
    description:
      'This page summarizes how Turf of Angel handles personal information in a simple and straightforward way.',
    ctaPrimary: 'Jump to policy',
    ctaSecondary: 'View stores',
  },
  toc: {
    title: 'Contents',
  },
  introHtml:
    '“Turf of Angel” (hereinafter referred to as “the App”) is an application provided by <strong>Kouhei Elimi Lab</strong> (hereinafter referred to as “the Lab”).<br />The Lab respects user privacy and prioritizes the protection of personal information in development.<br />The App does not send your personal information to developer-operated servers.',
  sections: [
    {
      title: '1. Information We Collect',
      html: 'Names and birth dates entered for gameplay are stored on your device and are not sent to the Lab. You do not need to use your real name or birth date. The App does not access location or advertising identifiers.',
    },
    {
      title: '2. Data Storage and Usage',
      html: 'Data generated and saved within the App, such as game progress, is stored only on the user’s device.<br />Player and horse names, progress, language, and separate music / sound-effect preferences stay on your device. Audio and translations are bundled with the app; no text is sent to translation services.',
    },
    {
      title: '3. Advertising and Analytics Tools',
      html: 'The App does not include any advertising display or analytics tools, such as Google AdMob or Firebase Analytics.',
    },
    {
      title: '4. Provision of Information to Third Parties',
      html: 'The Lab does not provide user information to third parties except where required by law.',
    },
    {
      title: '5. Contact',
      html: '',
    },
  ],
  followCard: {
    eyebrow: 'Follow us',
    title: 'Check the latest updates on X',
    handle: '@sio_sio_bull',
    button: 'Open X',
    href: 'https://x.com/sio_sio_bull?t=dF7S6XSDgtZbjfl7_hdxzg&s=09',
    imageAlt: 'Illustration of an android girl holding up an X hologram',
  },
  store: {
    title: 'Download the app',
    ariaLabel: 'App download links',
    appStoreAlt: 'Download on the App Store',
    playStoreAlt: 'Get it on Google Play',
    appStoreHref: 'https://apps.apple.com/jp/app/turfofangel/id6754843679',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.turfofangel&hl=ja',
  },
  toast: {
    localeChangedTitle: 'Language updated',
    localeChangedDescription: 'The selected language has been saved on this device.',
  },
  footer: {
    copyright: '© 2025–2026 Kouhei Elimi Lab',
  },
}
