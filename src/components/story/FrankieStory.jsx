import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../../hooks/useGsap'
import { content } from '../../data/content'
import styles from './FrankieStory.module.css'

export default function FrankieStory() {
  const sectionRef = useRef(null)
  const openingRef = useRef(null)
  const narrativeRef = useRef(null)
  const dreamRef = useRef(null)
  const scrapbookRef = useRef(null)
  const timelineRef = useRef(null)
  const quoteRef = useRef(null)
  const frankieismRef = useRef(null)

  const act = content.acts[0]

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Opening line — slow, dramatic fade
    if (openingRef.current) {
      gsap.from(openingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: openingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Narrative text — word-by-word reveal
    if (narrativeRef.current) {
      const words = narrativeRef.current.querySelectorAll('.story-word')
      gsap.from(words, {
        opacity: 0,
        y: 20,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: narrativeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Narrative beat line
    const narrativeBeat = document.querySelector(`.${styles.narrativeBeat}`)
    if (narrativeBeat) {
      gsap.from(narrativeBeat, {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: narrativeBeat,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Dream lines — staggered, cinematic
    if (dreamRef.current) {
      const lines = dreamRef.current.querySelectorAll(`.${styles.dreamLine}`)
      lines.forEach((line, i) => {
        gsap.from(line, {
          opacity: 0,
          y: 60,
          duration: 1.3,
          delay: i * 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        })
      })
    }

    // Scrapbook items — playful stagger
    if (scrapbookRef.current) {
      const items = scrapbookRef.current.querySelectorAll(`.${styles.scrapItem}`)
      gsap.from(items, {
        opacity: 0,
        y: 40,
        rotate: () => gsap.utils.random(-3, 3),
        stagger: 0.15,
        duration: 0.9,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: scrapbookRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Timeline items
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`)
      gsap.from(items, {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Pull quote
    if (quoteRef.current) {
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.97,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Frankieism — signature flourish
    if (frankieismRef.current) {
      gsap.from(frankieismRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: frankieismRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    }
  }, { scope: sectionRef })

  // Split narrative text into words for animation
  const narrativeWords = act.philosophy.split(' ')

  return (
    <div className={styles.story} ref={sectionRef}>
      {/* Opening standalone line */}
      <div className={styles.openingBlock} ref={openingRef}>
        <p className={styles.openingLine}>{act.openingLine}</p>
      </div>

      {/* Father's story — word-by-word reveal */}
      <div className={styles.narrativeBlock} ref={narrativeRef}>
        <p className={styles.narrative}>
          {narrativeWords.map((word, i) => (
            <span key={i} className="story-word" style={{ display: 'inline-block', marginRight: '0.22em' }}>
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Narrative beat — standalone emphasis */}
      <div className={styles.narrativeBeatBlock}>
        <p className={styles.narrativeBeat}>{act.narrativeBeat}</p>
      </div>

      {/* Dream lines — visual breaths */}
      <div className={styles.dreamSection} ref={dreamRef}>
        {act.dreamLines.map((line, i) => (
          <p key={i} className={styles.dreamLine}>{line}</p>
        ))}
      </div>

      {/* Scrapbook — "Little Frankie wanted to be…" */}
      <div className={styles.scrapbookSection} ref={scrapbookRef}>
        <h3 className={styles.scrapTitle}>{act.scrapbook.title}</h3>
        <div className={styles.scrapGrid}>
          {act.scrapbook.items.map((item, i) => (
            <div key={i} className={styles.scrapItem}>
              <span className={styles.scrapText}>{item.text}</span>
              <span className={styles.scrapNote}>{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineLine} aria-hidden="true" />
        <ol className={styles.timelineList}>
          {act.timeline.map((item, i) => (
            <li key={i} className={styles.timelineItem}>
              <div className={styles.timelineNode} aria-hidden="true" />
              <time className={styles.year}>{item.year}</time>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineDesc}>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Pull quote */}
      <blockquote ref={quoteRef} className={styles.pullQuote}>
        <p>&ldquo;{act.pullQuote}&rdquo;</p>
      </blockquote>

      {/* Frankieism — visual signature */}
      <div className={styles.frankieism} ref={frankieismRef}>
        <div className={styles.frankieismDecor} aria-hidden="true">
          <span className={styles.frankieismLine} />
          <span className={styles.frankieismStar}>✦</span>
          <span className={styles.frankieismLine} />
        </div>
        <p className={styles.frankieismText}>&ldquo;{act.frankieism.text}&rdquo;</p>
        <span className={styles.frankieismSig}>{act.frankieism.signature}</span>
      </div>
    </div>
  )
}
