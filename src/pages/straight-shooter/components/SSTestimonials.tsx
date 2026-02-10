import { results } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSTestimonials() {
  return (
    <section
      className="ss-testimonials"
      aria-label="Client testimonials"
    >
      <div className="ss-container">
        <ScrollReveal>
          <div className="ss-testimonials__header">
            <p className="ss-testimonials__section-label">
              {results.sectionNumber} &mdash; Results
            </p>
            <h2 className="ss-testimonials__title">{results.headline}</h2>
          </div>
        </ScrollReveal>

        <div className="ss-testimonials__grid">
          {results.testimonials.map((test, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="ss-testimonial-card">
                <span
                  className="ss-testimonial-card__quote-mark"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="ss-testimonial-card__quote">
                  {test.quote}
                </blockquote>

                {test.result && (
                  <p className="ss-testimonial-card__result">{test.result}</p>
                )}

                <div className="ss-testimonial-card__author">
                  <p className="ss-testimonial-card__author-name">
                    {test.author}
                  </p>
                  <p className="ss-testimonial-card__author-title">
                    {test.title}, {test.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
