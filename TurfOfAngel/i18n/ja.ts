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
    '「Turf of Angel」（以下、「本アプリ」といいます）は、<strong>Kouhei Elimi Lab</strong>（以下、「当ラボ」といいます）が提供するアプリケーションです。<br />当ラボは、利用者のプライバシーを尊重し、個人情報の保護を最優先に開発を行っています。<br />牧場名・馬名・ゲーム進行・音楽や言語の設定は端末内に保存されます。当ラボ独自のサーバーには送信しません。ランキング利用時のGoogle・Appleによる情報の取扱いは以下をご確認ください。',
  sections: [
    {
      title: '1. 取得する情報について',
      html: "ゲーム用に入力した牧場名・馬名・生年月日は端末内に保存され、当ラボには送信されません。実在の氏名や生年月日を入力する必要はありません。Android版のランキングはGoogle Play Games、iOS版はApple Game Centerを使用し、OS間で順位は共有しません。ログイン時のプラットフォーム識別子と成績をGoogleまたはAppleが処理し、プロフィールの公開設定に応じて表示名・順位・成績が他の利用者に見える場合があります。開発者独自のアカウントやランキングサーバーは使用しません。",
    },
    {
      title: '2. データの保存および利用',
      html: "ゲームの進行、名前、言語、音楽・効果音設定は端末内に保存します。ランキングには累計獲得賞金、最高レース賞金、勝利数、牧場経営年数を送信します。アプリ削除や端末設定で端末内の進行・設定・未送信記録を消去できますが、Google／Appleに登録済みの成績はアプリ削除だけでは消えません。Play GamesまたはGame Center側のゲームデータ・プロフィール管理方法をご利用ください。開発者のサーバーに保管するアカウントデータはありません。",
    },
    {
      title: '3. 広告および解析ツールについて',
      html: "広告SDKやFirebase Analyticsは追加していません。Google Play Games SDKは、ゲーム用プロフィール、SDKの安定性向上に使う分析・診断情報を処理します。ゲーム音源・翻訳は同梱し、音声録音や外部翻訳への文章送信は行いません。",
    },
    {
      title: '4. 第三者への情報提供',
      html: "Android版のランキングはGoogle Play Games、iOS版はApple Game Centerを使用し、OS間で順位は共有しません。ログイン時のプラットフォーム識別子と成績をGoogleまたはAppleが処理し、プロフィールの公開設定に応じて表示名・順位・成績が他の利用者に見える場合があります。開発者独自のアカウントやランキングサーバーは使用しません。 <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Googleのプライバシーポリシー</a>、<a href=\"https://www.apple.com/legal/privacy/data/ja/game-center/\" target=\"_blank\" rel=\"noopener noreferrer\">Game Centerとプライバシー</a>もご確認ください。",
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
