export const navItems = [
  { id: 'story', href: './story.html', label: { ja: 'ストーリー', en: 'Story' } },
  { id: 'character', href: './character.html', label: { ja: 'キャラクター', en: 'Character' } },
  { id: 'comic', href: './comic.html', label: { ja: 'コミック', en: 'Comic' } },
  { id: 'app', href: './app.html', label: { ja: 'アプリ', en: 'App' } },
  {
    id: 'privacy-policy',
    href: './privacy-policy.html',
    label: { ja: 'プライバシーポリシー', en: 'Privacy Policy' },
  },
]

export const officialXUrl = 'https://x.com/sio_sio_bull'

export function withLanguage(href, language) {
  return `${href}?lang=${language}`
}
