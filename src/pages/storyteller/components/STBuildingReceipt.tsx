import { howItWorks } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function STBuildingReceipt() {
  return (
    <section
      className="st-receipt"
      aria-labelledby="st-receipt-title"
    >
      <div className="st-container">
        <ScrollReveal>
          <header className="st-receipt__header">
            <p className="st-receipt__section-label">
              The Build Process
            </p>
            <h2 className="st-receipt__title" id="st-receipt-title">
              {howItWorks.headline}
            </h2>
            <p className="st-receipt__subtitle">{howItWorks.subheadline}</p>
          </header>
        </ScrollReveal>

        <div className="st-receipt__list">
          {howItWorks.stages.map((stage, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="st-receipt-item">
                <div className="st-receipt-item__phase">{stage.phase}</div>
                <div className="st-receipt-item__detail">
                  <h3 className="st-receipt-item__headline">
                    {stage.headline}
                  </h3>
                  <p className="st-receipt-item__deliverable">
                    {stage.deliverable}
                  </p>
                </div>
                <div className="st-receipt-item__timeline">
                  {stage.timeline}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="st-receipt__total">
            <p className="st-receipt__total-label">Your Outcome</p>
            <p className="st-receipt__total-value">
              Enterprise-grade data infrastructure in 4-6 weeks
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
