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
      html: "Ranch names, horse names and birth dates entered for gameplay stay on your device and are not sent to the Lab. You need not use real names or birth dates. Rankings use Google Play Games on Android and Apple Game Center on iOS, with separate rankings for each platform. Google or Apple processes your platform player identifier and scores; your display name, rank and scores may be visible to other players according to your profile settings. There is no developer-operated account or ranking server.",
    },
    {
      title: '2. Data Storage and Usage',
      html: "Game progress, names, language and separate music/sound preferences stay on your device. Rankings submit career prize money, best race prize, victories and elapsed ranch years. Uninstalling the app or clearing its storage removes local progress, settings and pending records. This does not automatically delete scores already stored by Google or Apple. Use the platform’s game-data and profile management options. The developer has no server-side account records.",
    },
    {
      title: '3. Advertising and Analytics Tools',
      html: "No advertising SDK or Firebase Analytics is added. The Google Play Games SDK processes gamer profile information and analytics/diagnostics used to improve SDK stability. Audio and translations are bundled; the app does not record audio or send text to translation services.",
    },
    {
      title: '4. Provision of Information to Third Parties',
      html: "Rankings use Google Play Games on Android and Apple Game Center on iOS, with separate rankings for each platform. Google or Apple processes your platform player identifier and scores; your display name, rank and scores may be visible to other players according to your profile settings. There is no developer-operated account or ranking server. See <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google’s Privacy Policy</a> and <a href=\"https://www.apple.com/legal/privacy/data/en/game-center/\" target=\"_blank\" rel=\"noopener noreferrer\">Game Center and Privacy</a>.",
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
    appStoreHref: 'https://apps.apple.com/app/id6754843679?l=en-US',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.turfofangel&hl=en',
  },
  toast: {
    localeChangedTitle: 'Language updated',
    localeChangedDescription: 'The selected language has been saved on this device.',
  },
  footer: {
    copyright: '© 2025–2026 Kouhei Elimi Lab',
  },
}
