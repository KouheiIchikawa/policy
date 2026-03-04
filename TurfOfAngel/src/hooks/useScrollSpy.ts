import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
