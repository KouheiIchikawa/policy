type Item = {
  id: string
  label: string
}

type Props = {
  title: string
  items: Item[]
  activeId: string
  onSelect: (id: string) => void
}

export function Toc({ title, items, activeId, onSelect }: Props) {
  return (
    <nav
      aria-label={title}
      className="glass-panel rounded-[1.9rem] border-white/[0.2] bg-[linear-gradient(180deg,rgba(8,16,32,0.8),rgba(11,21,40,0.72))] p-4 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/[0.72]">
        {title}
      </p>

      <ul className="space-y-2">
        {items.map((item) => {
          const active = activeId === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={`group flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 ${
                  active
                    ? 'bg-[linear-gradient(90deg,rgba(34,211,238,0.24),rgba(168,85,247,0.16))] text-white shadow-[0_0_0_1px_rgba(153,246,228,0.26),0_0_24px_rgba(93,246,255,0.12)]'
                    : 'bg-white/[0.08] text-slate-100/[0.86] hover:bg-white/[0.14] hover:text-white'
                }`}
              >
                <span className="line-clamp-2">{item.label}</span>
                <span
                  className={`ml-3 h-2.5 w-2.5 rounded-full transition ${
                    active ? 'bg-cyan-200 shadow-glow' : 'bg-slate-400/[0.4] group-hover:bg-cyan-200/[0.7]'
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
