import { useRef, useEffect } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useParallax } from '../../hooks/useParallax'
import { content } from '../../data/content'
import styles from './HeroExperience.module.css'

export default function HeroExperience() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const portraitRef = useRef(null)
  const decorRef = useRef(null)
  const portraitParallax = useRef(null)

  const hero = content.hero

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const headline = headlineRef.current
    if (!headline) return

    const words = headline.querySelectorAll('.word')
    gsap.from(words, {
      opacity: 0,
      y: 40,
      rotateX: -40,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3
    })

    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, delay: 0.1 })
    gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 1.2 })
    gsap.from('.hero-line', { scaleX: 0, duration: 1, delay: 1.5, ease: 'power2.inOut' })
    gsap.from('.hero-tagline', { opacity: 0, duration: 0.8, delay: 1.8 })
  }, { scope: sectionRef })

  useParallax(portraitParallax, { speed: 0.3, direction: 'up' })

  useEffect(() => {
    if (!decorRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const dots = decorRef.current.querySelectorAll('.dot')
    dots.forEach((dot, i) => {
      gsap.to(dot, {
        y: `random(-20, 20)`,
        x: `random(-15, 15)`,
        duration: `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      })
    })
  }, [])

  const headlineWords = hero.headline.split(' ')

  return (
    <section id="hero" className={styles.hero} ref={sectionRef} aria-label="Hero">
      <div className={styles.decor} ref={decorRef} aria-hidden="true">
        <div className="dot" style={{ top: '15%', left: '10%' }} />
        <div className="dot" style={{ top: '70%', left: '5%' }} />
        <div className="dot" style={{ top: '25%', right: '15%' }} />
        <div className="dot" style={{ top: '80%', right: '8%' }} />
        <div className="dot" style={{ top: '50%', left: '50%' }} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <p className={`hero-eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</p>
          <h1 ref={headlineRef} className={styles.headline}>
            {headlineWords.map((word, i) => (
              <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
                {word}
              </span>
            ))}
          </h1>
          <p className={`hero-sub ${styles.sub}`}>{hero.subheadline}</p>
          <div className={`hero-line ${styles.line}`} aria-hidden="true" />
          <p className={`hero-tagline ${styles.tagline}`}>{hero.tagline}</p>
        </div>

        <div className={styles.portraitWrap} ref={portraitParallax}>
          <div className={styles.portrait}>
            <div className={styles.portraitInner}>
              <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="200" height="260" rx="8" fill="url(#grad)" />
                <circle cx="100" cy="90" r="40" fill="rgba(197,165,90,0.3)" />
                <ellipse cx="100" cy="200" rx="55" ry="45" fill="rgba(197,165,90,0.2)" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="200" y2="260">
                    <stop offset="0%" stopColor="#3D1C3E" />
                    <stop offset="100%" stopColor="#722F37" />
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.portraitLabel}>Portrait</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
