import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

export default function BooksPublications() {
  const books = content.acts?.[4]?.books ?? { featured: null, other: [] }
  const [activeBook, setActiveBook] = useState(null)

  // Merge featured + other into a single flat list for a curated collection
  const allBooks = [
    books.featured
      ? {
          title: books.featured.title,
          cover: books.featured.cover,
          description: books.featured.description,
          quote: books.featured.quote,
          badge: 'International Bestseller',
          featured: true,
        }
      : null,
    ...books.other.map((b) => ({
      title: b.title,
      cover: b.cover,
      description: b.description,
      quote: b.pullQuote,
      badge: b.year || 'Published Work',
    })),
  ].filter(Boolean)

  return (
    <section
      id="books"
      className="relative py-12 md:py-18 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF6E5 0%, #FFF0D4 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-10 md:mb-14">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5802] mb-3">
              Published Works
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#2C2C2C] leading-[1.12] mb-3">
              Conversations on the Page
            </h2>
            <p className="font-serif italic text-base md:text-lg text-[#2C2C2C]/75 leading-relaxed">
              International bestsellers and empowerment guides. Each book is an intimate conversation with the reader.
            </p>
          </ScrollReveal>
        </div>

        {/* Curated Bookshelf Arrangement — equal heights, smaller footprint, zero horizontal scroll */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-end justify-center max-w-[940px] mx-auto">
            {allBooks.map((book, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
                <div
                  className="group flex flex-col items-center text-center cursor-pointer"
                  onClick={() => setActiveBook(activeBook?.title === book.title ? null : book)}
                >
                  {/* Book Card Container with consistent dimensions */}
                  <div
                    className="relative w-[130px] sm:w-[145px] md:w-[155px] h-[190px] sm:h-[210px] md:h-[225px] rounded-r-[4px] rounded-l-[2px] overflow-hidden shadow-[0_8px_20px_rgba(44,30,20,0.14)] group-hover:shadow-[0_16px_36px_rgba(44,30,20,0.22)] group-hover:-translate-y-1.5 transition-all duration-400 bg-[#FDF5ED]"
                    style={{ aspectRatio: '2/3' }}
                  >
                    {book.cover ? (
                      <img
                        src={book.cover}
                        alt={`${book.title} book cover`}
                        className="w-full h-full object-contain bg-[#FDF5ED]"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center border border-[#EE5802]/20">
                        <h4 className="font-serif text-xs md:text-sm font-medium text-[#2C2C2C] leading-snug">
                          {book.title}
                        </h4>
                      </div>
                    )}

                    {/* Realistic 3D Book Spine Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/25 via-black/8 to-transparent pointer-events-none" />

                    {/* Right-edge page trim effect */}
                    <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-white/40 pointer-events-none" />

                    {/* Hover Pull-Quote Overlay */}
                    {book.quote && (
                      <div className="absolute inset-0 bg-[#1C1917]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                        <p className="font-serif italic text-[11px] md:text-xs text-[#FAF3EA] leading-snug line-clamp-5">
                          &ldquo;{book.quote}&rdquo;
                        </p>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-[#FFB400] mt-2 font-semibold">
                          Click to read note
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Book Details below shelf */}
                  <div className="mt-3 w-full max-w-[155px]">
                    <span className="inline-block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#C24E1A] mb-1">
                      {book.badge}
                    </span>
                    <h3 className="font-serif text-sm md:text-[15px] font-normal text-[#2C2C2C] leading-tight group-hover:text-[#EE5802] transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Editorial Bookshelf Line Ledge */}
          <div className="mt-4 max-w-[960px] mx-auto">
            <div className="h-[5px] bg-gradient-to-r from-[#DEB887]/30 via-[#B3783E]/50 to-[#DEB887]/30 rounded-full shadow-[0_4px_10px_rgba(44,30,20,0.12)]" />
          </div>

          {/* Active Book Detail Modal / Drawer if clicked */}
          <AnimatePresence>
            {activeBook && (
              <motion.div
                className="mt-8 p-5 md:p-6 rounded-xl bg-[#FAF6F0] border border-[#E8DCC8] shadow-[0_10px_30px_rgba(44,30,20,0.08)] max-w-[720px] mx-auto text-left relative"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setActiveBook(null)}
                  className="absolute top-4 right-4 text-xs font-sans uppercase tracking-wider text-[#7A6545] hover:text-[#2C2C2C] cursor-pointer"
                  aria-label="Close book details"
                >
                  ✕ Close
                </button>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#EE5802] font-semibold block mb-1">
                  {activeBook.badge}
                </span>
                <h4 className="font-serif text-xl md:text-2xl font-normal text-[#2C2C2C] mb-2">
                  {activeBook.title}
                </h4>
                {activeBook.description && (
                  <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed mb-3">
                    {activeBook.description}
                  </p>
                )}
                {activeBook.quote && (
                  <p className="font-serif italic text-sm md:text-base text-[#7A6545] border-l-2 border-[#FFB400] pl-3 py-0.5">
                    &ldquo;{activeBook.quote}&rdquo;
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
