import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './MediaHub.module.css'

export default function MediaHub() {
  const sectionRef = useRef(null)
  const [filter, setFilter] = useState('all')
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const data = content.media
  const filters = ['all', 'radio', 'podcast', 'interviews', 'press']

  const allItems = [
    ...data.shows.map((s) => ({ ...s, category: s.type })),
    ...data.interviews.map((i) => ({ ...i, category: 'interviews', description: i.outlet })),
    ...data.press.map((p) => ({ ...p, category: 'press', description: p.outlet }))
  ]

  const filtered = filter === 'all' ? allItems : allItems.filter((item) => item.category === filter)

  return (
    <section id="media" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Media Hub">
      <div className="container">
        <SectionHeading title="Media Hub" subtitle={data.intro} />

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
      </div>
    </section>
  )
}
