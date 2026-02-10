import { finalCta } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function BCFinalCta() {
  return (
    <section className="bc-final-cta" aria-label="Call to action">
      <div className="bc-container" style={{ position: 'relative' }}>
        <ScrollReveal>
          <div className="bc-final-cta__badge">{finalCta.badge}</div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="bc-final-cta__headline">{finalCta.headline}</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="bc-final-cta__sub">{finalCta.subheadline}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bc-final-cta__buttons">
            {finalCta.ctas.map((cta) => {
              const btnClass =
                cta.variant === 'primary'
                  ? 'bc-btn bc-btn--primary-inverted'
                  : 'bc-btn bc-btn--secondary-inverted'
              return (
                <a key={cta.label} href={cta.href} className={btnClass}>
                  {cta.label}
                </a>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="bc-final-cta__badges">
            {finalCta.trustBadges.map((badge) => (
              <span key={badge} className="bc-final-cta__trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
