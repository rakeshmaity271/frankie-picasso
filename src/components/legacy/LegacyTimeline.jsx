import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './LegacyTimeline.module.css'

const categoryColors = {
  community: '#B87333',
  media: '#722F37',
  entrepreneurship: '#C5A55A',
  creativity: '#5C2D5E',
  awards: '#3D1C3E'
}

const categoryIcons = {
  community: '',
  media: '',
  entrepreneurship: '🚀',
  creativity: '🎨',
  awards: '🏆'
}

export default function LegacyTimeline() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const cards = sectionRef.current.querySelectorAll('.timeline-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const data = content.legacy

  return (
    <section id="legacy" className={styles.section} ref={sectionRef} aria-label="Legacy Timeline">
      <div className="container">
        <SectionHeading title="Legacy Timeline" subtitle={data.intro} light />

        <div className={styles.legend} aria-hidden="true">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <span key={cat} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: color }} />
              {cat}
            </span>
          ))}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />
          {data.events.map((event, i) => {
            const isLeft = i % 2 === 0
            const color = categoryColors[event.category] || '#C5A55A'
            return (
              <div
                key={i}
                className={`timeline-card ${styles.card} ${isLeft ? styles.cardLeft : styles.cardRight}`}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon} aria-hidden="true">{categoryIcons[event.category] || '✦'}</span>
                    <time className={styles.cardYear} style={{ color }}>{event.year}</time>
                  </div>
                  <h3 className={styles.cardTitle}>{event.title}</h3>
                  <p className={styles.cardDesc}>{event.description}</p>
                  <div className={styles.cardAccent} style={{ background: color }} aria-hidden="true" />
                </div>
                <div className={styles.cardDot} style={{ background: color, borderColor: color }} aria-hidden="true" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
