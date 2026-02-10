import './business-case.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { BCNav } from './components/BCNav'
import { BCHero } from './components/BCHero'
import { BCTcoModeler } from './components/BCTcoModeler'
import { BCCostComparison } from './components/BCCostComparison'
import { BCPricingTable } from './components/BCPricingTable'
import { BCRoiMetrics } from './components/BCRoiMetrics'
import { BCFinalCta } from './components/BCFinalCta'

export default function BusinessCasePage() {
  return (
    <div data-page="business-case">
      <SkipToContent />

      <BCNav />

      <main id="main-content">
        <BCHero />

        <BCTcoModeler />

        <BCCostComparison />

        <BCPricingTable />

        <BCRoiMetrics />

        <BCFinalCta />
      </main>
    </div>
  )
}
