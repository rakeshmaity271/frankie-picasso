import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './AwardsRecognition.module.css'

export default function AwardsRecognition() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const featured = sectionRef.current.querySelector('.featured-award')
    if (featured) {
      gsap.from(featured, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: featured,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }
  }, { scope: sectionRef })

  const data = content.awards

  return (
    <section id="awards" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Awards and Recognition">
      <div className="container">
        <SectionHeading number="08" title="Awards & Recognition" subtitle={data.intro} />

        <div className={`featured-award ${styles.featured}`}>
          <div className={styles.featuredFrame}>
            <svg className={styles.laurel} viewBox="0 0 120 120" fill="none" aria-hidden="true">
              <circle cx="60" cy="60" r="55" stroke="var(--color-gold)" strokeWidth="1" opacity="0.3" />
              <circle cx="60" cy="60" r="45" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.2" />
              <path d="M60 15 L63 25 L60 22 L57 25 Z" fill="var(--color-gold)" opacity="0.5" />
              <path d="M60 105 L63 95 L60 98 L57 95 Z" fill="var(--color-gold)" opacity="0.5" />
            </svg>
            <div className={styles.featuredContent}>
              <span className={styles.featuredYear}>{data.featured.year}</span>
              <h3 className={styles.featuredTitle}>{data.featured.title}</h3>
              <p className={styles.featuredOrg}>{data.featured.org}</p>
              <p className={styles.featuredDesc}>{data.featured.description}</p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {data.items.map((item, i) => (
            <article key={i} className={`reveal-item ${styles.awardCard}`}>
              <span className={styles.awardYear}>{item.year}</span>
              <h3 className={styles.awardTitle}>{item.title}</h3>
              <p className={styles.awardOrg}>{item.org}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
