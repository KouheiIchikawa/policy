import type { MouseEventHandler } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import type { FollowCardContent } from '../types'
import { assetPath } from '../lib/assets'

type Props = {
  content: FollowCardContent
}

export function FollowCard({ content }: Props) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const shadow = useTransform(
    rotateY,
    [-8, 0, 8],
    [
      '0 16px 44px rgba(10, 20, 44, 0.22), -6px 0 40px rgba(93, 246, 255, 0.16)',
      '0 16px 44px rgba(10, 20, 44, 0.22), 0 0 28px rgba(93, 246, 255, 0.12)',
      '0 16px 44px rgba(10, 20, 44, 0.22), 6px 0 40px rgba(255, 93, 203, 0.16)',
    ],
  )

  const onMove: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 10)
    rotateX.set((0.5 - py) * 10)
  }

  return (
    <motion.a
      href={content.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
      }}
      style={{ rotateX, rotateY, boxShadow: shadow, transformStyle: 'preserve-3d' }}
      className="group relative grid gap-4 overflow-hidden rounded-[1.9rem] border border-cyan-200/[0.3] bg-[linear-gradient(145deg,rgba(10,18,36,0.88),rgba(31,41,73,0.74))] p-5 [perspective:1200px] sm:grid-cols-[1fr_auto] sm:items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,246,255,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,93,203,0.24),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.44] to-transparent" />

      <div className="relative z-10 min-w-0">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/[0.7]">{content.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-black text-white">{content.title}</h3>
        <p className="mt-2 text-sm font-semibold text-cyan-200">{content.handle}</p>
        <span className="mt-4 inline-flex rounded-full border border-white/[0.2] bg-white/[0.16] px-4 py-2 text-sm font-semibold text-white transition group-hover:border-cyan-200/[0.55] group-hover:bg-white/[0.24]">
          {content.button}
        </span>
      </div>

      <div className="relative z-10 ml-auto overflow-hidden rounded-[1.5rem] border border-white/[0.22] bg-white/[0.12] p-2 shadow-[0_20px_64px_rgba(93,246,255,0.24)]">
        <img
          src={assetPath('/images/Android_Xgirl.png')}
          alt={content.imageAlt}
          className="h-auto w-[min(42vw,220px)] rounded-[1.1rem] object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.a>
  )
}
