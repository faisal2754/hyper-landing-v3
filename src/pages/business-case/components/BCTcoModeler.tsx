import { ScrollReveal } from '../../../shared/components/ScrollReveal'

/**
 * Static TCO Modeler mockup — the "unforgettable element" of this page.
 * Looks like a fully interactive SaaS pricing calculator but is entirely
 * a static illustration. All controls are visual only.
 */
export function BCTcoModeler() {
  return (
    <section className="bc-tco bc-grid-bg" aria-label="Total Cost of Ownership Modeler">
      <div className="bc-container">
        <ScrollReveal>
          <div
            className="bc-tco__card"
            role="img"
            aria-label="Static illustration of a Total Cost of Ownership comparison showing Enterprise Stack at R85,000 per month, DIY at R95,000 per month, and Hyper at R25,000 per month, resulting in annual savings of R720,000"
          >
            {/* Header */}
            <div className="bc-tco__header">
              <h2 className="bc-tco__title">Total Cost of Ownership Comparison</h2>
              <span className="bc-tco__badge">Interactive Calculator</span>
            </div>

            {/* Fake controls */}
            <div className="bc-tco__controls" aria-hidden="true">
              <div className="bc-tco__control">
                <span className="bc-tco__control-label">Data Sources</span>
                <span className="bc-tco__control-value">8</span>
                <div className="bc-tco__slider">
                  <div className="bc-tco__slider-fill" style={{ width: '60%' }} />
                  <div className="bc-tco__slider-thumb" style={{ left: '60%' }} />
                </div>
              </div>

              <div className="bc-tco__control">
                <span className="bc-tco__control-label">Monthly Rows</span>
                <span className="bc-tco__control-value">5M</span>
                <div className="bc-tco__slider">
                  <div className="bc-tco__slider-fill" style={{ width: '45%' }} />
                  <div className="bc-tco__slider-thumb" style={{ left: '45%' }} />
                </div>
              </div>

              <div className="bc-tco__control">
                <span className="bc-tco__control-label">Team Size</span>
                <span className="bc-tco__control-value">0 engineers</span>
                <div className="bc-tco__slider">
                  <div className="bc-tco__slider-fill" style={{ width: '0%' }} />
                  <div className="bc-tco__slider-thumb" style={{ left: '0%' }} />
                </div>
              </div>
            </div>

            {/* Comparison visualization */}
            <div className="bc-tco__body" aria-hidden="true">
              <div className="bc-tco__bars">
                {/* Enterprise Stack */}
                <div className="bc-tco__bar-col">
                  <span className="bc-tco__bar-amount bc-tco__bar-amount--burgundy">
                    ~R85K/mo
                  </span>
                  <div
                    className="bc-tco__bar-track bc-tco__bar-track--burgundy"
                    style={{ height: '190px' }}
                  />
                  <div className="bc-tco__bar-label">
                    <span className="bc-tco__bar-label-name">Enterprise Stack</span>
                    <span className="bc-tco__bar-label-sub">Snowflake + Fivetran</span>
                  </div>
                </div>

                {/* DIY */}
                <div className="bc-tco__bar-col">
                  <span className="bc-tco__bar-amount bc-tco__bar-amount--gray">
                    ~R95K/mo
                  </span>
                  <div
                    className="bc-tco__bar-track bc-tco__bar-track--gray"
                    style={{ height: '210px' }}
                  />
                  <div className="bc-tco__bar-label">
                    <span className="bc-tco__bar-label-name">DIY</span>
                    <span className="bc-tco__bar-label-sub">In-house team</span>
                  </div>
                </div>

                {/* Hyper */}
                <div className="bc-tco__bar-col">
                  <span className="bc-tco__bar-amount bc-tco__bar-amount--green">
                    ~R25K/mo
                  </span>
                  <div
                    className="bc-tco__bar-track bc-tco__bar-track--green"
                    style={{ height: '65px' }}
                  />
                  <div className="bc-tco__bar-label">
                    <span className="bc-tco__bar-label-name">Hyper</span>
                    <span className="bc-tco__bar-label-sub">Fully managed</span>
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="bc-tco__metrics">
                <div className="bc-tco__metric">
                  <span className="bc-tco__metric-label">Annual Savings</span>
                  <span className="bc-tco__metric-value bc-tco__metric-value--green">
                    R720,000
                  </span>
                  <span className="bc-tco__metric-comparison">
                    vs. Enterprise Stack
                  </span>
                </div>
                <div className="bc-tco__metric">
                  <span className="bc-tco__metric-label">Time to Value</span>
                  <span className="bc-tco__metric-value bc-tco__metric-value--green">
                    4-6 weeks
                  </span>
                  <span className="bc-tco__metric-comparison">
                    vs. 6 months (Enterprise/DIY)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA footer */}
            <div className="bc-tco__footer">
              <span className="bc-tco__footer-note">
                Estimates based on typical mid-market data infrastructure needs
              </span>
              <a href="#contact" className="bc-btn bc-btn--primary">
                Get Your Custom Analysis
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
