import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './FrankieStory.module.css'

export default function FrankieStory() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const quoteRef = useRef(null)

  useScrollReveal(sectionRef, { animation: 'fade-up' })
  useScrollReveal(quoteRef, { animation: 'fade-in' })

  useGSAP(() => {
    if (!timelineRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const line = timelineRef.current.querySelector('.timeline-line')
    if (line) {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: 1
        }
      })
    }

    const nodes = timelineRef.current.querySelectorAll('.timeline-node')
    nodes.forEach((node) => {
      gsap.from(node, {
        scale: 0,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: node,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, { scope: timelineRef })

  const story = content.story

  return (
    <section id="story" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="The Frankie Story">
      <div className="container">
        <SectionHeading title="The Frankie Story" subtitle={story.intro} />

        <div className={styles.content}>
          <div className={styles.narrative}>
            <p className={styles.philosophy}>{story.philosophy}</p>
          </div>

          <div className={styles.timeline} ref={timelineRef}>
            <div className="timeline-line" aria-hidden="true" />
            <ol className={styles.timelineList}>
              {story.timeline.map((item, i) => (
                <li key={i} className={`reveal-item ${styles.timelineItem}`}>
                  <div className="timeline-node" aria-hidden="true" />
                  <time className={styles.year}>{item.year}</time>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <blockquote ref={quoteRef} className={styles.pullQuote}>
          <p>&ldquo;{story.pullQuote}&rdquo;</p>
        </blockquote>
      </div>
    </section>
  )
}
