import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Heartbeat — cinematic inter-act transition.
 * Gradient morph between acts + Frankieism text reveal.
 */
export default function Heartbeat({ line, fromColor = '#FFF8F0', toColor = '#FFDAC5', accentColor = '#FFB400' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      className="relative py-3 md:py-5 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
      }}
    >
      {/* Breathing orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* Frankieism text */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Accent line */}
        <motion.div
          className="mb-3 h-[1.5px] rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 48, opacity: 0.6 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="font-serif italic text-center text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed tracking-wide"
          style={{ color: 'var(--text-primary, #2C2C2C)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 0.75, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.p>

        {/* Small dot */}
        <motion.div
          className="mt-3 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: accentColor, opacity: 0.4 }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </div>
    </section>
  )
}
