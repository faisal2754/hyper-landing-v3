import './storyteller.css'
import { SkipToContent } from '../../shared/components/SkipToContent'
import { SvgFilters } from '../../shared/components/SvgFilters'
import { STNav } from './components/STNav'
import { STHero } from './components/STHero'
import { STDataStream } from './components/STDataStream'
import { STChapterProblem } from './components/STChapterProblem'
import { STBuildingReceipt } from './components/STBuildingReceipt'
import { STTimeline } from './components/STTimeline'
import { STTestimonials } from './components/STTestimonials'
import { STFinalCta } from './components/STFinalCta'

export default function StorytellerPage() {
  return (
    <div data-page="storyteller">
      <SkipToContent />
      <SvgFilters />

      {/* Paper grain overlay — warm parchment texture */}
      <div className="st-grain-overlay" aria-hidden="true" />

      <STNav />

      <main id="main-content">
        <STHero />

        <hr className="st-gold-rule st-gold-rule--strong" />

        <STDataStream />

        <hr className="st-gold-rule" />

        <STChapterProblem />

        <hr className="st-gold-rule" />

        <STBuildingReceipt />

        <hr className="st-gold-rule st-gold-rule--strong" />

        <STTimeline />

        <hr className="st-gold-rule" />

        <STTestimonials />

        <hr className="st-gold-rule st-gold-rule--strong" />

        <STFinalCta />
      </main>
    </div>
  )
}
