import { solution } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function SSSolution() {
  return (
    <section className="ss-solution" aria-label="Our solution">
      <div className="ss-container">
        <ScrollReveal>
          <div className="ss-solution__header">
            <p className="ss-solution__section-label">
              {solution.sectionNumber} &mdash; The Solution
            </p>
            <h2 className="ss-solution__title">{solution.headline}</h2>
            <p className="ss-solution__subtitle">{solution.subheadline}</p>
          </div>
        </ScrollReveal>

        <div className="ss-solution__grid">
          {solution.products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.15}>
              <div className="ss-product-card">
                <p className="ss-product-card__tagline">{product.tagline}</p>
                <h3 className="ss-product-card__name">{product.name}</h3>
                <p className="ss-product-card__desc">{product.description}</p>

                <div className="ss-product-card__caps">
                  {product.capabilities.map((cap, i) => (
                    <p key={i} className="ss-product-card__cap">
                      {cap.text}
                    </p>
                  ))}
                </div>

                <div className="ss-product-card__best-for">
                  <strong>Best for: </strong>
                  {product.bestFor}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="ss-solution__flow">
            <p className="ss-solution__flow-text">{solution.flow}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="ss-solution__combined">{solution.combinedNote}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
