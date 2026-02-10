import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ScrollRevealProps {
  children: ReactNode
  /** Delay in seconds before the animation starts */
  delay?: number
  /** Vertical offset in pixels */
  y?: number
  /** Duration of the fade-up in seconds */
  duration?: number
  /** IntersectionObserver threshold (0-1) */
  threshold?: number
  /** Additional className */
  className?: string
  /** Element tag to render */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer'
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.6,
  threshold = 0.15,
  className,
  as = 'div',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  // If reduced motion is preferred, render children immediately
  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const Component = motion.create(as)

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  )
}
