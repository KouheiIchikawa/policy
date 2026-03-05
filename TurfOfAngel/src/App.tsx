import { useEffect, useMemo, useState } from 'react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  useEffect(() => {
    if (!mobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const sectionItems = useMemo(
    () =>
      content.sections.map((section, index) => ({
        ...section,
        id: sectionIds[index],
      })),
    [content.sections],
  )

  const tocItems = useMemo(
    () => [
      ...sectionItems.map((section) => ({ id: section.id, label: section.title })),
      { id: 'download', label: content.store.title },
    ],
    [content.store.title, sectionItems],
  )

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    pushToast({
      title: policyLocales[nextLocale].toast.localeChangedTitle,
      description: policyLocales[nextLocale].toast.localeChangedDescription,
    })
  }

  const selectSection = (id: string) => {
    smoothScrollToId(id)
    setMobileMenuOpen(false)
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
            <button
              type="button"
              aria-label={content.toc.title}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-toc"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] text-white transition hover:bg-white/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 lg:hidden"
            >
              <span className="sr-only">{content.toc.title}</span>
              <span className="flex flex-col items-center justify-center gap-[0.22rem]">
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
              </span>
            </button>
            <LanguageToggle locale={locale} onChange={changeLocale} />
          </div>
        </header>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              className="fixed inset-0 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close menu"
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                id="mobile-toc"
                className="absolute left-4 right-4 top-20"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
              >
                <Toc
                  title={content.toc.title}
                  items={tocItems}
                  activeId={activeSection}
                  onSelect={selectSection}
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

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

          <aside className="relative z-20 hidden lg:sticky lg:top-24 lg:block">
            <Toc
              title={content.toc.title}
              items={tocItems}
              activeId={activeSection}
              onSelect={selectSection}
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
