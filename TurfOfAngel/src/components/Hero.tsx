import { motion } from 'framer-motion'
import { assetPath } from '../lib/assets'
import { smoothScrollToId } from '../lib/dom'

type Props = {
  content: {
    badge: string
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  introHtml: string
}

export function Hero({ content, introHtml }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.22] bg-[linear-gradient(145deg,rgba(8,16,32,0.82),rgba(17,27,49,0.68))] px-6 py-8 shadow-neon backdrop-blur-2xl sm:px-8 sm:py-10">
      <div className="absolute inset-0 bg-aurora opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(93,246,255,0.18),transparent_26%),radial-gradient(circle_at_86%_16%,rgba(255,93,203,0.2),transparent_24%),radial-gradient(circle_at_54%_84%,rgba(185,255,102,0.12),transparent_20%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/[0.95] to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.3] to-transparent" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-cyan-200/[0.3] bg-slate-950/[0.3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/[0.85]">
            {content.badge}
          </span>
          <div className="mt-5 space-y-4">
            <h1 className="text-balance text-4xl font-black tracking-tight text-white drop-shadow-[0_0_34px_rgba(93,246,255,0.42)] sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg font-medium text-cyan-50/[0.88] sm:text-xl">
              {content.subtitle}
            </p>
            <p className="max-w-2xl text-sm leading-8 text-slate-100/[0.86] sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => smoothScrollToId('section-1')}
              className="group rounded-full border border-cyan-200/[0.3] bg-slate-950/[0.6] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/[0.6] hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/[0.8]"
            >
              {content.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => smoothScrollToId('download')}
              className="rounded-full border border-white/[0.15] bg-white/[0.12] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/[0.8]"
            >
              {content.ctaSecondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex flex-col gap-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/[0.28] bg-slate-950/[0.52] p-4 shadow-[0_28px_100px_rgba(9,14,30,0.62),0_0_50px_rgba(93,246,255,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(93,246,255,0.28),transparent_40%),radial-gradient(circle_at_80%_22%,rgba(255,93,203,0.3),transparent_34%),radial-gradient(circle_at_50%_75%,rgba(185,255,102,0.22),transparent_30%)]" />
            <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.14]" />
            <img
              src={assetPath('/images/turf_of_angel_logo.png')}
              alt="Turf of Angel logo"
              className="relative z-10 mx-auto h-full w-full rounded-[1.5rem] object-contain drop-shadow-[0_0_45px_rgba(93,246,255,0.28)]"
            />
          </div>

          <div
            className="glass-panel prose-shell rounded-[1.75rem] border-white/[0.2] bg-[rgba(8,14,28,0.68)] p-5 text-sm leading-8 text-slate-100/[0.94]"
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
        </motion.div>
      </div>
    </section>
  )
}
