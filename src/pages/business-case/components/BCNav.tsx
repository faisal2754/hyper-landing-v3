import { useState, useCallback } from 'react'
import { navigation } from '../../../data/content'
import { Menu, X } from 'lucide-react'

export function BCNav() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return (
    <nav className="bc-nav" role="navigation" aria-label="Main navigation">
      <div className="bc-container bc-nav__inner">
        <a href="#" className="bc-nav__brand" aria-label="Hyper home">
          hyper
        </a>

        <button
          className="bc-nav__toggle"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`bc-nav__links${open ? ' bc-nav__links--open' : ''}`}>
          {navigation.items.map((item) => (
            <a key={item.label} href={item.href} className="bc-nav__link">
              {item.label}
            </a>
          ))}
          <a href={navigation.cta.href} className="bc-nav__cta">
            {navigation.cta.label}
          </a>
        </div>
      </div>
    </nav>
  )
}
