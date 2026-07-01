import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TextReveal from '../common/TextReveal'

/**
 * ActSection — wraps each Act with a title reveal animation.
 * Uses the Act's color for background.
 */
export default function ActSection({ act, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id={act.id}
      ref={ref}
      className="relative"
      style={{ backgroundColor: act.color }}
    >
      {/* Act title header */}
      <div className="pt-20 md:pt-28 lg:pt-36 pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-[800px] mx-auto">
          {/* Act number */}
          <motion.p
            className="font-sans text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--text-primary, #2C2C2C)', opacity: 0.4 }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Act {act.number}
          </motion.p>

          {/* Act title */}
          <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[#2C2C2C] mb-4">
            <TextReveal
              text={act.title}
              mode="word"
              staggerDelay={0.08}
              duration={0.7}
            />
          </h2>

          {/* Tagline */}
          <motion.p
            className="font-serif italic text-lg md:text-xl text-[#2C2C2C]/60"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {act.tagline}
          </motion.p>
        </div>
      </div>

      {/* Act content */}
      {children}
    </section>
  )
}
