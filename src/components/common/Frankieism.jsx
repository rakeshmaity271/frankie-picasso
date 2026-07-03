import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Frankieism — the recurring visual signature quote at the end of each Act.
 * A stylized italic quote with an accent line and breathing animation.
 */
export default function Frankieism({ text, accentColor = '#FFB400', className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div
      ref={ref}
      className={`py-8 md:py-12 flex flex-col items-center justify-center px-6 ${className}`}
    >
      {/* Accent line */}
      <motion.div
        className="mb-5 h-[2px] rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 60, opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Quote text */}
      <motion.p
        className="font-serif italic text-center text-xl md:text-2xl lg:text-3xl max-w-2xl leading-relaxed tracking-wide"
        style={{ color: 'var(--text-primary, #2C2C2C)', opacity: 0.85 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.p>

      {/* Small decorative dot */}
      <motion.div
        className="mt-5 w-2 h-2 rounded-full"
        style={{ backgroundColor: accentColor, opacity: 0.5 }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </div>
  )
}
