import { useState } from 'react'
import './cookieConsent.css'

const consentCookieName = 'shinso_cookie_consent'
const consentMaxAge = 60 * 60 * 24 * 365

const consentCopy = {
  ja: {
    title: 'Cookieの使用について',
    body: 'このサイトでは、言語設定の保存とGoogle Analytics 4によるアクセス解析のためにCookieを使用します。許可すると、閲覧状況の把握とサイト改善に利用します。',
    accept: '許可',
    reject: '拒否',
    privacy: 'プライバシーポリシー',
  },
  en: {
    title: 'Cookie Notice',
    body: 'This site uses cookies to save language preferences and measure site usage with Google Analytics 4. If allowed, analytics cookies help us understand visits and improve the site.',
    accept: 'Allow',
    reject: 'Reject',
    privacy: 'Privacy Policy',
  },
}

function getCookieConsent() {
  if (typeof document === 'undefined') return null
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${consentCookieName}=`))
    ?.split('=')[1] ?? null
}

function saveCookieConsent(value) {
  document.cookie = `${consentCookieName}=${value}; max-age=${consentMaxAge}; path=/; SameSite=Lax`
}

function updateAnalyticsConsent(value) {
  if (typeof window.gtag !== 'function') return

  window.gtag('consent', 'update', {
    analytics_storage: value === 'accepted' ? 'granted' : 'denied',
  })
}

export function CookieConsent({ language }) {
  const [consent, setConsent] = useState(getCookieConsent)
  const copy = consentCopy[language] ?? consentCopy.ja

  if (consent) return null

  function handleConsent(value) {
    saveCookieConsent(value)
    updateAnalyticsConsent(value)
    setConsent(value)
  }

  return (
    <aside className="cookie-consent" aria-label={copy.title}>
      <div className="cookie-consent-copy">
        <strong>{copy.title}</strong>
        <p>{copy.body}</p>
        <a href={`./privacy-policy.html?lang=${language}`}>{copy.privacy}</a>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-secondary" onClick={() => handleConsent('rejected')}>
          {copy.reject}
        </button>
        <button type="button" onClick={() => handleConsent('accepted')}>
          {copy.accept}
        </button>
      </div>
    </aside>
  )
}
