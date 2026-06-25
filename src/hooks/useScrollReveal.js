import { gsap, ScrollTrigger, useGSAP } from './useGsap'

export function useScrollReveal(ref, options = {}) {
  const {
    animation = 'fade-up',
    stagger = 0.15,
    delay = 0,
    start = 'top 85%',
    once = true
  } = options

  useGSAP(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      ref.current.style.opacity = 1
      return
    }

    const elements = ref.current.querySelectorAll('.reveal-item')
    if (elements.length === 0) {
      gsap.from(ref.current, {
        opacity: 0,
        y: animation === 'fade-up' ? 60 : 0,
        x: animation === 'fade-left' ? -60 : animation === 'fade-right' ? 60 : 0,
        scale: animation === 'scale-up' ? 0.9 : 1,
        duration: 1,
        delay,
        ease: 'power3.out'
      })
      return
    }

    const animProps = {
      opacity: 0,
      y: animation === 'fade-up' ? 60 : 0,
      x: animation === 'fade-left' ? -60 : animation === 'fade-right' ? 60 : 0,
      scale: animation === 'scale-up' ? 0.9 : 1,
      duration: 1,
      stagger,
      delay,
      ease: 'power3.out'
    }

    gsap.from(elements, {
      ...animProps,
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse'
      }
    })
  }, { scope: ref })
}
