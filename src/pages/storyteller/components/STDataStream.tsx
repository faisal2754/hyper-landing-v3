import { useRef, useEffect } from 'react'
import { useReducedMotion } from '../../../shared/hooks/useReducedMotion'
import {
  setupGsapScroll,
  gsap,
  ScrollTrigger,
} from '../../../shared/utils/gsapScrollSetup'

/**
 * SVG path data for the "tangled" (chaotic) and "untangled" (clean) states.
 * Each stream represents a data source flowing toward the convergence point.
 * In the tangled state, paths are curvy and overlapping.
 * In the untangled state, paths are clean parallel lines converging to center-right.
 */

const DATA_SOURCES = [
  { name: 'CRM', color: '#c4654a' },
  { name: 'ERP', color: '#c9a84c' },
  { name: 'Sheets', color: '#8b9da7' },
  { name: 'APIs', color: '#a3826e' },
  { name: 'Database', color: '#7a9b8a' },
  { name: 'Marketing', color: '#b07d9e' },
]

// Tangled paths: chaotic, overlapping curves from left side
const TANGLED_PATHS = [
  'M 160 80  C 280 20,  360 180, 440 100 S 620 40,  720 120 S 860 60,  950 300',
  'M 160 160 C 260 250, 340 50,  460 180 S 610 280, 700 160 S 810 220, 950 300',
  'M 160 240 C 240 180, 390 320, 480 200 S 590 100, 740 240 S 880 180, 950 300',
  'M 160 320 C 310 400, 380 160, 500 280 S 650 360, 760 200 S 840 300, 950 300',
  'M 160 400 C 270 340, 390 460, 520 350 S 630 220, 780 380 S 900 280, 950 300',
  'M 160 480 C 290 520, 410 380, 540 440 S 670 500, 800 350 S 890 400, 950 300',
]

// Untangled paths: clean, straight parallel lines converging to a point
const UNTANGLED_PATHS = [
  'M 160 80  C 260 80,  380 80,  490 120 S 720 240, 950 300',
  'M 160 160 C 260 160, 380 160, 490 190 S 720 260, 950 300',
  'M 160 240 C 260 240, 380 240, 490 250 S 720 280, 950 300',
  'M 160 320 C 260 320, 380 320, 490 330 S 720 310, 950 300',
  'M 160 400 C 260 400, 380 400, 490 380 S 720 330, 950 300',
  'M 160 480 C 260 480, 380 480, 490 440 S 720 340, 950 300',
]

