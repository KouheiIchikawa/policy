import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type Props = PropsWithChildren<{
  id: string
  index: number
  title: string
  html: string
  active: boolean
}>

export function SectionCard({
  id,
  index,
  title,
  html,
  active,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -4, rotateX: 1.4, rotateY: -1.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`glass-panel scroll-mt-24 rounded-[2rem] border p-6 shadow-neon transition sm:p-8 ${
        active
          ? 'border-cyan-200/[0.46] bg-[linear-gradient(145deg,rgba(12,22,42,0.82),rgba(18,30,56,0.72))]'
          : 'border-white/[0.18] bg-[linear-gradient(145deg,rgba(9,16,31,0.74),rgba(16,24,43,0.64))]'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(93,246,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,93,203,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.38] to-transparent" />
      <div className="mb-5 flex items-start gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/[0.38] bg-[linear-gradient(145deg,rgba(7,17,31,0.92),rgba(13,32,58,0.82))] text-lg font-black text-cyan-100 shadow-[0_0_24px_rgba(93,246,255,0.22)]">
            {index}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_18px_rgba(93,246,255,0.16)] sm:text-[1.85rem]">
            {title}
          </h2>
        </div>
      </div>

      <div className="prose-shell relative z-10 max-w-prose text-[15px] leading-8 text-slate-100/[0.95] sm:text-base">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {children ? <div className="mt-6">{children}</div> : null}
    </motion.section>
  )
}
