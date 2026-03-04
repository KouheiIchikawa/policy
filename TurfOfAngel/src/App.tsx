import { useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from './components/Hero'
import { Toc } from './components/Toc'
import { SectionCard } from './components/SectionCard'
import { FollowCard } from './components/FollowCard'
import { StoreStrip } from './components/StoreStrip'
import { LanguageToggle } from './components/LanguageToggle'
import { ToastViewport } from './components/Toast'
import { BackgroundFX } from './components/BackgroundFX'
import { useLocale } from './hooks/useLocale'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useToast } from './hooks/useToast'
import { policyLocales } from '../i18n'
import { assetPath } from './lib/assets'
import { smoothScrollToId } from './lib/dom'
import type { Locale } from './types'

const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] as const

export default function App() {
  const { locale, setLocale } = useLocale()
  const { toasts, pushToast, dismissToast } = useToast()
  const content = policyLocales[locale]
  const activeSection = useScrollSpy([...sectionIds, 'download'])

  useEffect(() => {
    document.title = content.meta.title

    const description =
      document.querySelector('meta[name="description"]') ??
      document.head.appendChild(document.createElement('meta'))
    description.setAttribute('name', 'description')
    description.setAttribute('content', content.meta.description)

    const ogTitle =
      document.querySelector('meta[property="og:title"]') ??
      document.head.appendChild(document.createElement('meta'))
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', content.meta.title)

    const ogDescription =
      document.querySelector('meta[property="og:description"]') ??
      document.head.appendChild(document.createElement('meta'))
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', content.meta.description)

    const ogImage =
      document.querySelector('meta[property="og:image"]') ??
      document.head.appendChild(document.createElement('meta'))
    ogImage.setAttribute('property', 'og:image')
    ogImage.setAttribute('content', assetPath('/images/turf_of_angel_logo.png'))
  }, [content])

  const sectionItems = useMemo(
    () =>
      content.sections.map((section, index) => ({
        ...section,
        id: sectionIds[index],
      })),
    [content.sections],
  )

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    pushToast({
      title: policyLocales[nextLocale].toast.localeChangedTitle,
      description: policyLocales[nextLocale].toast.localeChangedDescription,
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundFX />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-10">
        <header className="sticky top-4 z-40 mb-6 flex items-center justify-between gap-3">
          <motion.div
            className="glass-panel flex items-center gap-3 rounded-full border-white/[0.22] bg-[rgba(8,16,32,0.7)] px-4 py-2"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={assetPath('/images/ic_launcher_foreground.png')}
              alt="Turf of Angel app icon"
              className="h-10 w-10 rounded-2xl ring-1 ring-white/[0.2]"
            />
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-cyan-200/[0.7]">
                Turf of Angel
              </p>
              <p className="text-sm font-semibold text-white">{content.ui.privacyPolicy}</p>
            </div>
          </motion.div>

          <div className="glass-panel flex items-center gap-2 rounded-full border-white/[0.22] bg-[rgba(8,16,32,0.72)] px-3 py-2">
            <LanguageToggle locale={locale} onChange={changeLocale} />
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <main className="relative z-10">
            <Hero content={content.hero} introHtml={content.introHtml} />

            <section aria-label={content.ui.policySections} className="mt-8 grid gap-5">
              {sectionItems.map((section, index) => (
                <SectionCard
                  key={section.id}
                  id={section.id}
                  index={index + 1}
                  title={section.title}
                  html={section.html}
                  active={activeSection === section.id}
                >
                  {section.id === 'section-5' ? <FollowCard content={content.followCard} /> : null}
                </SectionCard>
              ))}
            </section>

            <StoreStrip content={content.store} />

            <footer className="mx-auto mt-10 max-w-6xl px-1 pb-4 text-center text-sm text-slate-300/[0.64]">
              <p>{content.footer.copyright}</p>
            </footer>
          </main>

          <aside className="relative z-20 lg:sticky lg:top-24">
            <Toc
              title={content.toc.title}
              items={[
                ...sectionItems.map((section) => ({ id: section.id, label: section.title })),
                { id: 'download', label: content.store.title },
              ]}
              activeId={activeSection}
              onSelect={(id) => smoothScrollToId(id)}
            />
          </aside>
        </div>
      </div>

      <AnimatePresence>
        <ToastViewport toasts={toasts} onDismiss={dismissToast} />
      </AnimatePresence>
    </div>
  )
}
