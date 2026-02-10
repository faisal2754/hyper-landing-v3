import { finalCta } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function STFinalCta() {
  return (
    <section className="st-final-cta" aria-labelledby="st-cta-headline">
      {/* Paper grain overlay */}
      <div className="st-final-cta__grain" aria-hidden="true" />

      <div className="st-container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <hr className="st-final-cta__rule-top" aria-hidden="true" />

          <span className="st-final-cta__badge">{finalCta.badge}</span>

          <h2 className="st-final-cta__headline" id="st-cta-headline">
            {finalCta.headline}
          </h2>

          <p className="st-final-cta__sub">{finalCta.subheadline}</p>

          <hr className="st-final-cta__rule-mid" aria-hidden="true" />

          <div className="st-final-cta__buttons">
            {finalCta.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`st-btn st-btn--${cta.variant}`}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <div className="st-final-cta__badges">
            {finalCta.trustBadges.map((badge) => (
              <span key={badge} className="st-final-cta__trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
