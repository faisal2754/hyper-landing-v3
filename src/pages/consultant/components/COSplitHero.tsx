import { hero } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

/**
 * Generates points on a regular pentagon (5-axis radar chart)
 * positioned around a center, at a given scale (0-1).
 */
function radarPoints(
  cx: number,
  cy: number,
  radius: number,
  values: number[],
  count: number
): string {
  return values
    .map((v, i) => {
      const angle = (Math.PI * 2 * i) / count - Math.PI / 2
      const r = radius * v
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      return `${x},${y}`
    })
    .join(' ')
}

function radarPoint(
  cx: number,
  cy: number,
  radius: number,
  value: number,
  index: number,
  count: number
): { x: number; y: number } {
  const angle = (Math.PI * 2 * index) / count - Math.PI / 2
  const r = radius * value
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  }
}

const RADAR_LABELS = [
  'Data Quality',
  'Integration',
  'Analytics',
  'Governance',
  'AI Readiness',
]
const RADAR_VALUES = [0.75, 0.6, 0.5, 0.8, 0.35]
const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]

function RadarChart() {
  const cx = 200
  const cy = 200
  const radius = 150
  const count = RADAR_LABELS.length

  // Label offsets for readability
  const labelOffsets: { dx: number; dy: number; anchor: 'inherit' | 'start' | 'middle' | 'end' }[] = [
    { dx: 0, dy: -14, anchor: 'middle' },     // top
    { dx: 16, dy: 4, anchor: 'start' },       // right-top
    { dx: 10, dy: 14, anchor: 'start' },      // right-bottom
    { dx: -10, dy: 14, anchor: 'end' },       // left-bottom
    { dx: -16, dy: 4, anchor: 'end' },        // left-top
  ]

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Radar chart showing data maturity dimensions: Data Quality, Integration, Analytics, Governance, and AI Readiness"
    >
      {/* Concentric decorative circles in background */}
      <circle cx={cx} cy={cy} r={190} fill="none" stroke="rgba(0,119,182,0.04)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={210} fill="none" stroke="rgba(0,119,182,0.03)" strokeWidth="1" />

      {/* Grid pentagons */}
      {GRID_LEVELS.map((level) => (
        <polygon
          key={level}
          points={radarPoints(
            cx,
            cy,
            radius,
            Array(count).fill(level),
            count
          )}
          className="co-radar-grid"
        />
      ))}

      {/* Axis lines */}
      {RADAR_LABELS.map((_, i) => {
        const endpoint = radarPoint(cx, cy, radius, 1, i, count)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={endpoint.x}
            y2={endpoint.y}
            className="co-radar-axis"
          />
        )
      })}

      {/* Filled data area */}
      <polygon
        points={radarPoints(cx, cy, radius, RADAR_VALUES, count)}
        className="co-radar-fill"
      />

      {/* Data points */}
      {RADAR_VALUES.map((v, i) => {
        const pt = radarPoint(cx, cy, radius, v, i, count)
        return (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={4}
            className="co-radar-dot"
          />
        )
      })}

      {/* Axis labels */}
      {RADAR_LABELS.map((label, i) => {
        const pt = radarPoint(cx, cy, radius, 1.18, i, count)
        const offset = labelOffsets[i]
        return (
          <text
            key={label}
            x={pt.x + offset.dx}
            y={pt.y + offset.dy}
            textAnchor={offset.anchor}
            className="co-radar-label"
          >
            {label}
          </text>
        )
      })}

      {/* Score labels on grid */}
      {GRID_LEVELS.map((level) => {
        const pt = radarPoint(cx, cy, radius, level, 0, count)
        return (
          <text
            key={level}
            x={pt.x + 8}
            y={pt.y + 3}
            className="co-radar-score-label"
          >
            {Math.round(level * 100)}%
          </text>
        )
      })}
    </svg>
  )
}

export function COSplitHero() {
  return (
    <section className="co-hero co-dotgrid" aria-label="Hero">
      {/* Concentric circle decoration */}
      <svg
        className="co-concentric"
        style={{ top: '10%', right: '-5%', width: '300px', height: '300px', opacity: 0.4 }}
        viewBox="0 0 300 300"
        aria-hidden="true"
      >
        <circle cx="150" cy="150" r="60" />
        <circle cx="150" cy="150" r="90" />
        <circle cx="150" cy="150" r="120" />
        <circle cx="150" cy="150" r="150" />
      </svg>

      <div className="co-container co-hero__inner">
        <div className="co-hero__content">
          <ScrollReveal>
            <p className="co-hero__eyebrow">{hero.eyebrow}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="co-hero__headline">{hero.headline}</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="co-hero__subheadline">{hero.subheadline}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="co-hero__ctas">
              {hero.ctas.map((cta) => {
                const btnClass =
                  cta.variant === 'primary'
                    ? 'co-btn co-btn--primary'
                    : cta.variant === 'secondary'
                      ? 'co-btn co-btn--secondary'
                      : 'co-btn co-btn--tertiary'
                return (
                  <a key={cta.label} href={cta.href} className={btnClass}>
                    {cta.label}
                  </a>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25} className="co-hero__chart">
          <RadarChart />
        </ScrollReveal>
      </div>
    </section>
  )
}
