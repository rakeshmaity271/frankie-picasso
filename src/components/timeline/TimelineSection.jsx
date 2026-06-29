import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './TimelineSection.module.css'

export default function TimelineSection() {
  const sectionRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.timeline-node-item')
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const legacyEvents = content.acts[5].legacyEvents

  return (
    <section id="timeline" className={styles.section} aria-label="Timeline">
      <div className={styles.content} ref={sectionRef}>
        <div className={styles.header}>
          <span className={styles.label}>The Journey</span>
          <h2 className={styles.title}>Timeline</h2>
          <p className={styles.subtitle}>Key moments that shaped the story.</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />
          {legacyEvents.map((event, i) => (
            <div key={i} className={`timeline-node-item ${styles.event}`}>
              <div className={styles.dot} aria-hidden="true" />
              <time className={styles.year}>{event.year}</time>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
