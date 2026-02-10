import { finalCta } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSFinalCta() {
  return (
    <section className="ss-final-cta" id="contact" aria-label="Get started">
      <div className="ss-container">
        <ScrollReveal>
          <span className="ss-final-cta__badge">{finalCta.badge}</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="ss-final-cta__headline">{finalCta.headline}</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="ss-final-cta__sub">{finalCta.subheadline}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="ss-final-cta__buttons">
            {finalCta.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`ss-btn ss-btn--${cta.variant}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="ss-final-cta__badges">
            {finalCta.trustBadges.map((badge) => (
              <span key={badge} className="ss-final-cta__trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
