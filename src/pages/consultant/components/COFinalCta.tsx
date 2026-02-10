import { finalCta } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function COFinalCta() {
  return (
    <section className="co-final-cta" aria-label="Call to action">
      <div className="co-container" style={{ position: 'relative' }}>
        <ScrollReveal>
          <div className="co-final-cta__badge">{finalCta.badge}</div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="co-final-cta__headline">{finalCta.headline}</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="co-final-cta__sub">{finalCta.subheadline}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="co-final-cta__buttons">
            {finalCta.ctas.map((cta) => {
              const btnClass =
                cta.variant === 'primary'
                  ? 'co-btn co-btn--primary-inverted'
                  : 'co-btn co-btn--secondary-inverted'
              return (
                <a key={cta.label} href={cta.href} className={btnClass}>
                  {cta.label}
                </a>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="co-final-cta__badges">
            {finalCta.trustBadges.map((badge) => (
              <span key={badge} className="co-final-cta__trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
