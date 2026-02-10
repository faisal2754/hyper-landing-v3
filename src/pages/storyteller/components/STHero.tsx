import { hero } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function STHero() {
  return (
    <section className="st-hero">
      {/* Decorative watermark number */}
      <span className="st-watermark st-hero__watermark" aria-hidden="true">
        01
      </span>

      <div className="st-container">
        <ScrollReveal>
          <div className="st-hero__content">
            <p className="st-hero__eyebrow">{hero.eyebrow}</p>

            <hr className="st-hero__rule-top" aria-hidden="true" />

            <h1 className="st-hero__headline">{hero.headline}</h1>

            <hr className="st-hero__rule-bottom" aria-hidden="true" />

            <p className="st-hero__subheadline">{hero.subheadline}</p>

            <div className="st-hero__ctas">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`st-btn st-btn--${cta.variant}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
