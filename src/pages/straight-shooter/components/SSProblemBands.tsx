import { problem } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSProblemBands() {
  return (
    <section className="ss-problems" aria-label="Common problems">
      <div className="ss-container">
        <ScrollReveal>
          <div className="ss-problems__header">
            <p className="ss-problems__section-label">
              {problem.sectionNumber} &mdash; The Problem
            </p>
            <h2 className="ss-problems__title">{problem.headline}</h2>
          </div>
        </ScrollReveal>

        {problem.painPoints.map((pain, index) => {
          const num = String(index + 1).padStart(2, '0')
          return (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="ss-problem-band">
                <div className="ss-problem-band__number" aria-hidden="true">
                  {num}
                </div>
                <div className="ss-problem-band__content">
                  <h3 className="ss-problem-band__headline">
                    {pain.headline}
                  </h3>
                  <p className="ss-problem-band__body">{pain.body}</p>
                </div>
              </div>
            </ScrollReveal>
          )
        })}

        <ScrollReveal delay={0.3}>
          <p className="ss-problems__transition">{problem.transition}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
