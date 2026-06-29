import { useRef, useState, useCallback } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './BooksPublications.module.css'

export default function BooksPublications({ standalone = false }) {
  const sectionRef = useRef(null)
  const bookRef = useRef(null)
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  useGSAP(() => {
    if (!bookRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.from(bookRef.current, {
      rotateY: -15,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bookRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }, { scope: bookRef })

  const act = content.acts[3] // creating
  const data = act.books
  const books = data.other
  const total = books.length

  const goTo = useCallback((index) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  if (standalone) {
    return (
      <section id="books" className={styles.standaloneSection} aria-label="Books">
        <div className={styles.standaloneHeader}>
          <span className={styles.standaloneLabel}>Published Works</span>
          <h2 className={styles.standaloneTitle}>Books</h2>
          <p className={styles.standaloneSubtitle}>Stories that became international bestsellers.</p>
        </div>
        <div className={styles.content} ref={sectionRef}>
          {renderBooks()}
        </div>
      </section>
    )
  }

  return (
    <div className={styles.content} ref={sectionRef}>
      {renderBooks()}
    </div>
  )

  function renderBooks() {
    return (
      <>
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.featured} ref={bookRef}>
          <div className={styles.bookCover}>
            <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="300" height="420" rx="4" fill="url(#bg)" />
              <rect x="20" y="20" width="260" height="380" rx="2" stroke="rgba(197,165,90,0.3)" strokeWidth="1" fill="none" />
              <text x="150" y="180" textAnchor="middle" fill="rgba(197,165,90,0.6)" fontFamily="Georgia, serif" fontSize="18" fontWeight="600">MIDLIFE</text>
              <text x="150" y="210" textAnchor="middle" fill="rgba(197,165,90,0.6)" fontFamily="Georgia, serif" fontSize="18" fontWeight="600">MOJO</text>
              <line x1="100" y1="230" x2="200" y2="230" stroke="rgba(197,165,90,0.3)" />
              <text x="150" y="260" textAnchor="middle" fill="rgba(197,165,90,0.4)" fontFamily="system-ui" fontSize="12">Frankie Picasso</text>
              <defs><linearGradient id="bg" x1="0" y1="0" x2="300" y2="420"><stop offset="0%" stopColor="#3D1C3E" /><stop offset="100%" stopColor="#722F37" /></linearGradient></defs>
            </svg>
          </div>
          <div className={styles.bookInfo}>
            <span className={styles.featuredLabel}>Featured Book</span>
            <h3 className={styles.bookTitle}>{data.featured.title}</h3>
            <p className={styles.bookDesc}>{data.featured.description}</p>
            <blockquote className={styles.bookQuote}>
              <p>&ldquo;{data.featured.quote}&rdquo;</p>
            </blockquote>
          </div>
        </div>

        <div className={styles.carousel}>
          <button
            className={styles.carouselBtn}
            onClick={prev}
            aria-label="Previous book"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              ref={trackRef}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {books.map((book, i) => (
                <article key={i} className={styles.carouselSlide}>
                  <div className={styles.otherCard}>
                    <span className={styles.bookYear}>{book.year}</span>
                    <h3 className={styles.otherTitle}>{book.title}</h3>
                    <p className={styles.otherDesc}>{book.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className={styles.carouselBtn}
            onClick={next}
            aria-label="Next book"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className={styles.carouselDots}>
          {books.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to book ${i + 1}`}
            />
          ))}
        </div>
      </>
    )
  }
}
