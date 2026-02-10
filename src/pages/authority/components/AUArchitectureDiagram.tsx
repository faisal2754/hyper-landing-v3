import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from '../../../shared/hooks/useReducedMotion'
import {
  setupGsapScroll,
  gsap,
} from '../../../shared/utils/gsapScrollSetup'
import {
  Database,
  FileSpreadsheet,
  Users,
  ShoppingCart,
  ArrowDownUp,
  HardDrive,
  BarChart3,
  Bot,
  FileText,
} from 'lucide-react'

const DATA_SOURCES = [
  { label: 'CRM', icon: Users },
  { label: 'ERP', icon: FileSpreadsheet },
  { label: 'E-commerce', icon: ShoppingCart },
  { label: 'Databases', icon: Database },
]

const OUTPUTS = [
  { label: 'Dashboards', icon: BarChart3 },
  { label: 'AI / ML', icon: Bot },
  { label: 'Reports', icon: FileText },
]

export function AUArchitectureDiagram() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinContainerRef = useRef<HTMLDivElement>(null)
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressRefs = useRef<(HTMLDivElement | null)[]>([])
  const prefersReducedMotion = useReducedMotion()
  const [, setActiveStep] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!sectionRef.current || !pinContainerRef.current) return

    setupGsapScroll()

    const ctx = gsap.context(() => {
      // Set initial states: all layers hidden
      layerRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: 24 })
      })
      connectorRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, scaleY: 0 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: pinContainerRef.current,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(3, Math.floor(self.progress * 4))
            setActiveStep(step)
            // Update progress dots
            progressRefs.current.forEach((el, i) => {
              if (el) {
                if (i <= step) {
                  el.classList.add('au-arch__progress-step--active')
                } else {
                  el.classList.remove('au-arch__progress-step--active')
                }
              }
            })
          },
        },
      })

      // Layer 1: Data Sources (0 -> 0.25)
      tl.to(layerRefs.current[0], { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }, 0)

      // Connector 1 (0.15 -> 0.25)
      tl.to(connectorRefs.current[0], { opacity: 1, scaleY: 1, duration: 0.1, ease: 'power2.out' }, 0.15)

      // Layer 2: HyperFlow (0.25 -> 0.5)
      tl.to(layerRefs.current[1], { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }, 0.25)

      // Connector 2 (0.4 -> 0.5)
      tl.to(connectorRefs.current[1], { opacity: 1, scaleY: 1, duration: 0.1, ease: 'power2.out' }, 0.4)

      // Layer 3: HyperStore (0.5 -> 0.75)
      tl.to(layerRefs.current[2], { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }, 0.5)

      // Connector 3 (0.65 -> 0.75)
      tl.to(connectorRefs.current[2], { opacity: 1, scaleY: 1, duration: 0.1, ease: 'power2.out' }, 0.65)

      // Layer 4: Outputs (0.75 -> 1.0)
      tl.to(layerRefs.current[3], { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }, 0.75)
    })

    return () => ctx.revert()
  }, [prefersReducedMotion])

  // If reduced motion, show everything
  const layerStyle = prefersReducedMotion ? {} : undefined

  return (
    <section
      className="au-arch"
      ref={sectionRef}
      aria-label="Architecture diagram"
    >
      <div className="au-arch__pin-container" ref={pinContainerRef}>
        <div className="au-container">
          <div className="au-arch__header">
            <p className="au-arch__section-label">Architecture</p>
            <h2 className="au-arch__title">
              How your data flows through Hyper
            </h2>
          </div>

          <div className="au-arch__diagram">
            {/* Layer 1: Data Sources */}
            <div
              className="au-arch__layer au-arch__layer--sources"
              ref={(el) => { layerRefs.current[0] = el }}
              style={layerStyle}
            >
              {DATA_SOURCES.map((source) => (
                <div key={source.label} className="au-arch__node">
                  <source.icon className="au-arch__node-icon" aria-hidden="true" />
                  <span className="au-arch__node-label">{source.label}</span>
                </div>
              ))}
            </div>

            {/* Connector 1 */}
            <div
              className="au-arch__connector"
              ref={(el) => { connectorRefs.current[0] = el }}
              style={layerStyle}
            >
              <div className="au-arch__connector-dots">
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
              </div>
            </div>

            {/* Layer 2: HyperFlow */}
            <div
              className="au-arch__layer"
              ref={(el) => { layerRefs.current[1] = el }}
              style={layerStyle}
            >
              <div className="au-arch__platform">
                <div className="au-arch__platform-block au-arch__platform-block--flow">
                  <div className="au-arch__platform-name">HyperFlow</div>
                  <div className="au-arch__platform-desc">
                    <ArrowDownUp size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    Connect &amp; Sync
                  </div>
                </div>
                <div className="au-arch__platform-block au-arch__platform-block--store">
                  <div className="au-arch__platform-name">HyperStore</div>
                  <div className="au-arch__platform-desc">
                    <HardDrive size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    Store &amp; Query
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 2 */}
            <div
              className="au-arch__connector"
              ref={(el) => { connectorRefs.current[1] = el }}
              style={layerStyle}
            >
              <div className="au-arch__connector-dots">
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
              </div>
            </div>

            {/* Layer 3: Processing (combined view, or just a divider) */}
            <div
              className="au-arch__layer"
              ref={(el) => { layerRefs.current[2] = el }}
              style={layerStyle}
            >
              <div className="au-arch__node" style={{ minWidth: '200px' }}>
                <span className="au-arch__node-label">Transform &middot; Deduplicate &middot; Optimize</span>
              </div>
            </div>

            {/* Connector 3 */}
            <div
              className="au-arch__connector"
              ref={(el) => { connectorRefs.current[2] = el }}
              style={layerStyle}
            >
              <div className="au-arch__connector-dots">
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
                <div className="au-arch__connector-dot" />
              </div>
            </div>

            {/* Layer 4: Outputs */}
            <div
              className="au-arch__layer au-arch__layer--outputs"
              ref={(el) => { layerRefs.current[3] = el }}
              style={layerStyle}
            >
              {OUTPUTS.map((output) => (
                <div key={output.label} className="au-arch__node">
                  <output.icon className="au-arch__node-icon" aria-hidden="true" />
                  <span className="au-arch__node-label">{output.label}</span>
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="au-arch__progress" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`au-arch__progress-step${
                    prefersReducedMotion ? ' au-arch__progress-step--active' : ''
                  }`}
                  ref={(el) => { progressRefs.current[i] = el }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
