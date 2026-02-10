import { problem } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

const PAD_NUMBER = (n: number) => String(n).padStart(2, '0')

export function STChapterProblem() {
  return (
    <section className="st-chapter" aria-labelledby="st-chapter-title">
      {/* Background watermark */}
      <span
        className="st-watermark"
        style={{ right: '-8vw', top: '10%' }}
        aria-hidden="true"
      >
        {problem.sectionNumber}
      </span>

      <div className="st-container">
        <ScrollReveal>
          <header className="st-chapter__header">
            <p className="st-chapter__section-label">
              Chapter {problem.sectionNumber}
            </p>
            <h2 className="st-chapter__title" id="st-chapter-title">
              {problem.headline}
            </h2>
          </header>
        </ScrollReveal>

        <div className="st-chapter__items">
          {problem.painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <article className="st-chapter-item">
                <span
                  className="st-chapter-item__watermark"
                  aria-hidden="true"
                >
                  {PAD_NUMBER(i + 1)}
                </span>
                <div className="st-chapter-item__content">
                  <h3 className="st-chapter-item__headline">{point.headline}</h3>
                  <p className="st-chapter-item__body">{point.body}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <blockquote className="st-chapter__transition">
            {problem.transition}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}
