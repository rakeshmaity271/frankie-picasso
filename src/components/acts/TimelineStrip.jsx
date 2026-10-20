import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './TimelineStrip.module.css'

export default function TimelineStrip() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const act = content.acts?.[6] // still-becoming (Act VII)
  const events = act?.legacyEvents || []

  return (
    <div className={styles.content} ref={sectionRef}>
      <h3 className={styles.heading}>The Journey So Far</h3>
      <div className={styles.strip}>
        <div className={styles.line} aria-hidden="true" />
        {events.map((event, i) => (
          <div key={i} className={`reveal-item ${styles.item}`}>
            <div className={styles.dot} aria-hidden="true" />
            <time className={styles.year}>{event.year}</time>
            <h4 className={styles.title}>{event.title}</h4>
            <p className={styles.desc}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