export function STDataStream() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const labelRefs = useRef<(SVGGElement | null)[]>([])
  const midLabelRef = useRef<SVGTextElement>(null)
  const destLabelRef = useRef<SVGGElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    setupGsapScroll()

    const ctx = gsap.context(() => {
      // Create the main pinned scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: pinRef.current,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      // Animate each path from tangled to untangled
      pathRefs.current.forEach((path, i) => {
        if (!path) return

        // Set initial tangled state
        const totalLength = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength * 0.3,
          attr: { d: TANGLED_PATHS[i] },
          opacity: 0.5,
        })

        // Animate path morphing from tangled to untangled
        tl.to(
          path,
          {
            attr: { d: UNTANGLED_PATHS[i] },
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1,
            ease: 'none',
          },
          0,
        )
      })

      // Animate source labels: fade in then out as paths organize
      labelRefs.current.forEach((label, i) => {
        if (!label) return
        gsap.set(label, { opacity: 0 })

        tl.to(
          label,
          {
            opacity: 1,
            duration: 0.2,
            ease: 'none',
          },
          0.05 * i,
        )

        tl.to(
          label,
          {
            opacity: 0.6,
            duration: 0.3,
            ease: 'none',
          },
          0.5,
        )
      })

      // Animate "HyperFlow" mid label: appear at 40%
      if (midLabelRef.current) {
        gsap.set(midLabelRef.current, { opacity: 0 })
        tl.to(
          midLabelRef.current,
          {
            opacity: 1,
            duration: 0.3,
            ease: 'none',
          },
          0.35,
        )
      }

      // Animate "HyperStore" destination label: appear at 70%
      if (destLabelRef.current) {
        gsap.set(destLabelRef.current, { opacity: 0 })
        tl.to(
          destLabelRef.current,
          {
            opacity: 1,
            duration: 0.3,
            ease: 'none',
          },
          0.65,
        )
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [prefersReducedMotion])

  // Reduced motion: show final untangled state
  if (prefersReducedMotion) {
    return (
      <section
        className="st-datastream st-datastream--static"
        aria-label="Data streams visualization: scattered data sources converge into an organized flow through HyperFlow into HyperStore"
      >
        <div className="st-container">
          <div className="st-datastream__heading" style={{ position: 'relative', transform: 'none', left: 'auto', marginBottom: '2rem' }}>
            <h2 className="st-datastream__title">From chaos to clarity</h2>
            <p className="st-datastream__subtitle">
              Your scattered data, unified
            </p>
          </div>
          <div className="st-datastream__svg-wrap">
            <svg
              className="st-datastream__svg"
              viewBox="0 0 1000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Organized data streams flowing from six sources through HyperFlow into HyperStore"
            >
              {DATA_SOURCES.map((source, i) => (
                <path
                  key={source.name}
                  d={UNTANGLED_PATHS[i]}
                  stroke={source.color}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              ))}
              {DATA_SOURCES.map((source, i) => (
                <text
                  key={source.name}
                  x="10"
                  y={80 + i * 80}
                  className="st-datastream__label"
                  dominantBaseline="middle"
                >
                  {source.name}
                </text>
              ))}
              <text
                x="480"
                y="560"
                className="st-datastream__label st-datastream__label--highlight"
                textAnchor="middle"
              >
                HyperFlow
              </text>
              <g>
                <circle cx="950" cy="300" r="40" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
                <circle cx="950" cy="300" r="25" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.3" />
                <text
                  x="950"
                  y="370"
                  className="st-datastream__label st-datastream__label--destination"
                  textAnchor="middle"
                >
                  HyperStore
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="st-datastream"
      aria-label="Data streams visualization: scattered data sources converge into an organized flow through HyperFlow into HyperStore"
    >
      <div ref={pinRef} className="st-datastream__pin-container">
        <div className="st-datastream__heading">
          <h2 className="st-datastream__title">From chaos to clarity</h2>
          <p className="st-datastream__subtitle">
            Scroll to see your data transform
          </p>
        </div>

        <div className="st-datastream__svg-wrap">
          <svg
            className="st-datastream__svg"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Animated data streams untangling from chaos into organized flow"
          >
            {/* Data stream paths (rendered first, behind labels) */}
            {DATA_SOURCES.map((source, i) => (
              <path
                key={source.name}
                ref={(el) => {
                  pathRefs.current[i] = el
                }}
                d={TANGLED_PATHS[i]}
                stroke={source.color}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            ))}

            {/* Source labels (rendered after paths so they appear on top) */}
            {DATA_SOURCES.map((source, i) => (
              <g
                key={source.name}
                ref={(el) => {
                  labelRefs.current[i] = el
                }}
                opacity="0"
              >
                <text
                  x="10"
                  y={80 + i * 80}
                  className="st-datastream__label"
                  dominantBaseline="middle"
                >
                  {source.name}
                </text>
              </g>
            ))}

            {/* HyperFlow label in the middle */}
            <text
              ref={midLabelRef}
              x="480"
              y="560"
              className="st-datastream__label st-datastream__label--highlight"
              textAnchor="middle"
              opacity="0"
            >
              HyperFlow
            </text>

            {/* HyperStore destination with concentric circles */}
            <g ref={destLabelRef} opacity="0">
              <circle
                cx="950"
                cy="300"
                r="40"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1"
                opacity="0.5"
              />
              <circle
                cx="950"
                cy="300"
                r="25"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle
                cx="950"
                cy="300"
                r="8"
                fill="#c9a84c"
                opacity="0.6"
              />
              <text
                x="950"
                y="370"
                className="st-datastream__label st-datastream__label--destination"
                textAnchor="middle"
              >
                HyperStore
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
