import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SiteLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#FFF8F0' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            {/* Logo text */}
            <motion.p
              className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Frankie Picasso
            </motion.p>

            {/* Loading line */}
            <motion.div
              className="mx-auto h-[2px] bg-[#FFB400] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Subtle text */}
            <motion.p
              className="font-sans text-xs tracking-[0.2em] uppercase text-[#4A4A4A]/30 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A life in six acts
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
