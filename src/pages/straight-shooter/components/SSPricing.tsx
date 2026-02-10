import { pricing } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSPricing() {
  return (
    <section className="ss-pricing" id="pricing" aria-label="Pricing">
      <div className="ss-container">
        <ScrollReveal>
          <div className="ss-pricing__header">
            <p className="ss-pricing__section-label">
              {pricing.sectionNumber} &mdash; Pricing
            </p>
            <h2 className="ss-pricing__title">{pricing.headline}</h2>
            <p className="ss-pricing__subtitle">{pricing.subheadline}</p>
          </div>
        </ScrollReveal>

        <div className="ss-pricing__grid">
          {pricing.tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 0.12}>
              <div
                className={`ss-pricing-card${
                  tier.popular ? ' ss-pricing-card--popular' : ''
                }`}
              >
                <h3 className="ss-pricing-card__name">{tier.name}</h3>
                <p className="ss-pricing-card__tagline">{tier.tagline}</p>

                <div className="ss-pricing-card__prices">
                  <div className="ss-pricing-card__price-row">
                    <span className="ss-pricing-card__price-label">
                      Implementation
                    </span>
                    <span className="ss-pricing-card__price-value">
                      {tier.implementation}
                    </span>
                  </div>
                  <div className="ss-pricing-card__price-row">
                    <span className="ss-pricing-card__price-label">
                      Monthly
                    </span>
                    <span className="ss-pricing-card__price-value">
                      {tier.monthly}
                    </span>
                  </div>
                </div>

                <div className="ss-pricing-card__features">
                  {tier.features.map((f, i) => (
                    <p key={i} className="ss-pricing-card__feature">
                      {f.text}
                    </p>
                  ))}
                </div>

                <div className="ss-pricing-card__cta">
                  <a
                    href={tier.cta.href}
                    className={`ss-btn ${
                      tier.popular ? 'ss-btn--primary' : 'ss-btn--secondary'
                    }`}
                  >
                    {tier.cta.label}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="ss-pricing__note">{pricing.note}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
