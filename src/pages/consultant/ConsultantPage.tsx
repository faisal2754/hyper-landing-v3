import './consultant.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { CONav } from './components/CONav'
import { COSplitHero } from './components/COSplitHero'
import { CODiagnosticCards } from './components/CODiagnosticCards'
import { COResultsPanel } from './components/COResultsPanel'
import { COTestimonials } from './components/COTestimonials'
import { COPricing } from './components/COPricing'
import { COFinalCta } from './components/COFinalCta'

export default function ConsultantPage() {
  return (
    <div data-page="consultant">
      <SkipToContent />

      <CONav />

      <main id="main-content">
        <COSplitHero />

        <CODiagnosticCards />

        <COResultsPanel />

        <COTestimonials />

        <COPricing />

        <COFinalCta />
      </main>
    </div>
  )
}
