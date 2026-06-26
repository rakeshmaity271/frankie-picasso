import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './Creativity.module.css'

export default function Creativity() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const items = sectionRef.current.querySelectorAll('.creativity-card')
    items.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        rotate: -2,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const act = content.acts[3] // creating
  const typeIcons = { book: '\u{1F4D6}', radio: '\u{1F399}', art: '\u{1F3A8}', writing: '\u270D' }

  return (
    <div className={styles.content} ref={sectionRef}>
      <div className={styles.grid}>
        {act.works.map((work, i) => (
          <article key={i} className={`creativity-card ${styles.card} ${i === 0 || i === 3 ? styles.wide : ''}`}>
            <div className={styles.cardVisual}>
              <span className={styles.icon} aria-hidden="true">{typeIcons[work.type] || '\u2726'}</span>
              <span className={styles.badge}>{work.type.toUpperCase()}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{work.title}</h3>
              <p className={styles.cardDesc}>{work.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
