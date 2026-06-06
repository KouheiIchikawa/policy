# Shinso Gakuen Site Policy

## Purpose

`Shinso_Gakuen/` is the official website for the Shinso Gakuen app under:

```text
https://kouheiichikawa.github.io/policy/Shinso_Gakuen/
```

This site is a static GitHub Pages site built with Vite and React.

## Public URL Rules

- Keep `Shinso_Gakuen/privacy-policy.html` as a fixed public URL.
- Do not move public HTML files into nested folders if that changes existing browser URLs.
- Current public pages:
  - `Shinso_Gakuen/index.html`
  - `Shinso_Gakuen/story.html`
  - `Shinso_Gakuen/character.html`
  - `Shinso_Gakuen/app.html`
  - `Shinso_Gakuen/privacy-policy.html`

## Source and Build Layout

- Vite root is `Shinso_Gakuen/app/`.
- React source lives in `Shinso_Gakuen/src/`.
- Build output is written back to `Shinso_Gakuen/`.
- Build from the repository root:

```bash
npm run build:shinso-gakuen
```

- Do not create `Shinso_Gakuen/node_modules/`.
- Dependencies resolve from repository-root `node_modules/` through the npm workspace setup.

## Asset Policy

- Source assets used by Vite live under `Shinso_Gakuen/app/assets/`.
- Built public assets are emitted to `Shinso_Gakuen/assets/`.
- Do not manually edit generated files under `Shinso_Gakuen/assets/` unless there is no source-side equivalent.
- If a file in `Shinso_Gakuen/assets/` must be changed, sync the source copy under `Shinso_Gakuen/app/assets/` first and rebuild.
- Shared assets used by multiple sites belong in repository-root `common/`, not inside `Shinso_Gakuen/`.

Current key visual assets:

- `app/assets/ShisoGakuenKeyVisual_ja.png`: top page Japanese PC visual
- `app/assets/ShisoGakuenKeyVisual_en.png`: top page English PC visual
- `app/assets/ShisoGakuenKeyVisual_sp.png`: top page portrait/mobile visual
- `app/assets/ShisoGakuenKeyVisual_other.png`: story, character, app, and privacy page visual

Generated site assets:

- Character profile images live in `app/assets/characters/`.
- Story decorative images live in `app/assets/story/`.
- Generated image assets should be committed only when they are actually referenced by the site.
- Remove obsolete generated images from both source and built output when they are no longer referenced.

## Design Policy

- Maintain the dark, mysterious, green-accented school mystery style.
- Keep `index`, `story`, `character`, `app`, and `privacy-policy` visually consistent.
- The top page uses language-specific key visuals and a portrait/mobile key visual.
- Other pages use the shared `ShisoGakuenKeyVisual_other.png` visual.
- Avoid adding decorative borders around major visual assets unless they are part of the intended design.
- Story decorations should support the mystery atmosphere and must not reduce text readability.

## i18n Policy

- Pages support `ja` and `en` language state.
- The selected language is stored in `localStorage` under `shinso-gakuen-lang`.
- Links between pages should preserve language using `withLanguage()`.

## Verification

After changing the site:

```bash
npm run build:shinso-gakuen
```

For local visual checks, use:

```text
http://127.0.0.1:<port>/Shinso_Gakuen/
http://127.0.0.1:<port>/Shinso_Gakuen/story.html
http://127.0.0.1:<port>/Shinso_Gakuen/character.html
http://127.0.0.1:<port>/Shinso_Gakuen/app.html
http://127.0.0.1:<port>/Shinso_Gakuen/privacy-policy.html
```

The repository dev server may choose a later port if `5173` is already in use.
