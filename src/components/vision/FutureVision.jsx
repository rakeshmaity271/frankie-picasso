import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './FutureVision.module.css'

export default function FutureVision() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const data = content.vision

  return (
    <section id="vision" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Future Vision">
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }} />
        ))}
      </div>

      <div className="container">
        <SectionHeading title="Future Vision" subtitle={data.intro} light />

        <div className={`reveal-item ${styles.mission}`}>
          <p className={styles.missionText}>{data.mission}</p>
        </div>

        <div className={styles.projects}>
          {data.currentProjects.map((project, i) => (
            <article key={i} className={`reveal-item ${styles.projectCard}`}>
              <div className={styles.projectAccent} aria-hidden="true" />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
