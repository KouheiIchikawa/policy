import { motion } from 'framer-motion'

export function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,246,255,0.18),_transparent_28%),linear-gradient(180deg,_#040814_0%,_#07111f_42%,_#081427_100%)]" />
      <motion.div
        className="absolute left-[-12%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-[120px]"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-6%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/30 blur-[112px]"
        animate={{ x: [0, -50, 20, 0], y: [0, 20, 60, 0], scale: [1, 0.9, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[24%] h-[32rem] w-[32rem] rounded-full bg-lime-300/20 blur-[132px]"
        animate={{ x: [0, -40, 55, 0], y: [0, -20, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,8,20,0.18)_52%,rgba(4,8,20,0.62)_100%)]" />
    </div>
  )
}
