import { howItWorks } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function STTimeline() {
  return (
    <section className="st-timeline" aria-labelledby="st-timeline-title">
      <div className="st-container">
        <ScrollReveal>
          <header className="st-timeline__header">
            <p className="st-timeline__section-label">
              Section {howItWorks.sectionNumber}
            </p>
            <h2 className="st-timeline__title" id="st-timeline-title">
              {howItWorks.headline}
            </h2>
            <p className="st-timeline__subtitle">{howItWorks.subheadline}</p>
          </header>
        </ScrollReveal>

        <div className="st-timeline__track">
          {/* The gold vertical line */}
          <div className="st-timeline__line" aria-hidden="true" />

          <div className="st-timeline__items">
            {howItWorks.stages.map((stage, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="st-timeline-item">
                  <div className="st-timeline-item__content">
                    <p className="st-timeline-item__phase">
                      {stage.phase}
                    </p>
                    <h3 className="st-timeline-item__headline">
                      {stage.headline}
                    </h3>
                    <p className="st-timeline-item__desc">
                      {stage.description}
                    </p>
                    <span className="st-timeline-item__timeline-badge">
                      {stage.timeline}
                    </span>
                  </div>
                  <div
                    className="st-timeline-item__dot"
                    aria-hidden="true"
                  />
                  <div className="st-timeline-item__spacer" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
