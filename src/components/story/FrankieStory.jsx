import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './FrankieStory.module.css'

export default function FrankieStory() {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })
  useScrollReveal(quoteRef, { animation: 'fade-in' })

  const act = content.acts[0] // becoming

  return (
    <div className={styles.content} ref={sectionRef}>
      <div className={styles.narrative}>
        <p className={`reveal-item ${styles.philosophy}`}>{act.philosophy}</p>
      </div>

      <div className={styles.timeline}>
        <ol className={styles.timelineList}>
          {act.timeline.map((item, i) => (
            <li key={i} className={`reveal-item ${styles.timelineItem}`}>
              <time className={styles.year}>{item.year}</time>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineDesc}>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <blockquote ref={quoteRef} className={styles.pullQuote}>
        <p>&ldquo;{act.pullQuote}&rdquo;</p>
      </blockquote>
    </div>
  )
}
