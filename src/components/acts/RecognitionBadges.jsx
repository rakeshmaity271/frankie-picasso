import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './RecognitionBadges.module.css'

export default function RecognitionBadges() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const act = content.acts[5] // still-becoming
  const awards = act.awards

  return (
    <div className={styles.content} ref={sectionRef}>
      <h3 className={styles.heading}>Recognition</h3>

      <div className={styles.featured}>
        <span className={styles.featuredYear}>{awards.featured.year}</span>
        <span className={styles.featuredTitle}>{awards.featured.title}</span>
        <span className={styles.featuredOrg}>{awards.featured.org}</span>
      </div>

      <div className={styles.grid}>
        {awards.items.map((item, i) => (
          <div key={i} className={`reveal-item ${styles.badge}`}>
            <span className={styles.badgeYear}>{item.year}</span>
            <span className={styles.badgeTitle}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
