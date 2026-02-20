import { useState } from 'react'
import './authority.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { AUNav } from './components/AUNav'
import { AUHero } from './components/AUHero'
import { AUProblem } from './components/AUProblem'
import { AUDataFlowVariants } from './components/AUDataFlowVariants'
import { AUStatsWall } from './components/AUStatsWall'
import { AUTestimonials } from './components/AUTestimonials'
import { AUProcess } from './components/AUProcess'
import { AUComparisonMatrix } from './components/AUComparisonMatrix'
import { AUSecurity } from './components/AUSecurity'
import { AUFinalCta } from './components/AUFinalCta'
import { AUContactModal } from './components/AUContactModal'
import logoSvg from '../../../assets/logo.svg'

export default function AuthorityPage() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div data-page="authority">
      <SkipToContent />

      <AUNav />

      <main id="main-content">
        <AUHero onOpenContact={() => setContactOpen(true)} />

        <AUProblem />

        <AUDataFlowVariants />

        <AUStatsWall />

        <AUTestimonials />

        <AUProcess />

        <AUComparisonMatrix />

        <AUSecurity />

        <AUFinalCta onOpenContact={() => setContactOpen(true)} />
      </main>

      <footer className="au-footer">
        <div className="au-container au-footer__inner">
          <a href="#" className="au-footer__brand">
            <img src={logoSvg} alt="" className="au-footer__logo" />
            Hypr
          </a>
          <p className="au-footer__copy">&copy; {new Date().getFullYear()} Hypr. All rights reserved.</p>
        </div>
      </footer>

      <AUContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  )
}
