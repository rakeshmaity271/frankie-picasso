import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Heartbeat.module.css'

export default function Heartbeat({ line }) {
  const ref = useRef(null)
  useScrollReveal(ref, { animation: 'fade-scale' })

  return (
    <div
      className={styles.heartbeat}
      ref={ref}
      role="presentation"
    >
      <div className={styles.lineDecor} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.line} />
        <span className={styles.dot} />
      </div>
      <p className={styles.text}>{line}</p>
      <div className={styles.lineDecor} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.line} />
        <span className={styles.dot} />
      </div>
    </div>
  )
}
