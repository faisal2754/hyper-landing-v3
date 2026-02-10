import { pricing } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'
import { Check } from 'lucide-react'

export function COPricing() {
  return (
    <section className="co-pricing co-dotgrid" id="pricing" aria-label="Pricing">
      <div className="co-container">
        <ScrollReveal>
          <div className="co-pricing__header">
            <p className="co-pricing__label">Investment</p>
            <h2 className="co-pricing__title">{pricing.headline}</h2>
            <p className="co-pricing__subtitle">{pricing.subheadline}</p>
          </div>
        </ScrollReveal>

        <div className="co-pricing__grid">
          {pricing.tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={0.1 + i * 0.1}>
              <div
                className={`co-pricing__card${
                  tier.popular ? ' co-pricing__card--popular' : ''
                }`}
              >
                {tier.popular && (
                  <div className="co-pricing__popular-badge">Most Popular</div>
                )}

                <h3 className="co-pricing__card-name">{tier.name}</h3>
                <p className="co-pricing__card-tagline">{tier.tagline}</p>

                <div className="co-pricing__card-prices">
                  <div className="co-pricing__price-row">
                    <span className="co-pricing__price-label">Setup</span>
                    <span className="co-pricing__price-value">
                      {tier.implementation}
                    </span>
                  </div>
                  <div className="co-pricing__price-row">
                    <span className="co-pricing__price-label">Monthly</span>
                    <span className="co-pricing__price-value co-pricing__price-value--monthly">
                      {tier.monthly}
                    </span>
                  </div>
                </div>

                <ul className="co-pricing__features">
                  {tier.features.map((f) => (
                    <li key={f.text} className="co-pricing__feature">
                      <Check className="co-pricing__feature-check" size={16} />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.cta.href}
                  className={`co-btn co-pricing__card-cta ${
                    tier.popular ? 'co-btn--amber' : 'co-btn--primary'
                  }`}
                >
                  {tier.cta.label}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="co-pricing__note">{pricing.note}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
