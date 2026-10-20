import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <footer
      ref={ref}
      className="relative py-12 md:py-16 px-6 md:px-10 lg:px-16 border-t border-white/[0.08]"
      style={{ backgroundColor: '#12100E' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Large serif closing statement */}
        <motion.p
          className="font-serif italic font-light text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] text-[#FAF3EA] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.95, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;Visitors should leave here inspired, not impressed.&rdquo;
        </motion.p>

        {/* Accent line */}
        <motion.div
          className="mx-auto mb-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFB400]/60 to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: '180px' } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Logo / name */}
        <motion.p
          className="font-serif text-xl text-[#FFFFFF] font-medium tracking-wide mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Frankie Picasso
        </motion.p>

        <motion.p
          className="font-sans text-xs text-[#D4C8BC] tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.85 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Frankie Picasso. All rights reserved. A life in eight acts.
        </motion.p>
      </div>
    </footer>
  )
}
