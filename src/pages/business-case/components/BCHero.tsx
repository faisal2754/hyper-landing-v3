import { hero } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

/**
 * Decorative mini bar chart SVG — executive style.
 * Three grouped bars with subtle labels suggesting ROI data.
 */
function HeroBarChartSVG() {
  return (
    <svg
      viewBox="0 0 280 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Faint grid lines */}
      {[60, 100, 140, 180, 220].map((y) => (
        <line
          key={`g-${y}`}
          x1="40"
          y1={y}
          x2="260"
          y2={y}
          stroke="#e8e8ea"
          strokeWidth="0.75"
          strokeDasharray="2 4"
        />
      ))}

      {/* Y-axis */}
      <line x1="40" y1="40" x2="40" y2="230" stroke="#e8e8ea" strokeWidth="1" />
      {/* X-axis */}
      <line x1="40" y1="230" x2="260" y2="230" stroke="#e8e8ea" strokeWidth="1" />

      {/* Y-axis labels */}
      <text x="32" y="64" textAnchor="end" fill="#a0aec0" fontSize="9" fontFamily="IBM Plex Mono, monospace">100K</text>
      <text x="32" y="104" textAnchor="end" fill="#a0aec0" fontSize="9" fontFamily="IBM Plex Mono, monospace">75K</text>
      <text x="32" y="144" textAnchor="end" fill="#a0aec0" fontSize="9" fontFamily="IBM Plex Mono, monospace">50K</text>
      <text x="32" y="184" textAnchor="end" fill="#a0aec0" fontSize="9" fontFamily="IBM Plex Mono, monospace">25K</text>
      <text x="32" y="224" textAnchor="end" fill="#a0aec0" fontSize="9" fontFamily="IBM Plex Mono, monospace">0</text>

      {/* Bar group 1: Enterprise — burgundy */}
      <rect x="65" y="70" width="40" height="160" rx="3" fill="#8b2252" opacity="0.85" />
      <text x="85" y="248" textAnchor="middle" fill="#5c5c5e" fontSize="8.5" fontFamily="IBM Plex Sans, sans-serif">Enterprise</text>

      {/* Bar group 2: DIY — gray */}
      <rect x="125" y="58" width="40" height="172" rx="3" fill="#4a5568" opacity="0.7" />
      <text x="145" y="248" textAnchor="middle" fill="#5c5c5e" fontSize="8.5" fontFamily="IBM Plex Sans, sans-serif">DIY</text>

      {/* Bar group 3: Hyper — green */}
      <rect x="185" y="150" width="40" height="80" rx="3" fill="#1a7a4c" />
      <text x="205" y="248" textAnchor="middle" fill="#5c5c5e" fontSize="8.5" fontFamily="IBM Plex Sans, sans-serif">Hyper</text>

      {/* Value labels on bars */}
      <text x="85" y="62" textAnchor="middle" fill="#8b2252" fontSize="10" fontWeight="500" fontFamily="IBM Plex Mono, monospace">R85K</text>
      <text x="145" y="50" textAnchor="middle" fill="#4a5568" fontSize="10" fontWeight="500" fontFamily="IBM Plex Mono, monospace">R95K</text>
      <text x="205" y="142" textAnchor="middle" fill="#1a7a4c" fontSize="10" fontWeight="500" fontFamily="IBM Plex Mono, monospace">R25K</text>

      {/* Savings annotation arrow */}
      <line x1="230" y1="70" x2="230" y2="150" stroke="#1a7a4c" strokeWidth="1.25" strokeDasharray="3 3" />
      <text x="246" y="115" fill="#1a7a4c" fontSize="9" fontWeight="500" fontFamily="IBM Plex Mono, monospace">70%</text>
      <text x="246" y="126" fill="#1a7a4c" fontSize="8" fontFamily="IBM Plex Mono, monospace">less</text>
    </svg>
  )
}

export function BCHero() {
  return (
    <section className="bc-hero" aria-label="Hero">
      <div className="bc-container bc-hero__inner">
        <div className="bc-hero__content">
          <ScrollReveal delay={0}>
            <p className="bc-hero__eyebrow">{hero.eyebrow}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="bc-hero__headline">
              Enterprise data infrastructure at <span>a fraction of the cost.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="bc-hero__subheadline">{hero.subheadline}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bc-hero__ctas">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`bc-btn bc-btn--${cta.variant}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="bc-hero__chart">
          <HeroBarChartSVG />
        </ScrollReveal>
      </div>
    </section>
  )
}
