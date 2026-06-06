import { useEffect, useMemo, useState } from 'react'
import xLogoUrl from '../app/assets/x-logo.svg'
import { policyCopy } from './content'
import { navItems, officialXUrl, withLanguage } from './navigation'

const storageKey = 'shinso-gakuen-lang'
const keyVisualOtherUrl = './assets/keyvisual/ShisoGakuenKeyVisual_other.png'

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get('lang')
  const savedLanguage = window.localStorage.getItem(storageKey)

  if (queryLanguage === 'ja' || queryLanguage === 'en') return queryLanguage
  if (savedLanguage === 'ja' || savedLanguage === 'en') return savedLanguage
  return 'ja'
}

export function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const copy = useMemo(() => policyCopy[language], [language])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.metaTitle
    window.localStorage.setItem(storageKey, language)
  }, [copy.metaTitle, language])

  return (
    <main className="content-shell">
      <header className="content-header">
        <a className="content-logo" href={withLanguage('./', language)}>
          SHINSO GAKUEN
        </a>
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
      </header>

      <nav className="site-nav" aria-label="Site navigation">
        {navItems.map((item) => (
          <a
            aria-current={item.id === 'privacy-policy' ? 'page' : undefined}
            data-tooltip={item.tooltip?.[language]}
            href={withLanguage(item.href, language)}
            key={item.id}
          >
            <span className="nav-label">{item.label[language]}</span>
            {item.badge ? <span className="nav-badge">{item.badge[language]}</span> : null}
          </a>
        ))}
      </nav>

      <section className="content-visual" aria-hidden="true">
        <img src={keyVisualOtherUrl} alt="" />
      </section>

      <article className="content-panel policy-panel" id="privacy">
        <h1>{language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}</h1>
        <p className="content-lead">{copy.subtitle}</p>
        <p>{copy.lead}</p>

        <div className="policy-meta">{copy.updated}</div>

        <div className="policy-list">
          {copy.sections.map((section, index) => (
            <section
              className="policy-block"
              id={index === 4 ? 'contact' : undefined}
              key={section.title}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p>{section.body}</p>
                    {section.contactLabel ? (
                      <a
                        className="policy-contact-link"
                        href={officialXUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={xLogoUrl} alt="" />
                        <span>{section.contactLabel}</span>
                      </a>
                    ) : null}
                  </>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      <footer className="content-footer">
        <span>© 2026 Kohei Elimi Lab</span>
        <a href={officialXUrl} target="_blank" rel="noreferrer">
          <img src={xLogoUrl} alt="" />
          <span>@sio_sio_bull</span>
        </a>
      </footer>
    </main>
  )
}
