import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
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

  const data = content.creativity
  const typeIcons = { book: '📖', radio: '🎙', art: '🎨', writing: '✍' }

  return (
    <section id="creativity" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Creativity">
      <div className="container">
        <SectionHeading number="04" title="Creativity" subtitle={data.intro} />

        <div className={styles.grid}>
          {data.works.map((work, i) => (
            <article key={i} className={`creativity-card ${styles.card} ${i === 0 || i === 3 ? styles.wide : ''}`}>
              <div className={styles.cardVisual}>
                <span className={styles.icon} aria-hidden="true">{typeIcons[work.type] || '✦'}</span>
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
    </section>
  )
}
