import { results } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

const roleBadges: Record<string, string> = {
  CMO: 'Marketing Leadership',
  'Head of Operations': 'Operations',
  CTO: 'Technology Leadership',
}

export function COTestimonials() {
  return (
    <section className="co-testimonials" aria-label="Client testimonials">
      <div className="co-container">
        <ScrollReveal>
          <div className="co-testimonials__header">
            <p className="co-testimonials__label">Client Results</p>
            <h2 className="co-testimonials__title">{results.headline}</h2>
          </div>
        </ScrollReveal>

        <div className="co-testimonials__grid">
          {results.testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={0.1 + i * 0.1}>
              <div className="co-testimonials__card">
                <div className="co-testimonials__quote-mark" aria-hidden="true">
                  {'\u201C'}
                </div>
                <p className="co-testimonials__quote">{t.quote}</p>

                {t.result && (
                  <div className="co-testimonials__result">{t.result}</div>
                )}

                <div className="co-testimonials__divider" />

                <div className="co-testimonials__author">
                  <span className="co-testimonials__author-name">
                    {t.author}
                  </span>
                  <span className="co-testimonials__author-title">
                    {t.title}, {t.company}
                  </span>
                  <span className="co-testimonials__author-role">
                    {roleBadges[t.title] || t.title}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
