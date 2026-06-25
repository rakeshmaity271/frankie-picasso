import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './Entrepreneurship.module.css'

export default function Entrepreneurship() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const data = content.entrepreneurship

  return (
    <section id="entrepreneurship" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Entrepreneurship">
      <div className="container">
        <SectionHeading title="Entrepreneurship" subtitle={data.intro} />

        <div className={styles.grid}>
          {data.ventures.map((venture, i) => (
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
      </div>
    </section>
  )
}
