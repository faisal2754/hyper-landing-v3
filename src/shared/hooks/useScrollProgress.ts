import { useState, useEffect, type RefObject } from 'react'

export function useScrollProgress(ref: RefObject<Element | null>): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updateProgress = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      // 0 when element top enters viewport bottom, 1 when element bottom exits viewport top
      const totalTravel = windowHeight + elementHeight
      const traveled = windowHeight - rect.top
      const raw = traveled / totalTravel

      setProgress(Math.max(0, Math.min(1, raw)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [ref])

  return progress
}
