import type { PolicyLocaleContent } from '../src/types'

export const ja: PolicyLocaleContent = {
  meta: {
    title: 'プライバシーポリシー｜Turf of Angel',
    description: 'Turf of Angel のプライバシーポリシーです。',
  },
  ui: {
    privacyPolicy: 'プライバシーポリシー',
    policySections: 'プライバシーポリシー本文',
  },
  hero: {
    badge: 'Cyber Neon Glassmorphism',
    title: 'Privacy Policy',
    subtitle: '楽しく白熱できる競馬ゲーム、Turf of Angel のプライバシーポリシーです。',
    description: '個人情報の取り扱いについて、必要な内容をわかりやすくまとめています。',
    ctaPrimary: '本文へ移動',
    ctaSecondary: 'ストアを見る',
  },
  toc: {
    title: '目次',
  },
  introHtml:
    '「Turf of Angel」（以下、「本アプリ」といいます）は、<strong>Kohei Elimi Lab</strong>（以下、「当ラボ」といいます）が提供するアプリケーションです。<br />当ラボは、利用者のプライバシーを尊重し、個人情報の保護を最優先に開発を行っています。<br />本アプリでは、利用者の個人情報を一切収集・保存・送信いたしません。',
  sections: [
    {
      title: '1. 取得する情報について',
      html: '本アプリは、利用者の氏名、住所、メールアドレス、位置情報、端末識別情報など、個人を特定できる情報を一切取得いたしません。',
    },
    {
      title: '2. データの保存および利用',
      html: 'アプリ内で生成・保存されるデータ（ゲームの進行状況など）は、すべて利用者の端末内にのみ保存されます。<br />これらのデータが外部サーバーへ送信されることはありません。',
    },
    {
      title: '3. 広告および解析ツールについて',
      html: '本アプリには、広告表示やアクセス解析ツール（例：Google AdMob、Firebase Analyticsなど）は一切組み込まれておりません。',
    },
    {
      title: '4. 第三者への情報提供',
      html: '当ラボは、法令に基づく場合を除き、利用者の情報を第三者に提供することはありません。',
    },
    {
      title: '5. お問い合わせ',
      html: '',
    },
  ],
  followCard: {
    eyebrow: 'Follow us',
    title: 'Xで最新情報をチェック',
    handle: '@sio_sio_bull',
    button: 'Xを開く',
    href: 'https://x.com/sio_sio_bull?t=dF7S6XSDgtZbjfl7_hdxzg&s=09',
    imageAlt: 'Xのホログラムを掲げるアンドロイドガールのイラスト',
  },
  store: {
    title: 'アプリをダウンロード',
    ariaLabel: 'アプリのダウンロードリンク',
    appStoreAlt: 'App Storeからダウンロード',
    playStoreAlt: 'Google Playで手に入れよう',
    appStoreHref: 'https://apps.apple.com/jp/app/turfofangel/id6754843679',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.turfofangel&hl=ja',
  },
  toast: {
    localeChangedTitle: '表示言語を切り替えました',
    localeChangedDescription: '選択内容はこの端末に保存されます。',
  },
  footer: {
    copyright: '© 2026 Kohei Elimi Lab',
  },
}
