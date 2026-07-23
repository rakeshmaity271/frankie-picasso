import { motion, AnimatePresence } from 'framer-motion'
import { useMap } from '../../context/MapContext'

/**
 * MapProgress — small fixed pill (bottom-right) showing lesson progress.
 * Appears after the first lesson is unlocked. Click opens the Map overlay.
 */
export default function MapProgress() {
  const { count, total, mapOpen, openMap } = useMap()

  return (
    <AnimatePresence>
      {count > 0 && !mapOpen && (
        <motion.button
          onClick={openMap}
          className="fixed bottom-5 right-5 z-[1500] flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0d1b2a]/90 backdrop-blur-md border border-[#FFB400]/25 shadow-lg cursor-pointer hover:border-[#FFB400]/50 transition-colors"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label={`Open The Map of a Life — ${count} of ${total} lessons discovered`}
        >
          {/* Tiny constellation icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="3" cy="12" r="1.2" fill="#FFB400" />
            <circle cx="7" cy="6" r="1.2" fill="#FFB400" />
            <circle cx="12" cy="9" r="1.2" fill="#FFB400" />
            <circle cx="14" cy="3" r="1" fill="#FFB400" opacity="0.5" />
            <line x1="3" y1="12" x2="7" y2="6" stroke="#FFB400" strokeWidth="0.5" opacity="0.5" />
            <line x1="7" y1="6" x2="12" y2="9" stroke="#FFB400" strokeWidth="0.5" opacity="0.5" />
            <line x1="12" y1="9" x2="14" y2="3" stroke="#FFB400" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <span className="font-sans text-xs text-[#FFF8F0]/80 tracking-wide">
            {count} / {total}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
