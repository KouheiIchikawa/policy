# シンソウ学園 Webサイト仕様書

最終更新日: 2026-06-07

## 公開先

- 公開ベースURL: `https://kouheiichikawa.github.io/policy/Shinso_Gakuen/`
- 静的公開ディレクトリ: `Shinso_Gakuen/`
- 開発用HTMLディレクトリ: `Shinso_Gakuen/app/`
- 画面実装: `Shinso_Gakuen/src/`

## ページ構成

- `index.html`: 公式サイトトップ
- `story.html`: ストーリー
- `character.html`: キャラクター
- `book.html`: 書籍
- `comic.html`: コミック
- `app.html`: アプリ
- `privacy-policy.html`: プライバシーポリシー

各ページは日本語を初期表示とし、`?lang=en` で英語表示へ切り替える。

## 表示言語仕様

- 各ページの大見出しはi18nで日本語/英語を切り替える。
- 見出し上に `story`、`comic`、`privacy policy` などの英字キッカーは表示しない。
- 日本語表示時に英字キッカーと日本語見出しを並列表示しない。

## SEO仕様

全公開HTMLと開発用HTMLに、画面表示へ影響しないhead内メタ情報を設定する。

- `<title>` は各ページの内容に合わせて設定する。
- `<meta name="description">` は各ページ固有の説明文を設定する。
- `<meta name="robots" content="index, follow, max-image-preview:large">` を設定する。
- `<meta name="application-name" content="シンソウ学園">` を設定する。
- canonical URLは公開ベースURL配下の正規URLを設定する。
- `hreflang="ja"`、`hreflang="en"`、`hreflang="x-default"` を設定する。
- OGPは `og:site_name`、`og:type`、`og:title`、`og:description`、`og:url`、`og:image`、`og:image:alt`、`og:locale` を設定する。
- Twitter Cardは `summary_large_image` を設定する。
- OGP/Twitter画像は `assets/keyvisual/ShisoGakuenKeyVisual_ja.png` を使用する。

## AIO仕様

AI検索やAI要約でサイト内容を理解しやすくするため、次を設定する。

- 各HTMLにJSON-LD構造化データを1件ずつ設定する。
- トップページは `WebSite` として設定する。
- ストーリーページは `Article` として設定する。
- キャラクター、コミックページは `CollectionPage` として設定する。
- 書籍ページは `CollectionPage` として設定し、発売中の小説 `シンソウ学園(Ⅰ)` を `Book` として含める。
- アプリページは `SoftwareApplication` として設定し、`applicationCategory` は `GameApplication`、`operatingSystem` は `iOS, Android` とする。
- プライバシーポリシーページは `WebPage` として設定する。
- `llms.txt` を設置し、サイト概要、主要ページ、作品概要、書籍、アプリ、コミック説明を記載する。
- `sitemap.xml` を設置し、主要7ページを登録する。
- `robots.txt` を設置し、クロール許可とサイトマップURLを記載する。

## ファビコン仕様

ファビコンは、添付チビキャラ画像の顔部分をベースにした正方形アイコンを使用する。

配置先:

- `Shinso_Gakuen/assets/favicon/`

静的アセットは `Shinso_Gakuen/assets/` のみで管理する。`Shinso_Gakuen/app/assets/` は作らない。

必要ファイル:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png`
- `favicon-64x64.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-512x512.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`
- `favicon-source.png`
- `favicon-source-square.png`

全HTMLで以下をhead内に設定する。

- `favicon.ico`
- 16x16 PNG
- 32x32 PNG
- Apple Touch Icon
- Web App Manifest
- `theme-color`

## コミック仕様

コミックページでは、ページ番号の数値が大きいものほど新しいものとして扱う。

表示順:

1. `comic002_ja.png` / `comic002_en.png`
2. `comic001_ja.png` / `comic001_en.png`

つまり、`001` は2ページ目に表示する。

日本語説明文:

`シンソウ学園のちびキャラたちによる、ちょっと不思議で、ちょっとゆるい日常漫画。`

## 書籍ページ仕様

日本語本文:

`シンソウ学園(Ⅰ) 入学編をリリースしました。`

`今後、シンソウ学園(Ⅱ) 熱中編、シンソウ学園(Ⅲ) 青春篇もリリース予定です。`

書籍カード:

- シンソウ学園(Ⅰ) 入学編: 発売中。Amazonリンク `https://amzn.asia/d/0gjywItQ` へ遷移する。表紙画像は `assets/book/shinso-gakuen-1.jpg` を使用する。
- シンソウ学園(Ⅱ) 熱中編: リリース予定。Image2.0で生成したCOMING SOON用アイコン `assets/book/coming-soon-volume.png` を使用する。
- シンソウ学園(Ⅲ) 青春篇: リリース予定。Image2.0で生成したCOMING SOON用アイコン `assets/book/coming-soon-volume.png` を使用する。

## アプリページ仕様

日本語本文:

`シンソウ学園アプリを iOS / Android 向けにリリースしました。`

`各ストアからダウンロードして、学園の物語と3x3ギミックをお楽しみください。`

リリースカード:

- iOS: App Storeリンクを表示する。
- Android: Google Playリンクを表示する。

## キービジュアル仕様

トップのキービジュアルには、ふわっと明滅するフェードアニメーションを設定する。

- 画像ファイル `assets/keyvisual/ShisoGakuenKeyVisual_ja.png` と `assets/keyvisual/ShisoGakuenKeyVisual_en.png` は勝手に差し戻さない。
- アニメーションはCSSで実装し、画像アセット自体は変更しない。

## 右下トップへ戻るボタン仕様

全ページに右下のトップへ戻るボタンを設置する。

- 対象ファイル: `assets/back-to-top.css`、`assets/back-to-top.js`
- 静的アセットは `assets/` 配下のみで管理する。
- ボタン内の矢印はテキストではなく、Image2.0で生成したサイト雰囲気に合うPNGアイコンを使用する。
- 使用画像: `assets/back-to-top-icon.png`
- `app/assets/` は使用しない。`npm run build` の `prebuild` で `app/assets/` が存在しないことを検査する。
- ページのスクロール量が少ない場合は表示しない。
- 表示条件は、ページ全体のスクロール可能距離が900pxを超え、かつスクロール位置が420pxを超えた場合とする。
- クリック時はページ上部へ戻る。
- `prefers-reduced-motion: reduce` の場合はスムーズスクロールを使わない。
