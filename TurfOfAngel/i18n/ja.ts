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
    badge: 'Official Game & Privacy',
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
    '「Turf of Angel」（以下、「本アプリ」といいます）は、<strong>Kouhei Elimi Lab</strong>（以下、「当ラボ」といいます）が提供するアプリケーションです。<br />当ラボは、利用者のプライバシーを尊重し、個人情報の保護を最優先に開発を行っています。<br />牧場名・馬名・ゲーム進行・音楽や言語の設定は端末内に保存されます。当ラボのサーバーへの送信や、広告・行動解析による収集は行いません。',
  sections: [
    {
      title: '1. 取得する情報について',
      html: 'ゲーム用に入力した名前・生年月日等は端末内に保存され、当ラボには送信されません。実在の氏名・生年月日を入力する必要はありません。位置情報や端末の広告識別子は取得しません。',
    },
    {
      title: '2. データの保存および利用',
      html: 'アプリ内で生成・保存されるデータ（ゲームの進行状況など）は、すべて利用者の端末内にのみ保存されます。<br />バージョン1.22以降は日本語・英語の表示データと音源を同梱し、翻訳サービスへの文章送信を行いません。旧版では、日本語の表示文を英語にするためにGoogleの翻訳サービスへ送信する場合がありました。外部翻訳を利用しない最新版への更新をおすすめします。',
    },
    {
      title: '3. 広告および解析ツールについて',
      html: '本アプリには、広告表示やアクセス解析ツール（例：Google AdMob、Firebase Analyticsなど）は一切組み込まれておりません。',
    },
    {
      title: '4. 第三者への情報提供',
      html: '当ラボは、法令に基づく場合を除き、利用者の情報を第三者に提供しません。旧版で利用されることがある外部翻訳については、<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googleのプライバシーポリシー</a>もご確認ください。',
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
    copyright: '© 2025–2026 Kouhei Elimi Lab',
  },
}
