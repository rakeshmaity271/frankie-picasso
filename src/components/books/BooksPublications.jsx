import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

export default function BooksPublications() {
  const books = content.acts?.[4]?.books ?? { featured: null, other: [] }
  // Merge featured + other into a single flat list for a curated grid
  const allBooks = [
    books.featured ? { title: books.featured.title, cover: books.featured.cover, description: books.featured.description, quote: books.featured.quote, featured: true } : null,
    ...books.other.map(b => ({ title: b.title, cover: b.cover, description: b.description, quote: b.pullQuote }))
  ].filter(Boolean)

  return (
    <section id="books" className="relative py-10 md:py-16 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FFF0CC' }}>
      <div className="max-w-[900px] mx-auto">
        {/* Section header */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] mb-4">Books</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-2 md:mb-4">Published Works</h2>
          <p className="font-serif italic text-base md:text-lg text-[#2C2C2C]/60 mb-8 md:mb-12">
            Six published books including international bestsellers. Each one is a conversation with the reader.
          </p>
        </ScrollReveal>

        {/* Curated book grid — compact, consistent */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {allBooks.map((book, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="group">
                {/* Book cover */}
                <div
                  className="relative rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(44,44,44,0.12)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(44,44,44,0.2)] group-hover:-translate-y-1 mb-3"
                  style={{ aspectRatio: '2/3' }}
                >
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={`${book.title} book cover`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-3 text-center"
                      style={{ backgroundColor: '#FDF5ED', border: '1px solid rgba(236,146,2,0.15)' }}
                    >
                      <h4 className="font-serif text-sm md:text-base font-light text-[#2C2C2C] leading-snug">{book.title}</h4>
                    </div>
                  )}
                  {/* Spine shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/8 to-transparent pointer-events-none" />
                  {/* Hover quote overlay */}
                  {book.quote && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                      <p className="font-serif italic text-xs text-white/90 leading-snug line-clamp-4">&ldquo;{book.quote}&rdquo;</p>
                    </div>
                  )}
                </div>
                {/* Title */}
                <h3 className="font-serif text-sm md:text-base font-light text-[#2C2C2C] leading-snug">{book.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
