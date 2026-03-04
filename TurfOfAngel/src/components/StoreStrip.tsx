import { motion } from 'framer-motion'
import type { StoreContent } from '../types'
import { assetPath } from '../lib/assets'

type Props = {
  content: StoreContent
}

export function StoreStrip({ content }: Props) {
  return (
    <motion.section
      id="download"
      aria-label={content.ariaLabel}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className="glass-panel scroll-mt-24 mt-8 overflow-hidden rounded-[2rem] border-white/[0.24] bg-[linear-gradient(145deg,rgba(8,16,32,0.86),rgba(17,29,53,0.76))] p-6 sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(93,246,255,0.22),transparent_30%),radial-gradient(circle_at_100%_100%,rgba(255,93,203,0.22),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.4] to-transparent" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/[0.7]">Download</p>
          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{content.title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={content.appStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1.3rem] border border-white/[0.22] bg-white/[0.14] p-2 transition hover:-translate-y-0.5 hover:border-cyan-200/[0.56] hover:bg-white/[0.2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/[0.8]"
          >
            <img
              src={assetPath('/common/appstore_badge.svg')}
              alt={content.appStoreAlt}
              className="h-12 w-auto sm:h-[3.35rem]"
            />
          </a>
          <a
            href={content.playStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1.3rem] border border-white/[0.22] bg-white/[0.14] p-2 transition hover:-translate-y-0.5 hover:border-cyan-200/[0.56] hover:bg-white/[0.2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/[0.8]"
          >
            <img
              src={assetPath('/common/Google_Play_Badge_JA.svg')}
              alt={content.playStoreAlt}
              className="h-12 w-auto sm:h-[3.35rem]"
            />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
