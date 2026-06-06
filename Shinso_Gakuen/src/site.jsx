import { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import xLogoUrl from '../app/assets/x-logo.svg'
import { navItems, officialXUrl, withLanguage } from './navigation'
import './site.css'

const storageKey = 'shinso-gakuen-lang'
const keyVisualBaseUrl = './assets/keyvisual/'
const keyVisualSpUrl = `${keyVisualBaseUrl}ShisoGakuenKeyVisual_sp.png`

const visualByLanguage = {
  ja: `${keyVisualBaseUrl}ShisoGakuenKeyVisual_ja.png`,
  en: `${keyVisualBaseUrl}ShisoGakuenKeyVisual_en.png`,
}

const siteCopy = {
  ja: {
    title: 'シンソウ学園 | 公式サイト',
    description:
      'シンソウ学園 公式サイト。勇気とストーリーで知覚に迫る学園思考パズルアドベンチャー。',
    visualLabel: 'シンソウ学園 キービジュアル',
    footerBrand: 'SHINSO GAKUEN',
  },
  en: {
    title: 'Shinso Gakuen | Official Site',
    description:
      'Official site for Shinso Gakuen, a school puzzle adventure where courage, story, and perception shape every choice.',
    visualLabel: 'Shinso Gakuen key visual',
    footerBrand: 'SHINSO GAKUEN',
  },
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get('lang')
  const savedLanguage = window.localStorage.getItem(storageKey)

  if (queryLanguage === 'ja' || queryLanguage === 'en') return queryLanguage
  if (savedLanguage === 'ja' || savedLanguage === 'en') return savedLanguage
  return 'ja'
}

function Site() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const copy = useMemo(() => siteCopy[language], [language])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
    window.localStorage.setItem(storageKey, language)
  }, [copy.description, copy.title, language])

  return (
    <main className="site-shell">
      <section className="key-visual" aria-label={copy.visualLabel}>
        <picture>
          <source media="(orientation: portrait), (max-width: 560px)" srcSet={keyVisualSpUrl} />
          <img src={visualByLanguage[language]} alt="" />
        </picture>
        <div className="site-lang" aria-label="Language">
          {['ja', 'en'].map((lang) => (
            <button
              key={lang}
              type="button"
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="site-info" aria-label="Site navigation">
        <nav className="site-nav">
          {navItems.map((item) => (
            <a
              data-tooltip={item.tooltip?.[language]}
              href={withLanguage(item.href, language)}
              key={item.id}
            >
              <span className="nav-label">{item.label[language]}</span>
              {item.badge ? <span className="nav-badge">{item.badge[language]}</span> : null}
            </a>
          ))}
        </nav>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{copy.footerBrand}</strong>
          <span>© 2026 Kohei Elimi Lab</span>
        </div>
        <a href={officialXUrl} target="_blank" rel="noreferrer">
          <img src={xLogoUrl} alt="" />
          <span>@sio_sio_bull</span>
        </a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Site />
  </StrictMode>,
)
