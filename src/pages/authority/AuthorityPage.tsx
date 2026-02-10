import './authority.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { AUNav } from './components/AUNav'
import { AUHero } from './components/AUHero'
import { AUStatsWall } from './components/AUStatsWall'
import { AUArchitectureDiagram } from './components/AUArchitectureDiagram'
import { AUAccordion } from './components/AUAccordion'
import { AUComparisonMatrix } from './components/AUComparisonMatrix'
import { AUSecurity } from './components/AUSecurity'
import { AUFinalCta } from './components/AUFinalCta'

export default function AuthorityPage() {
  return (
    <div data-page="authority">
      <SkipToContent />

      <AUNav />

      <main id="main-content">
        <AUHero />

        <AUStatsWall />

        <AUArchitectureDiagram />

        <AUAccordion />

        <AUComparisonMatrix />

        <AUSecurity />

        <AUFinalCta />
      </main>
    </div>
  )
}
