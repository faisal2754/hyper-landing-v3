import { results } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function STTestimonials() {
  return (
    <section
      className="st-testimonials"
      aria-labelledby="st-testimonials-title"
    >
      <div className="st-container">
        <ScrollReveal>
          <header className="st-testimonials__header">
            <p className="st-testimonials__section-label">
              Section {results.sectionNumber}
            </p>
            <h2 className="st-testimonials__title" id="st-testimonials-title">
              {results.headline}
            </h2>
          </header>
        </ScrollReveal>

        <div className="st-testimonials__grid">
          {results.testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <article className="st-testimonial-card">
                <span
                  className="st-testimonial-card__quote-mark"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="st-testimonial-card__quote">
                  {testimonial.quote}
                </blockquote>

                {testimonial.result && (
                  <p className="st-testimonial-card__result">
                    {testimonial.result}
                  </p>
                )}

                <footer className="st-testimonial-card__author">
                  <p className="st-testimonial-card__author-name">
                    {testimonial.author}
                  </p>
                  <p className="st-testimonial-card__author-title">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
