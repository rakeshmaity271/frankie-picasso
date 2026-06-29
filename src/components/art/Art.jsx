import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './Art.module.css'

export default function Art() {
  const sectionRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.medium-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const data = content.art

  return (
    <section id="art" className={styles.section} aria-label="Art">
      <div className={styles.content} ref={sectionRef}>
        <div className={styles.header}>
          <span className={styles.label}>Creative Expression</span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <p className={styles.intro}>{data.intro}</p>

        <div className={styles.mediums}>
          {data.mediums.map((medium, i) => (
            <article key={i} className={`medium-card ${styles.mediumCard}`}>
              <div className={styles.mediumHeader}>
                <h3 className={styles.mediumTitle}>{medium.title}</h3>
                <span className={styles.mediumStyle}>{medium.style}</span>
              </div>
              <p className={styles.mediumDesc}>{medium.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.gallery}>
          {data.gallery.map((item, i) => (
            <div key={i} className={`reveal-item ${styles.galleryItem}`}>
              <div className={styles.galleryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <h4 className={styles.galleryTitle}>{item.title}</h4>
              <p className={styles.galleryDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
