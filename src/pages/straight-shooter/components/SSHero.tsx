import { hero } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSHero() {
  return (
    <section className="ss-hero" aria-label="Hero">
      {/* Local scanline effect */}
      <div className="ss-hero__scanlines" aria-hidden="true" />

      {/* Decorative oversized number */}
      <div className="ss-hero__deco-number" aria-hidden="true">
        H
      </div>

      <div className="ss-container ss-hero__content">
        <ScrollReveal delay={0.1}>
          <p className="ss-hero__eyebrow">{hero.eyebrow}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="ss-hero__headline">{hero.headline}</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="ss-hero__subheadline">{hero.subheadline}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <ul className="ss-hero__bullets">
            {hero.bullets.map((b, i) => (
              <li key={i} className="ss-hero__bullet">
                {b.text}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <div className="ss-hero__ctas">
            {hero.ctas.map((cta) => (
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
      </div>
    </section>
  )
}
