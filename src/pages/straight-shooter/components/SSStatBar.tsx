import { useRef, useEffect } from 'react'
import { results } from '../../../data/content'
import { useReducedMotion } from '../../../shared/hooks/useReducedMotion'
import {
  setupGsapScroll,
  gsap,
} from '../../../shared/utils/gsapScrollSetup'

/**
 * Parse a stat value like "5 weeks", "20+ hours/week", "60-70%", "95%+"
 * into a numeric target and the text around it.
 */
function parseStat(value: string): {
  prefix: string
  number: number
  suffix: string
} {
  // Try to match the first number (possibly with decimals)
  const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*?)$/)
  if (!match) return { prefix: '', number: 0, suffix: value }

  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  }
}

export function SSStatBar() {
  const sectionRef = useRef<HTMLElement>(null)
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([])
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    setupGsapScroll()

    const ctx = gsap.context(() => {
      results.stats.forEach((stat, i) => {
        const el = valueRefs.current[i]
        if (!el) return

        const parsed = parseStat(stat.value)
        const obj = { val: 0 }

        gsap.to(obj, {
          val: parsed.number,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
          onUpdate() {
            const isInteger = Number.isInteger(parsed.number)
            const displayNum = isInteger
              ? Math.round(obj.val)
              : obj.val.toFixed(1)
            el.textContent = `${parsed.prefix}${displayNum}${parsed.suffix}`
          },
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [prefersReducedMotion])

  return (
    <section
      className="ss-statbar"
      ref={sectionRef}
      aria-label="Key results"
    >
      <div className="ss-container">
        <div className="ss-statbar__grid">
          {results.stats.map((stat, i) => (
            <div key={i} className="ss-statbar__item">
              <div
                className="ss-statbar__value"
                ref={(el) => {
                  valueRefs.current[i] = el
                }}
                aria-label={`${stat.value} ${stat.label}`}
              >
                {prefersReducedMotion ? stat.value : '0'}
              </div>
              <div className="ss-statbar__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
