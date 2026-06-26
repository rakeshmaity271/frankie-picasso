import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Heartbeat.module.css'

export default function Heartbeat({ line }) {
  const ref = useRef(null)
  useScrollReveal(ref, { animation: 'fade-in' })

  return (
    <div
      className={styles.heartbeat}
      ref={ref}
      role="presentation"
    >
      <span className={styles.dot} aria-hidden="true" />
      <p className={styles.line}>{line}</p>
      <span className={styles.dot} aria-hidden="true" />
    </div>
  )
}
