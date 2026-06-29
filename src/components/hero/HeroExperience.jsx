import { useRef, useEffect } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useParallax } from '../../hooks/useParallax'
import { content, actColors } from '../../data/content'
import styles from './HeroExperience.module.css'

export default function HeroExperience() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const portraitRef = useRef(null)
  const decorRef = useRef(null)
  const portraitParallax = useRef(null)
  const orbRef = useRef(null)

  const hero = content.hero

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const headline = headlineRef.current
    if (!headline) return

    const words = headline.querySelectorAll('.word')
    gsap.from(words, {
      opacity: 0,
      y: 60,
      rotateX: -20,
      stagger: 0.07,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.5
    })

    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power3.out' })
    gsap.from('.hero-sub', { opacity: 0, y: 35, duration: 1, delay: 1.6, ease: 'power3.out' })
    gsap.from('.hero-cta', { opacity: 0, y: 30, duration: 0.9, delay: 1.9, ease: 'power3.out' })
    gsap.from('.hero-act-dots', { opacity: 0, y: 10, duration: 0.6, delay: 2.4 })
    gsap.from('.hero-scroll', { opacity: 0, duration: 0.8, delay: 2.8 })
  }, { scope: sectionRef })

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  useParallax(portraitParallax, { speed: isMobile ? 0 : 0.3, direction: 'up' })

  useEffect(() => {
    if (!decorRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const dots = decorRef.current.querySelectorAll('.dot')
    dots.forEach((dot, i) => {
      gsap.to(dot, {
        y: `random(-25, 25)`,
        x: `random(-18, 18)`,
        duration: `random(4, 7)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      })
    })
  }, [])

  useEffect(() => {
    if (!orbRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const orbs = orbRef.current.querySelectorAll('.floating-orb')
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        duration: `random(6, 10)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 1.5
      })
    })
  }, [])

  const headlineWords = hero.headline.split(' ')

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const actEntries = Object.entries(actColors)

  return (
    <section id="hero" className={styles.hero} ref={sectionRef} aria-label="Hero">
      {/* Floating orbs for cinematic depth */}
      <div className={styles.orbs} ref={orbRef} aria-hidden="true">
        <div className="floating-orb" style={{ width: 300, height: 300, top: '10%', left: '-5%', background: 'var(--color-gold)', animationDelay: '0s' }} />
        <div className="floating-orb" style={{ width: 200, height: 200, top: '60%', right: '-3%', background: 'var(--color-burgundy)', animationDelay: '2s' }} />
        <div className="floating-orb" style={{ width: 150, height: 150, top: '30%', right: '20%', background: 'var(--color-aqua)', animationDelay: '4s' }} />
      </div>

      <div className={styles.decor} ref={decorRef} aria-hidden="true">
        <div className="dot" style={{ top: '15%', left: '10%' }} />
        <div className="dot" style={{ top: '70%', left: '5%' }} />
        <div className="dot" style={{ top: '25%', right: '15%' }} />
        <div className="dot" style={{ top: '80%', right: '8%' }} />
        <div className="dot" style={{ top: '50%', left: '50%' }} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h1 ref={headlineRef} className={styles.headline}>
            {headlineWords.map((word, i) => (
              <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
                {word}
              </span>
            ))}
          </h1>

          <p className={`hero-sub ${styles.sub}`}>{hero.subheadline}</p>

          <div className={`hero-cta ${styles.ctaGroup}`}>
            <button className={styles.ctaPrimary} onClick={() => scrollTo('becoming')}>
              {hero.ctaPrimary}
              <svg className={styles.ctaArrow} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.ctaSecondary} onClick={() => scrollTo('contact')}>
              {hero.ctaSecondary}
            </button>
          </div>

          <div className={`hero-act-dots ${styles.actDots}`}>
            {actEntries.map(([act, color]) => (
              <span
                key={act}
                className={styles.actDot}
                style={{ background: color }}
                title={act.charAt(0).toUpperCase() + act.slice(1)}
                aria-hidden="true"
              />
            ))}
          </div>
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
          <div className={styles.taglineBlock}>
            <div className={styles.taglineDivider}>
              <span className={styles.taglineDot} />
            </div>
            <p className={`hero-eyebrow ${styles.eyebrow}`}>
              <span className={styles.eyebrowLine}>{hero.eyebrow}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`hero-scroll ${styles.scrollIndicator}`} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
