import { hero } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

/**
 * Decorative SVG — abstract technical/architectural illustration.
 * Simple lines, nodes, and connection paths in Swiss precision style.
 */
function HeroDiagramSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[80, 160, 240, 320].map((y) => (
        <line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          className="au-hero-line"
          opacity="0.4"
        />
      ))}
      {[80, 160, 240, 320].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="400"
          className="au-hero-line"
          opacity="0.4"
        />
      ))}

      {/* Main connection paths — accent */}
      <path
        d="M 80 80 L 160 80 L 160 160 L 240 160 L 240 240 L 320 240"
        className="au-hero-line--accent"
      />
      <path
        d="M 80 160 L 160 160"
        className="au-hero-line--accent"
      />
      <path
        d="M 240 80 L 320 80 L 320 160"
        className="au-hero-line--accent"
      />
      <path
        d="M 160 240 L 160 320 L 240 320"
        className="au-hero-line--accent"
      />
      <path
        d="M 80 320 L 160 320"
        className="au-hero-line--accent"
      />

      {/* Secondary paths */}
      <path
        d="M 240 240 L 240 320"
        className="au-hero-line"
      />
      <path
        d="M 320 240 L 320 320"
        className="au-hero-line"
      />

      {/* Nodes — intersection points */}
      <circle cx="80" cy="80" r="6" className="au-hero-node--filled" />
      <circle cx="160" cy="80" r="5" className="au-hero-node" />
      <circle cx="240" cy="80" r="5" className="au-hero-node" />
      <circle cx="320" cy="80" r="6" className="au-hero-node--filled" />

      <circle cx="80" cy="160" r="5" className="au-hero-node" />
      <circle cx="160" cy="160" r="8" className="au-hero-node--filled" />
      <circle cx="240" cy="160" r="5" className="au-hero-node" />
      <circle cx="320" cy="160" r="5" className="au-hero-node" />

      <circle cx="160" cy="240" r="5" className="au-hero-node" />
      <circle cx="240" cy="240" r="8" className="au-hero-node--filled" />
      <circle cx="320" cy="240" r="6" className="au-hero-node--filled" />

      <circle cx="80" cy="320" r="5" className="au-hero-node" />
      <circle cx="160" cy="320" r="5" className="au-hero-node" />
      <circle cx="240" cy="320" r="6" className="au-hero-node--filled" />
      <circle cx="320" cy="320" r="5" className="au-hero-node" />

      {/* Labels at key nodes */}
      <text x="80" y="68" className="au-hero-label" textAnchor="middle">
        SOURCE
      </text>
      <text x="160" y="148" className="au-hero-label" textAnchor="middle">
        FLOW
      </text>
      <text x="240" y="228" className="au-hero-label" textAnchor="middle">
        STORE
      </text>
      <text x="320" y="308" className="au-hero-label" textAnchor="middle">
        OUTPUT
      </text>

      {/* Decorative small squares */}
      <rect x="76" y="236" width="8" height="8" fill="none" stroke="#8899aa" strokeWidth="0.75" />
      <rect x="316" y="156" width="8" height="8" fill="none" stroke="#8899aa" strokeWidth="0.75" />
    </svg>
  )
}

export function AUHero() {
  return (
    <section className="au-hero" aria-label="Hero">
      <div className="au-container au-hero__inner">
        <div className="au-hero__content">
          <ScrollReveal delay={0}>
            <p className="au-hero__eyebrow">{hero.eyebrow}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="au-hero__headline">{hero.headline}</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="au-hero__subheadline">{hero.subheadline}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="au-hero__ctas">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`au-btn au-btn--${cta.variant}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="au-hero__diagram">
          <HeroDiagramSVG />
        </ScrollReveal>
      </div>
    </section>
  )
}
