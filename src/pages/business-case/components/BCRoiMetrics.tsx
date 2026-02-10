import { useEffect, useRef } from 'react'
import { pricing, results } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'
import { useReducedMotion } from '../../../shared/hooks/useReducedMotion'
import { setupGsapScroll, gsap, ScrollTrigger } from '../../../shared/utils/gsapScrollSetup'
import { Clock, TrendingUp, Sparkles } from 'lucide-react'

const roiIcons = [Clock, TrendingUp, Sparkles]

export function BCRoiMetrics() {
  const statsRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !statsRef.current) return

    setupGsapScroll()

    const statEls = statsRef.current.querySelectorAll('.bc-roi__stat-value')
    const triggers: ScrollTrigger[] = []

    statEls.forEach((el) => {
      const htmlEl = el as HTMLElement
      const finalText = htmlEl.dataset.value || htmlEl.textContent || ''
      // Extract leading number for counter animation
      const numMatch = finalText.match(/^([\d.]+)/)

      if (!numMatch) return

      const finalNum = parseFloat(numMatch[1])
      const suffix = finalText.slice(numMatch[0].length)
      const prefix = ''

      const obj = { val: 0 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: htmlEl,
          start: 'top 85%',
          once: true,
        },
      })

      tl.to(obj, {
        val: finalNum,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate() {
          const display = Number.isInteger(finalNum)
            ? Math.round(obj.val).toString()
            : obj.val.toFixed(finalNum % 1 === 0 ? 0 : 0)
          htmlEl.textContent = `${prefix}${display}${suffix}`
        },
      })

      if (tl.scrollTrigger) {
        triggers.push(tl.scrollTrigger)
      }
    })

    return () => {
      triggers.forEach((st) => st.kill())
    }
  }, [prefersReducedMotion])

  return (
    <section className="bc-roi bc-grid-bg" aria-label="Return on investment metrics">
      <div className="bc-container">
        <ScrollReveal>
          <div className="bc-roi__header">
            <p className="bc-roi__label">Proven Results</p>
            <h2 className="bc-roi__title">{results.headline}</h2>
            <p className="bc-roi__subtitle">{pricing.roi.subheadline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bc-roi__stats" ref={statsRef}>
            {results.stats.map((stat) => (
              <div key={stat.label} className="bc-roi__stat">
                <div className="bc-roi__stat-value" data-value={stat.value}>
                  {stat.value}
                </div>
                <div className="bc-roi__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="bc-roi__points">
          {pricing.roi.points.map((point, index) => {
            const Icon = roiIcons[index] || Clock
            return (
              <ScrollReveal key={point.text} delay={0.15 + index * 0.1}>
                <div className="bc-roi__point">
                  <div className="bc-roi__point-icon">
                    <Icon size={20} />
                  </div>
                  <p className="bc-roi__point-text">{point.text}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
