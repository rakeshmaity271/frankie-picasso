import { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './LegacyTimeline.module.css'

const categoryColors = {
  community: '#B87333',
  media: '#722F37',
  entrepreneurship: '#C5A55A',
  creativity: '#5C2D5E',
  awards: '#3D1C3E'
}

export default function LegacyTimeline() {
  const sectionRef = useRef(null)
  const horizontalRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useGSAP(() => {
    if (!horizontalRef.current || isMobile) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const container = horizontalRef.current
    const scrollableWidth = container.scrollWidth - container.clientWidth

    gsap.to(container, {
      x: -scrollableWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${scrollableWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    })

    const events = container.querySelectorAll('.legacy-event')
    events.forEach((event) => {
      gsap.from(event, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: event,
          start: 'left 80%',
          end: 'left 50%',
          containerAnimation: gsap.getById?.('legacy-scroll') || undefined,
          toggleActions: 'play none none none',
          horizontal: true
        }
      })
    })
  }, { scope: sectionRef, dependencies: [isMobile] })

  const data = content.legacy

  return (
    <section id="legacy" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Legacy Timeline">
      <div className="container">
        <SectionHeading number="09" title="Legacy Timeline" subtitle={data.intro} />

        <div className={styles.legend} aria-hidden="true">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <span key={cat} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: color }} />
              {cat}
            </span>
          ))}
        </div>
      </div>

      {isMobile ? (
        <div className={`container ${styles.verticalTimeline}`}>
          {data.events.map((event, i) => (
            <div key={i} className={`reveal-item ${styles.vEvent}`}>
              <div className={styles.vDot} style={{ background: categoryColors[event.category] || '#C5A55A' }} aria-hidden="true" />
              <time className={styles.vYear}>{event.year}</time>
              <h3 className={styles.vTitle}>{event.title}</h3>
              <p className={styles.vDesc}>{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.horizontalWrap} ref={horizontalRef}>
          <div className={styles.track}>
            <div className={styles.line} aria-hidden="true" />
            {data.events.map((event, i) => (
              <div key={i} className={`legacy-event ${styles.event}`}>
                <div className={styles.eventDot} style={{ background: categoryColors[event.category] || '#C5A55A' }} aria-hidden="true" />
                <time className={styles.eventYear}>{event.year}</time>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDesc}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
