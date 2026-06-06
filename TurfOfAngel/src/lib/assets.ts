export function assetPath(path: `/${string}`) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export function commonAssetPath(path: `/${string}`) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const rootBase = base.replace(/\/TurfOfAngel$/, '')
  return `${rootBase}/common${path}`
}
