import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Frankieism — the recurring visual signature quote at the end of each Act.
 * A stylized italic quote with an accent line and breathing animation.
 *
 * Optional props (defaults keep all existing usages byte-compatible):
 * - label:  small uppercase tracked sans label rendered above the quote
 * - compact: slightly smaller sizing for preview/editorial contexts
 */
export default function Frankieism({ text, accentColor = '#FFB400', textColor, className = '', label, compact = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div
      ref={ref}
      className={`py-2 md:py-4 flex flex-col items-center justify-center px-6 ${className}`}
    >
      {/* Optional label above the quote */}
      {label && (
        <p
          className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-center mb-2"
          style={{ color: accentColor, opacity: 0.5 }}
        >
          {label}
        </p>
      )}

      {/* Accent line */}
      <motion.div
        className="mb-3 h-[2px] rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: compact ? 44 : 60, opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Quote text */}
      <motion.p
        className={`font-serif italic text-center max-w-2xl leading-relaxed tracking-wide ${
          compact ? 'text-lg md:text-xl lg:text-2xl' : 'text-xl md:text-2xl lg:text-3xl'
        }`}
        style={{ color: textColor || 'var(--text-primary, #2C2C2C)', opacity: 0.85 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.p>

      {/* Small decorative dot */}
      <motion.div
        className={`mt-3 rounded-full ${compact ? 'w-1.5 h-1.5' : 'w-2 h-2'}`}
        style={{ backgroundColor: accentColor, opacity: 0.5 }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </div>
  )
}
