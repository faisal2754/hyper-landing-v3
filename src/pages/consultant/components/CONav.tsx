import { useState, useCallback } from 'react'
import { navigation } from '../../../data/content'
import { Menu, X } from 'lucide-react'

export function CONav() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return (
    <nav className="co-nav" role="navigation" aria-label="Main navigation">
      <div className="co-container co-nav__inner">
        <a href="#" className="co-nav__brand" aria-label="Hyper home">
          hyper<span>.</span>
        </a>

        <button
          className="co-nav__toggle"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`co-nav__links${open ? ' co-nav__links--open' : ''}`}>
          {navigation.items.map((item) => (
            <a key={item.label} href={item.href} className="co-nav__link">
              {item.label}
            </a>
          ))}
          <a href={navigation.cta.href} className="co-nav__cta">
            {navigation.cta.label}
          </a>
        </div>
      </div>
    </nav>
  )
}
