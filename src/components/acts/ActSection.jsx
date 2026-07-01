import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import styles from './ActSection.module.css'

export default function ActSection({ act, children }) {
  const headerRef = useRef(null)
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)

  const themeClass = `act-theme--${act.id}`
  const isFirstAct = act.id === 'becoming'

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    if (labelRef.current) {
      tl.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      })
    }

    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.4')
    }

    if (taglineRef.current) {
      tl.from(taglineRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.9,
        ease: 'power3.out'
      }, '-=0.6')
    }
  }, { scope: sectionRef })

  return (
    <section
      id={act.id}
      className={`${styles.section} ${themeClass} ${isFirstAct ? styles.firstAct : ''}`}
      aria-label={`Act ${act.number}: ${act.title}`}
      ref={sectionRef}
    >
      {/* Cinematic floating orbs */}
      <div className={styles.floatingElements} aria-hidden="true">
        <div className={styles.orb} style={{ width: 200, height: 200, top: '15%', left: '-3%' }} />
        <div className={styles.orb} style={{ width: 120, height: 120, bottom: '20%', right: '-2%' }} />
      </div>

      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>{act.number}</span>
      </div>

      <div className={`container ${styles.header} ${isFirstAct ? styles.firstActHeader : ''}`} ref={headerRef}>
        <span className={styles.actLabel} ref={labelRef}>Act {act.number}</span>
        <h2 className={styles.title} ref={titleRef}>{act.title}</h2>
        <p className={styles.tagline} ref={taglineRef}>&ldquo;{act.tagline}&rdquo;</p>
        {act.intro && <p className={styles.intro}>{act.intro}</p>}
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}
