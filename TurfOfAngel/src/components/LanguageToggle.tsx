import type { Locale } from '../types'

type Props = {
  locale: Locale
  onChange: (locale: Locale) => void
}

export function LanguageToggle({ locale, onChange }: Props) {
  return (
    <div className="flex items-center rounded-full border border-white/[0.12] bg-white/[0.08] p-1" aria-label="Language">
      {(['ja', 'en'] as const).map((item) => {
        const active = locale === item
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 ${
              active ? 'bg-fuchsia-300/[0.18] text-white' : 'text-slate-300/[0.7] hover:text-white'
            }`}
            aria-pressed={active}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
