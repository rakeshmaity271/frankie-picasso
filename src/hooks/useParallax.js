import { gsap, useGSAP } from './useGsap'

export function useParallax(ref, options = {}) {
  const {
    speed = 0.5,
    direction = 'up',
    start = 'top bottom',
    end = 'bottom top',
    scrub = true
  } = options

  useGSAP(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const yPercent = direction === 'up' ? -speed * 100 : speed * 100

    gsap.to(ref.current, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub
      }
    })
  }, { scope: ref })
}
