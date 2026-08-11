import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './MediaHub.module.css'

export default function MediaHub() {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('all')
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const act = content.acts?.[3] // amplifying (Act IV)
  const filters = ['all', 'radio', 'podcast', 'interviews', 'press']

  const allItems = [
    ...(act?.shows || []).map((s) => ({ ...s, category: s.type })),
    ...(act?.interviews || []).map((i) => ({ ...i, category: 'interviews', description: i.outlet })),
    ...(act?.press || []).map((p) => ({ ...p, category: 'press', description: p.outlet }))
  ]

  const filtered = filter === 'all' ? allItems : allItems.filter((item) => item.category === filter)

  return (
    <div className={styles.content} ref={sectionRef}>
      <div className={styles.filters} role="tablist" aria-label="Filter media">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.grid} role="tabpanel">
        {filtered.map((item, i) => (
          <article key={`${item.title}-${i}`} className={styles.card}>
            <div className={styles.cardImage}>
              <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="400" height="220" fill="url(#mg)" />
                <circle cx="200" cy="110" r="30" fill="rgba(197,165,90,0.2)" stroke="rgba(197,165,90,0.4)" strokeWidth="2" />
                <polygon points="192,95 192,125 215,110" fill="rgba(197,165,90,0.4)" />
                <defs><linearGradient id="mg" x1="0" y1="0" x2="400" y2="220"><stop offset="0%" stopColor="#2C2C2C" /><stop offset="100%" stopColor="#3D1C3E" /></linearGradient></defs>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              {(item.years || item.year) && <p className={styles.cardMeta}>{item.years || item.year}</p>}
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
