import './straight-shooter.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { SvgFilters } from '../../shared/components/SvgFilters'
import { SSNav } from './components/SSNav'
import { SSHero } from './components/SSHero'
import { SSProblemBands } from './components/SSProblemBands'
import { SSSolution } from './components/SSSolution'
import { SSStatBar } from './components/SSStatBar'
import { SSPricing } from './components/SSPricing'
import { SSTestimonials } from './components/SSTestimonials'
import { SSFinalCta } from './components/SSFinalCta'

export default function StraightShooterPage() {
  return (
    <div data-page="straight-shooter">
      <SkipToContent />
      <SvgFilters />

      {/* Grain overlay — positioned fixed, full coverage */}
      <div className="ss-grain-overlay" aria-hidden="true" />

      {/* Scanline overlay */}
      <div className="ss-scanlines" aria-hidden="true" />

      <SSNav />

      <main id="main-content">
        <SSHero />

        <hr className="ss-teal-rule" />

        <SSProblemBands />

        <hr className="ss-teal-rule" />

        <SSSolution />

        <SSStatBar />

        <hr className="ss-teal-rule" />

        <SSPricing />

        <hr className="ss-teal-rule" />

        <SSTestimonials />

        <SSFinalCta />
      </main>
    </div>
  )
}
