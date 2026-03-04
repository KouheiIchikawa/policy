import { useEffect, useState } from 'react'
import type { Locale } from '../types'

const STORAGE_KEY = 'toa-locale'

function inferLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('ja') ? 'ja' : 'en'
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ja' || saved === 'en') {
      return saved
    }
    return inferLocale()
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  return { locale, setLocale }
}
