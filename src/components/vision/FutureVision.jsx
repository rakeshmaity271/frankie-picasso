import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './FutureVision.module.css'

export default function FutureVision() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const act = content.acts[5] // still-becoming

  return (
    <div className={styles.content} ref={sectionRef}>
      <div className={`reveal-item ${styles.mission}`}>
        <p className={styles.missionText}>{act.mission}</p>
      </div>

      <div className={styles.projects}>
        {act.currentProjects.map((project, i) => (
          <article key={i} className={`reveal-item ${styles.projectCard}`}>
            <div className={styles.projectAccent} aria-hidden="true" />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDesc}>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
