import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <footer
      ref={ref}
      className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: '#12121f' }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        {/* Large serif closing statement */}
        <motion.p
          className="font-serif font-light text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.3] text-[#FFF8F0]/50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Visitors should leave here inspired, not impressed.
        </motion.p>

        {/* Accent line */}
        <motion.div
          className="mx-auto mb-6 h-[1px] bg-gradient-to-r from-transparent via-[#FFB400]/30 to-transparent"
          initial={{ width: 0 }}
          animate={isInView ? { width: '200px' } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Logo / name */}
        <motion.p
          className="font-serif text-lg text-[#FFF8F0]/55 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.55 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Frankie Picasso
        </motion.p>

        <motion.p
          className="font-sans text-xs text-[#FFF8F0]/45"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.45 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} All rights reserved. A life in six acts.
        </motion.p>
      </div>
    </footer>
  )
}
