import { useState } from 'react'
import { navigation } from '../../../data/content'
import { Menu, X } from 'lucide-react'

export function STNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="st-nav" aria-label="Main navigation">
      {/* Gold accent line beneath nav */}
      <div className="st-nav__accent-line" aria-hidden="true" />

      <div className="st-container">
        <div className="st-nav__inner">
          <a href="/" className="st-nav__brand">
            hyper
          </a>

          <button
            className="st-nav__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div
            className={`st-nav__links${mobileOpen ? ' st-nav__links--open' : ''}`}
          >
            {navigation.items.map((item) => (
              <a key={item.label} href={item.href} className="st-nav__link">
                {item.label}
              </a>
            ))}
            <a href={navigation.cta.href} className="st-nav__cta">
              {navigation.cta.label}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
