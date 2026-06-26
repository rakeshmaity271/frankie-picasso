import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './Entrepreneurship.module.css'

export default function Entrepreneurship() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const act = content.acts[1] // building

  return (
    <div className={styles.content} ref={sectionRef}>
      <div className={styles.grid}>
        {act.ventures.map((venture, i) => (
          <article key={i} className={`reveal-item ${styles.card}`}>
            <div className={styles.cardImage}>
              <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="400" height="200" fill="url(#vg)" />
                <rect x="160" y="60" width="80" height="80" rx="4" fill="rgba(197,165,90,0.15)" />
                <defs><linearGradient id="vg" x1="0" y1="0" x2="400" y2="200"><stop offset="0%" stopColor="#3D1C3E" /><stop offset="100%" stopColor="#722F37" /></linearGradient></defs>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{venture.name}</h3>
              <p className={styles.cardRole}>{venture.role}</p>
              <p className={styles.cardDesc}>{venture.description}</p>
              <p className={`${styles.impact} impact-number`}>{venture.impact}</p>
            </div>
          </article>
        ))}
      </div>

      {act.timeline && (
        <div className={styles.timeline}>
          {act.timeline.map((item, i) => (
            <div key={i} className={`reveal-item ${styles.timelineItem}`}>
              <time className={styles.timelineYear}>{item.year}</time>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
