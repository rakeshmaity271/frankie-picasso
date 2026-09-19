import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const EASE = [0.22, 1, 0.36, 1]

function TestimonialCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="break-inside-avoid mb-5 md:mb-6"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: Math.min(index * 0.08, 0.3), ease: EASE }}
    >
      <div
        className="relative rounded-xl p-6 md:p-7 transition-transform duration-500 hover:-translate-y-1 group"
        style={{ backgroundColor: '#2C2C2C' }}
      >
        {/* Decorative quote mark */}
        <div
          className="absolute top-4 right-5 font-serif leading-none pointer-events-none select-none"
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: item.accent, opacity: 0.15 }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Category badge */}
        {item.category && (
          <p
            className="relative z-10 font-sans text-[10px] uppercase tracking-[0.15em] mb-3"
            style={{ color: item.accent }}
          >
            {item.category}
          </p>
        )}

        {/* Quote */}
        <blockquote className="relative z-10 mb-5">
          <p
            className="font-serif italic text-white/90 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
          >
            &ldquo;{item.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 relative z-10">
          {/* Initial avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-sans text-sm font-semibold"
            style={{ backgroundColor: item.accent }}
          >
            {item.initials}
          </div>
          <div>
            <p className="font-serif text-white text-sm font-medium leading-tight">{item.name}</p>
            <p className="font-sans text-white/50 text-xs leading-tight mt-0.5">{item.role}</p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: item.accent }}
        />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const data = content.testimonials
  if (!data?.items?.length) return null

  return (
    <section
      id="voices"
      className="relative py-10 md:py-16 px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: '#FDF5ED' }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Section header */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] mb-4">
            {data.title}
          </p>
          <h2
            className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-3"
          >
            {data.title}
          </h2>
          <p className="font-sans text-base md:text-lg text-[#4A4A4A] max-w-[600px] mb-10 md:mb-14">
            {data.subtitle}
          </p>
        </ScrollReveal>

        {/* Masonry grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6"
          style={{ columnFill: 'balance' }}
        >
          {data.items.map((item, i) => (
            <TestimonialCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
