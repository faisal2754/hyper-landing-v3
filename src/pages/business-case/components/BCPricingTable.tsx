import { pricing } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function BCPricingTable() {
  return (
    <section className="bc-pricing bc-grid-bg" aria-label="Pricing">
      <div className="bc-container">
        <ScrollReveal>
          <div className="bc-pricing__header">
            <p className="bc-pricing__label">Pricing</p>
            <h2 className="bc-pricing__title">{pricing.headline}</h2>
            <p className="bc-pricing__subtitle">{pricing.subheadline}</p>
          </div>
        </ScrollReveal>

        <div className="bc-pricing__grid">
          {pricing.tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={0.1 + index * 0.1}>
              <div
                className={`bc-pricing__card${
                  tier.popular ? ' bc-pricing__card--popular' : ''
                }`}
              >
                {tier.popular && (
                  <span className="bc-pricing__popular-tag">Most Popular</span>
                )}

                <h3 className="bc-pricing__card-name">{tier.name}</h3>
                <p className="bc-pricing__card-tagline">{tier.tagline}</p>

                <div className="bc-pricing__card-price-group">
                  <p className="bc-pricing__card-price-label">Implementation</p>
                  <p className="bc-pricing__card-price">{tier.implementation}</p>

                  <p className="bc-pricing__card-price-label">Monthly</p>
                  <p className="bc-pricing__card-price">{tier.monthly}</p>
                </div>

                <ul className="bc-pricing__card-features">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="bc-pricing__card-feature">
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.cta.href}
                  className={`bc-btn bc-pricing__card-cta ${
                    tier.popular ? 'bc-btn--primary' : 'bc-btn--secondary'
                  }`}
                >
                  {tier.cta.label}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="bc-pricing__note">{pricing.note}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
