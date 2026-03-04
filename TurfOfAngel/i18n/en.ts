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
    badge: 'Cyber Neon Glassmorphism',
    title: 'Privacy Policy',
    subtitle: 'A static GitHub Pages-ready policy page for Turf of Angel with aurora gradients and glass cards.',
    description:
      'The Japanese policy text is preserved as-is, while the surrounding interface is localized and rebuilt with React.',
    ctaPrimary: 'Jump to policy',
    ctaSecondary: 'View stores',
  },
  toc: {
    title: 'Contents',
  },
  introHtml:
    '“Turf of Angel” (hereinafter referred to as “the App”) is an application provided by <strong>Kohei Elimi Lab</strong> (hereinafter referred to as “the Lab”).<br />The Lab respects user privacy and prioritizes the protection of personal information in development.<br />The App does not collect, store, or transmit any personal information of users.',
  sections: [
    {
      title: '1. Information We Collect',
      html: 'The App does not collect any personally identifiable information such as users’ names, addresses, email addresses, location information, or device identifiers.',
    },
    {
      title: '2. Data Storage and Usage',
      html: 'Data generated and saved within the App, such as game progress, is stored only on the user’s device.<br />This data is not transmitted to any external server.',
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
    copyright: '© 2026 Kohei Elimi Lab',
  },
}
