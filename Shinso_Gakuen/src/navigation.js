export const navItems = [
  { id: 'story', href: './story.html', label: { ja: 'ストーリー', en: 'Story' } },
  { id: 'character', href: './character.html', label: { ja: 'キャラクター', en: 'Character' } },
  { id: 'book', href: './book.html', label: { ja: '書籍', en: 'Books' } },
  { id: 'comic', href: './comic.html', label: { ja: 'コミック', en: 'Comic' } },
  {
    id: 'guide',
    href: './guide.html',
    label: { ja: '攻略', en: 'Guide' },
    badge: { ja: '工事中', en: 'Draft' },
    tooltip: {
      ja: '攻略ページは試作中です',
      en: 'This guide page is a draft',
    },
  },
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
