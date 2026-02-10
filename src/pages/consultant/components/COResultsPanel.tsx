import { ScrollReveal } from '../../../shared/components/ScrollReveal'

/**
 * Generates points on a regular pentagon for the results radar chart.
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

const RESULT_LABELS = [
  'Data Quality',
  'Integration',
  'Analytics',
  'Governance',
  'AI Readiness',
]
const RESULT_VALUES = [0.45, 0.55, 0.3, 0.6, 0.2]
const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]

function ResultsRadarChart() {
  const cx = 160
  const cy = 160
  const radius = 120
  const count = RESULT_LABELS.length

  const labelOffsets: { dx: number; dy: number; anchor: string }[] = [
    { dx: 0, dy: -12, anchor: 'middle' },
    { dx: 14, dy: 3, anchor: 'start' },
    { dx: 8, dy: 12, anchor: 'start' },
    { dx: -8, dy: 12, anchor: 'end' },
    { dx: -14, dy: 3, anchor: 'end' },
  ]

  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Results radar chart showing your data maturity scores across five dimensions. Overall score: Stage 2, Reactive."
    >
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
      {RESULT_LABELS.map((_, i) => {
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

      {/* Filled results area */}
      <polygon
        points={radarPoints(cx, cy, radius, RESULT_VALUES, count)}
        className="co-radar-fill--results"
      />

      {/* Data points */}
      {RESULT_VALUES.map((v, i) => {
        const pt = radarPoint(cx, cy, radius, v, i, count)
        return (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={4}
            className="co-radar-dot--results"
          />
        )
      })}

      {/* Axis labels */}
      {RESULT_LABELS.map((label, i) => {
        const pt = radarPoint(cx, cy, radius, 1.22, i, count)
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
    </svg>
  )
}

interface Recommendation {
  tag: string
  title: string
  description: string
  type: 'quick' | 'invest' | 'long'
}

const recommendations: Recommendation[] = [
  {
    tag: 'Quick Win',
    title: 'Automate Monthly Reporting',
    description:
      'Connect your top 3 data sources to eliminate 20+ hours of manual reporting work per week. ROI visible in 30 days.',
  },
  {
    tag: 'Key Investment',
    title: 'Build a Central Data Warehouse',
    description:
      'Consolidate scattered data into a single, queryable source of truth. Foundation for all future analytics and AI.',
  },
  {
    tag: 'Long-term Goal',
    title: 'Enable Predictive Analytics',
    description:
      'Once your data foundation is solid, unlock AI-powered forecasting, anomaly detection, and natural language queries.',
  },
]

export function COResultsPanel() {
  return (
    <section
      className="co-results co-dotgrid"
      aria-label="Diagnostic results — static illustration"
    >
      <div className="co-container co-results__inner">
        <ScrollReveal>
          <div className="co-results__header">
            <p className="co-results__label">Your Assessment Results</p>
            <h2 className="co-results__title">Data Maturity Scorecard</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="co-results__panel">
            <div className="co-results__panel-top">
              <div className="co-results__chart-wrap">
                <ResultsRadarChart />
              </div>

              <div className="co-results__score">
                <div className="co-results__score-badge">
                  Assessment Complete
                </div>
                <h3 className="co-results__score-stage">
                  Your Data Maturity: Stage 2 — <span>Reactive</span>
                </h3>
                <p className="co-results__score-desc">
                  Your organization relies on manual processes for most data tasks.
                  Data exists in silos across multiple tools, and reporting requires
                  significant manual effort. You have the foundations but need
                  infrastructure to scale.
                </p>
              </div>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="co-results__recs">
                {recommendations.map((rec) => (
                  <div
                    key={rec.tag}
                    className={`co-results__rec co-results__rec--${rec.type}`}
                  >
                    <div className="co-results__rec-tag">{rec.tag}</div>
                    <h4 className="co-results__rec-title">{rec.title}</h4>
                    <p className="co-results__rec-desc">{rec.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="co-results__cta-wrap">
              <a href="#contact" className="co-btn co-btn--amber">
                Get Your Full Assessment
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
