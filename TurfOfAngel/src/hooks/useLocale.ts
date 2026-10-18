import { useEffect, useState } from 'react'
import type { Locale } from '../types'

const STORAGE_KEY = 'toa-locale'

function inferLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('ja') ? 'ja' : 'en'
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (window.location.hash === '#en') return 'en'
    if (window.location.hash === '#ja') return 'ja'
    let saved: string | null = null
    try { saved = window.localStorage.getItem(STORAGE_KEY) } catch { /* private browsing */ }
    if (saved === 'ja' || saved === 'en') {
      return saved
    }
    return inferLocale()
  })

  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, locale) } catch { /* private browsing */ }
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#en' || window.location.hash === '#ja') {
        setLocale(window.location.hash.slice(1) as Locale)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return { locale, setLocale }
}
