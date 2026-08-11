import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

export default function BooksPublications() {
  const books = content.acts?.[4]?.books ?? { featured: { title: '', description: '', quote: '' }, other: [] }
  return (
    <section id="books" className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FFF0CC' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] mb-4">Books</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-6 md:mb-10">Published Works</h2>
        </ScrollReveal>

        {/* Featured book */}
        <ScrollReveal variant="scaleUp" duration={1}>
          <div className="p-6 md:p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 mb-6 md:mb-8 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#EE5802] mb-4">International Bestseller</p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-4">{books.featured.title}</h3>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] max-w-[600px] mx-auto mb-6 text-center">{books.featured.description}</p>
            <p className="font-serif italic text-lg md:text-xl text-[#2C2C2C]/60">"{books.featured.quote}"</p>
          </div>
        </ScrollReveal>

        {/* Other books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {books.other.map((book, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-5 md:p-6 rounded-xl bg-white/30 border border-white/40 hover:bg-white/50 transition-all duration-500">
                <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] mb-1">{book.title}</h4>
                <p className="font-sans text-xs text-[#EE5802] mb-2">{book.year}</p>
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{book.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
