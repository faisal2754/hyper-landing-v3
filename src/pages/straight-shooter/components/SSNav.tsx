import { useState, useCallback } from 'react'
import { navigation } from '../../../data/content'
import { Menu, X } from 'lucide-react'

export function SSNav() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return (
    <nav className="ss-nav" role="navigation" aria-label="Main navigation">
      <div className="ss-container ss-nav__inner">
        <a href="#" className="ss-nav__brand" aria-label="Hyper home">
          <span>h</span>yper
        </a>

        <button
          className="ss-nav__toggle"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`ss-nav__links${open ? ' ss-nav__links--open' : ''}`}>
          {navigation.items.map((item) => (
            <a key={item.label} href={item.href} className="ss-nav__link">
              {item.label}
            </a>
          ))}
          <a href={navigation.cta.href} className="ss-nav__cta">
            {navigation.cta.label}
          </a>
        </div>
      </div>
    </nav>
  )
}
