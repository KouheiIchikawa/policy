# Common Node Modules Policy

## Purpose

This repository hosts official websites for apps under `https://kouheiichikawa.github.io/policy/`.
Each app directory is a public site root, for example `TurfOfAngel/`.

Node dependencies are shared at the repository root so every Node-based app can resolve the same installed packages without keeping a separate `node_modules` directory inside each app folder.

## Directory Rules

- Public app sites live in app folders such as `TurfOfAngel/`, `Ei-Oh-Den/`, and `Shinso_Gakuen/`.
- App-specific site policies should live in `.github/specs/<app-folder>.md` when a site has non-obvious URL, build, asset, or design rules.
- Before changing an app site, read this common policy and the app-specific spec if it exists.
- Repository-root `common/` is the public shared asset path for assets reused by multiple sites.
- Public pages may reference `../common/...`, `./common/...`, or `/policy/common/...` for intentionally public shared assets.
- Browser-readable assets in `common/` are URL-addressable by design.
- Shared Node dependencies live in repository-root `node_modules/`.
- Private project specifications live in `.github/specs/`.
- The repository-root `package-lock.json` is the only npm lockfile for shared workspace installs.

## npm Workspace Rules

The repository root `package.json` defines npm workspaces for Node-based app folders.

Current workspace:

- `Ei-Oh-Den`
- `Shinso_Gakuen`
- `TurfOfAngel`

When adding another Node-based app site, add its folder name to the root `workspaces` array.

## Commands

Install shared dependencies from the repository root:

```bash
npm install
```

Do not run `npm install` inside app folders for normal development, because that recreates app-local `node_modules/`.

Run the Turf of Angel development server from the repository root:

```bash
npm run dev:turf-of-angel
```

Run the Ei-Oh-Den development server from the repository root:

```bash
npm run dev:ei-oh-den
```

Run the Shinso Gakuen development server from the repository root:

```bash
npm run dev:shinso-gakuen
```

Build Turf of Angel from the repository root:

```bash
npm run build:turf-of-angel
```

Build Ei-Oh-Den from the repository root:

```bash
npm run build:ei-oh-den
```

Build Shinso Gakuen from the repository root:

```bash
npm run build:shinso-gakuen
```

`Shinso_Gakuen/privacy-policy.html` is a fixed public URL. Its Vite source is under `Shinso_Gakuen/app/`, and the production build writes the static HTML back to `Shinso_Gakuen/privacy-policy.html`.

The app-local commands still work from inside `Ei-Oh-Den/`, `Shinso_Gakuen/`, and `TurfOfAngel/`, because Node resolves packages by walking up to the repository-root `node_modules/`.

## Access Policy

`.github/specs/` is repository-internal documentation and must not be linked from public pages.
`.github/scripts/` is for local development helpers only and must not be linked from public pages.

## App-Specific Specs

Existing app-specific specs:

- `Shinso_Gakuen`: `.github/specs/Shinso_Gakuen.md`

Create or update an app-specific spec when a site gains special handling such as fixed legacy URLs, generated image assets, shared asset references, or a distinct build/deploy flow.
