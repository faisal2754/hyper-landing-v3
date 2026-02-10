import { useState, useEffect, type RefObject } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  once?: boolean
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: UseIntersectionObserverOptions = {},
): boolean {
  const { threshold = 0, root = null, rootMargin = '0px', once = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting
        setIsIntersecting(intersecting)

        if (intersecting && once) {
          observer.unobserve(element)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, root, rootMargin, once])

  return isIntersecting
}
