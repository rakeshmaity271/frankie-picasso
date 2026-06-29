import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './Impact.module.css'

const pillarIcons = {
  freedom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  creativity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  )
}

export default function Impact() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!statsRef.current) return
    const statItems = statsRef.current.querySelectorAll('.stat-item')
    statItems.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: statsRef })

  const data = content.impact

  return (
    <section id="impact" className={styles.section} aria-label="Impact">
      <div className={styles.content} ref={sectionRef}>
        <div className={styles.header}>
          <span className={styles.label}>The Ripple Effect</span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.stats} ref={statsRef}>
          {data.stats.map((stat, i) => (
            <div key={i} className={`stat-item ${styles.stat}`}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.pillars}>
          {data.pillars.map((pillar, i) => (
            <article key={i} className={`reveal-item ${styles.pillar}`}>
              <div className={styles.pillarIcon}>
                {pillarIcons[pillar.icon]}
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
