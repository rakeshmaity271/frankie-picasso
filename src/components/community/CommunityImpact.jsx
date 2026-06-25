import { useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useParallax } from '../../hooks/useParallax'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './CommunityImpact.module.css'

export default function CommunityImpact() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const quoteRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })
  useScrollReveal(quoteRef, { animation: 'fade-in' })
  useParallax(imageRef, { speed: 0.2, direction: 'up' })

  useGSAP(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.initiative-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: 60,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: sectionRef })

  const data = content.community

  return (
    <section id="community" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Community Impact">
      <div className="container">
        <SectionHeading title="Community Impact" subtitle={data.intro} />

        <div className={styles.layout}>
          <div className={styles.imageCol} ref={imageRef}>
            <div className={styles.imageWrap}>
              <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="400" height="500" rx="8" fill="url(#cg)" />
                <circle cx="200" cy="200" r="60" fill="rgba(197,165,90,0.15)" />
                <circle cx="140" cy="320" r="40" fill="rgba(197,165,90,0.1)" />
                <circle cx="280" cy="350" r="35" fill="rgba(197,165,90,0.1)" />
                <defs><linearGradient id="cg" x1="0" y1="0" x2="400" y2="500"><stop offset="0%" stopColor="#3D1C3E" /><stop offset="100%" stopColor="#722F37" /></linearGradient></defs>
              </svg>
            </div>
          </div>

          <div className={styles.initiatives}>
            {data.initiatives.map((item, i) => (
              <article key={i} className={`initiative-card ${styles.initiativeCard}`}>
                <h3 className={styles.initiativeName}>{item.name}</h3>
                <p className={styles.initiativeRole}>{item.role}</p>
                <p className={styles.initiativeDesc}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div ref={quoteRef} className={styles.quoteBand}>
          <blockquote>
            <p>&ldquo;{data.quote}&rdquo;</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
