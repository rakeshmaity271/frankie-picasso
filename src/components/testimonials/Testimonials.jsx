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
        className="relative rounded-2xl p-6 md:p-7 transition-all duration-400 hover:-translate-y-1 group border border-[#3D322A]/60 shadow-[0_8px_28px_rgba(44,30,20,0.12)] hover:shadow-[0_16px_36px_rgba(44,30,20,0.2)] overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #241F1C 0%, #1A1614 100%)' }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: item.accent }}
        />

        {/* Decorative quote mark */}
        <div
          className="absolute top-4 right-5 font-serif leading-none pointer-events-none select-none"
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: item.accent, opacity: 0.18 }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Category badge */}
        {item.category && (
          <span
            className="relative z-10 inline-block font-sans text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-0.5 rounded-full mb-3"
            style={{
              backgroundColor: `${item.accent}20`,
              color: item.accent,
            }}
          >
            {item.category}
          </span>
        )}

        {/* Quote */}
        <blockquote className="relative z-10 mb-5">
          <p
            className="font-serif italic text-[#FAF3EA] leading-relaxed font-normal"
            style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)' }}
          >
            &ldquo;{item.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3.5 relative z-10 pt-2 border-t border-white/[0.08]">
          {/* Initial avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-sans text-sm font-semibold shadow-sm"
            style={{ backgroundColor: item.accent }}
          >
            {item.initials}
          </div>
          <div>
            <p className="font-serif text-[#FFFFFF] text-base font-normal leading-tight">{item.name}</p>
            <p className="font-sans text-[#D4C8BC] text-xs leading-tight mt-0.5">{item.role}</p>
          </div>
        </div>
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
      className="relative py-14 md:py-22 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAF3EA 0%, #F5EDE1 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 md:mb-16">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5802] mb-3">
              Voices Along The Journey
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#2C2C2C] leading-[1.12] mb-4">
              What Others Have Seen
            </h2>
            <p className="font-serif italic text-base md:text-xl text-[#2C2C2C]/75 leading-relaxed">
              &ldquo;{data.subtitle}&rdquo;
            </p>
          </ScrollReveal>
        </div>

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
