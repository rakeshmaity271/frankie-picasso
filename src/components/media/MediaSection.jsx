import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './MediaSection.module.css'

export default function MediaSection() {
  const sectionRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('.media-item')
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const data = content.media

  return (
    <section id="media" className={styles.section} aria-label="Media">
      <div className={styles.content} ref={sectionRef}>
        <div className={styles.header}>
          <span className={styles.label}>Broadcasting & Press</span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.shows}>
          {data.shows.map((show, i) => (
            <article key={i} className={`media-item ${styles.showCard}`}>
              <span className={styles.showType}>{show.type === 'radio' ? 'Radio' : 'Podcast'}</span>
              <h3 className={styles.showTitle}>{show.title}</h3>
              <p className={styles.showDesc}>{show.description}</p>
              <span className={styles.showYears}>{show.years}</span>
            </article>
          ))}
        </div>

        <div className={styles.press}>
          <h3 className={styles.pressLabel}>Recognition</h3>
          <div className={styles.pressList}>
            {data.press.map((item, i) => (
              <div key={i} className={`media-item ${styles.pressItem}`}>
                <span className={styles.pressYear}>{item.year}</span>
                <div>
                  <h4 className={styles.pressTitle}>{item.title}</h4>
                  <p className={styles.pressOutlet}>{item.outlet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
