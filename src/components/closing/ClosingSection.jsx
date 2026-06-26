import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './ClosingSection.module.css'

export default function ClosingSection() {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })
  useScrollReveal(quoteRef, { animation: 'fade-in' })

  const closing = content.closing

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="closing" className={styles.section} aria-label="Closing">
      <div className={`container ${styles.inner}`} ref={sectionRef}>
        <h2 className={styles.question}>{closing.question}</h2>

        <blockquote ref={quoteRef} className={styles.quote}>
          <p>&ldquo;{closing.quote}&rdquo;</p>
        </blockquote>

        {closing.heartbeatLine && (
          <p className={styles.heartbeat}>{closing.heartbeatLine}</p>
        )}

        <button className={styles.cta} onClick={() => scrollTo('contact')}>
          {closing.cta}
        </button>
      </div>
    </section>
  )
}
