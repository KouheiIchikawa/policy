(() => {
  const minScrollableDistance = 900
  const showAfterScroll = 420

  function initBackToTop() {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'sg-back-to-top'
    button.setAttribute('aria-label', 'ページ上部へ戻る')
    button.title = 'ページ上部へ戻る'
    const icon = document.createElement('img')
    icon.src = new URL('back-to-top-icon.png', document.currentScript.src).href
    icon.alt = ''
    icon.setAttribute('aria-hidden', 'true')
    button.appendChild(icon)
    document.body.appendChild(button)

    function updateVisibility() {
      const scrollableDistance =
        document.documentElement.scrollHeight - window.innerHeight
      const shouldShow =
        scrollableDistance > minScrollableDistance &&
        window.scrollY > showAfterScroll

      button.classList.toggle('is-visible', shouldShow)
    }

    button.addEventListener('click', () => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    })

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    window.addEventListener('load', updateVisibility)
    window.setTimeout(updateVisibility, 250)
    updateVisibility()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop, { once: true })
  } else {
    initBackToTop()
  }
})()
