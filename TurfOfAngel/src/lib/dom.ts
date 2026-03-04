export function smoothScrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) {
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top, behavior: 'smooth' })
  window.history.replaceState({}, '', `#${id}`)
}
