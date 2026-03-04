import { motion } from 'framer-motion'
import type { ToastItem } from '../types'

type Props = {
  toasts: ToastItem[]
  onDismiss: (id: number) => void
}

export function ToastViewport({ toasts, onDismiss }: Props) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(92vw,380px)] flex-col gap-3">
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          layout
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          className={`pointer-events-auto rounded-3xl border px-4 py-3 shadow-neon backdrop-blur-xl ${
            toast.tone === 'error'
              ? 'border-rose-300/[0.3] bg-rose-500/[0.16]'
              : 'border-cyan-200/[0.24] bg-slate-950/[0.72]'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">{toast.title}</p>
              <p className="mt-1 text-sm text-slate-100/[0.78]">{toast.description}</p>
            </div>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              className="rounded-full border border-white/[0.12] bg-white/[0.08] px-2 py-1 text-xs text-white transition hover:bg-white/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/[0.8]"
            >
              Close
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
