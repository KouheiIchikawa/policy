import { useEffect, useRef, useState } from 'react'
import type { ToastItem } from '../types'

type ToastInput = Omit<ToastItem, 'id'>

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const idRef = useRef(0)

  const pushToast = (toast: ToastInput) => {
    const id = ++idRef.current
    setToasts((current) => [...current, { id, ...toast }])
    return id
  }

  const dismissToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }

  useEffect(() => {
    if (!toasts.length) {
      return
    }

    const timers = toasts.map((toast) =>
      window.setTimeout(() => dismissToast(toast.id), toast.tone === 'error' ? 4200 : 2800),
    )

    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [toasts])

  return { toasts, pushToast, dismissToast }
}
