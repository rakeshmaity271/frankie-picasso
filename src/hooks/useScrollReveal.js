import { gsap, ScrollTrigger, useGSAP } from './useGsap'

export function useScrollReveal(ref, options = {}) {
  const {
    animation = 'fade-up',
    stagger = 0.12,
    delay = 0,
    start = 'top 88%',
    once = true,
    duration = 1.1
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
      const animProps = getAnimProps(animation)
      gsap.from(ref.current, {
        ...animProps,
        duration,
        delay,
        ease: 'power3.out'
      })
      return
    }

    const animProps = getAnimProps(animation)

    gsap.from(elements, {
      ...animProps,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse'
      }
    })
  }, { scope: ref })
}

function getAnimProps(animation) {
  switch (animation) {
    case 'fade-up':
      return { opacity: 0, y: 50 }
    case 'fade-down':
      return { opacity: 0, y: -40 }
    case 'fade-left':
      return { opacity: 0, x: -50 }
    case 'fade-right':
      return { opacity: 0, x: 50 }
    case 'scale-up':
      return { opacity: 0, scale: 0.92 }
    case 'fade-scale':
      return { opacity: 0, scale: 0.95, y: 20 }
    case 'blur-in':
      return { opacity: 0, scale: 0.97, filter: 'blur(8px)' }
    default:
      return { opacity: 0, y: 50 }
  }
}
