import { problem } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function AUProblem() {
  return (
    <section className="au-problem" aria-label="The problem">
      <div className="au-container">
        <ScrollReveal>
          <div className="au-problem__header">
            <p className="au-section-label">The problem</p>
            <h2 className="au-problem__title">{problem.headline}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="au-problem__grid">
            {problem.painPoints.map((point, i) => (
              <div key={i} className="au-problem__card">
                <div className="au-problem__card-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="au-problem__card-headline">{point.headline}</h3>
                <p className="au-problem__card-body">{point.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="au-problem__transition">
            <div className="au-problem__transition-accent" aria-hidden="true" />
            <blockquote className="au-problem__transition-text">
              <span className="au-problem__transition-lead">
                You don't need another platform, another tool, or another hire.
              </span>
              {' '}You need a specialist team that delivers the dashboards and
              analytics your leadership needs — and fully manages the
              infrastructure behind them, so your people can focus on making
              better decisions.
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
