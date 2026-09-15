import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const EASE = [0.22, 1, 0.36, 1]

export default function BooksPublications() {
  const books = content.acts?.[4]?.books ?? { featured: { title: '', description: '', quote: '' }, other: [] }
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section id="books" className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FFF0CC' }}>
      <div className="max-w-[1000px] mx-auto">
        {/* Section header */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] mb-4">Books</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-6 md:mb-10">Published Works</h2>
        </ScrollReveal>

        {/* Featured book — large card with cover */}
        <ScrollReveal variant="scaleUp" duration={1}>
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 mb-8 md:mb-12"
            ref={containerRef}
          >
            {/* Cover image */}
            {books.featured.cover && (
              <motion.div
                className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <div className="relative group">
                  <div
                    className="rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ aspectRatio: '2/3' }}
                  >
                    <img
                      src={books.featured.cover}
                      alt={`${books.featured.title} book cover`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative spine shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/10 to-transparent rounded-l-lg pointer-events-none" />
                </div>
              </motion.div>
            )}

            {/* Book details */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#EE5802] mb-3">International Bestseller</p>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4 leading-tight">{books.featured.title}</h3>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-6">{books.featured.description}</p>
              <blockquote className="relative pl-4 border-l-2 border-[#EE5802]/30">
                <p className="font-serif italic text-lg md:text-xl text-[#2C2C2C]/70 leading-relaxed">&ldquo;{books.featured.quote}&rdquo;</p>
              </blockquote>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Other books — 3D flip cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {books.other.map((book, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
              <div className="book-flip" style={{ aspectRatio: '2/3' }}>
                <div className="book-flip-inner">
                  {/* Front face — cover or title card */}
                  <div className="book-flip-front shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                    {book.cover ? (
                      <>
                        <img
                          src={book.cover}
                          alt={`${book.title} book cover`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center"
                        style={{ backgroundColor: '#FDF5ED', border: '1px solid rgba(236,146,2,0.15)' }}
                      >
                        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#EE5802] mb-2">{book.year}</p>
                        <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] leading-snug">{book.title}</h4>
                      </div>
                    )}
                    {/* Hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-700 pointer-events-none" />
                  </div>

                  {/* Back face — pull quote */}
                  <div className="book-flip-back flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#2C2C2C' }}>
                    <div className="mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-30">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="white"/>
                      </svg>
                    </div>
                    <p className="font-serif italic text-sm md:text-base text-white/90 leading-relaxed mb-4">
                      &ldquo;{book.pullQuote}&rdquo;
                    </p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">{book.title}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
