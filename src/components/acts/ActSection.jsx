import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './ActSection.module.css'

export default function ActSection({ act, children }) {
  const headerRef = useRef(null)
  useScrollReveal(headerRef, { animation: 'fade-up' })

  const themeClass = `act-theme--${act.id}`

  return (
    <section
      id={act.id}
      className={`${styles.section} ${themeClass}`}
      aria-label={`Act ${act.number}: ${act.title}`}
    >
      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>{act.number}</span>
      </div>

      <div className={`container ${styles.header}`} ref={headerRef}>
        <span className={styles.actLabel}>Act {act.number}</span>
        <h2 className={styles.title}>{act.title}</h2>
        <p className={styles.tagline}>&ldquo;{act.tagline}&rdquo;</p>
        {act.intro && <p className={styles.intro}>{act.intro}</p>}
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}
