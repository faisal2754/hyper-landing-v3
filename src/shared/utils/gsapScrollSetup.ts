import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/**
 * Register GSAP ScrollTrigger plugin (idempotent).
 * Call this once before creating any ScrollTrigger instances.
 */
export function setupGsapScroll(): void {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export { gsap, ScrollTrigger }
