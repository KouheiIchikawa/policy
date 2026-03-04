# Turf of Angel Privacy Policy

GitHub Pages で配信できる `Vite + React + TypeScript + Tailwind CSS + Framer Motion` 構成の静的サイトです。

## 特徴

- 既存の日本語プライバシーポリシー本文を保持
- サイバーネオン × ガラスモーフィズム × オーロラグラデの1ページ構成
- `window.scrollTo({ behavior: "smooth" })` ベースの目次スクロール
- ダークモード切替と `localStorage` 保存
- 軽量な自前トースト
- `i18n/` 配下で日本語・英語UIを管理
- GitHub Pages の `base` に対応

## ディレクトリ

```text
policy/TurfOfAngel/
├─ public/
│  ├─ images/
│  │  ├─ turf_of_angel_logo.png
│  │  ├─ ic_launcher_foreground.png
│  │  └─ Android_Xgirl.png
│  └─ common/
│     ├─ appstore_badge.svg
│     └─ Google_Play_Badge_JA.svg
├─ src/
│  ├─ components/
│  ├─ hooks/
│  ├─ lib/
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ types.ts
│  └─ vite-env.d.ts
├─ i18n/
│  ├─ en.ts
│  ├─ index.ts
│  └─ ja.ts
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## ローカル起動

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

## GitHub Pages 設定

`vite.config.ts` は以下のように `base` を設定しています。

```ts
export default defineConfig({
  base: '/policy/TurfOfAngel/',
  plugins: [react()],
})
```

リポジトリや公開先が変わる場合は、この `base` を必ず実URLに合わせて変更してください。

画像とバッジは `public/images` と `public/common` に配置し、コード側では `/images/...` `/common/...` を `assetPath()` 経由で参照しています。

## GitHub Pages デプロイ例

### Actions を使う場合

`.github/workflows/deploy.yml` の例:

```yml
name: Deploy Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: policy/TurfOfAngel/package-lock.json
      - run: npm ci
        working-directory: policy/TurfOfAngel
      - run: npm run build
        working-directory: policy/TurfOfAngel
      - uses: actions/upload-pages-artifact@v3
        with:
          path: policy/TurfOfAngel/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### `gh-pages` ブランチを使う場合

```bash
npm install
npm run build
```

生成された `dist/` の中身を `gh-pages` ブランチへ配置してください。

## i18n の拡張

- `i18n/ja.ts`: 既存本文を保持した日本語データ
- `i18n/en.ts`: 英語UIと英語版ポリシー文面
- `src/hooks/useLocale.ts`: 言語選択を `localStorage` に保存

## 補足

- セクション見出しは `scroll-mt-24` を設定しています。
- 目次クリックは `window.scrollTo({ behavior: "smooth" })` を使っています。
- 画像参照はベースパス崩れを避けるため `assetPath('/images/...')` に統一しています。
