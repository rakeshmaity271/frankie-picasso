import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMap } from '../../context/MapContext'
import { mapOfLife } from '../../data/content'

const lessons = mapOfLife.lessons

// 3x3 grid clip-path regions (row, col) → inset(top right bottom left)
const PIECE_CLIPS = [
  'inset(0% 66.67% 66.67% 0%)',   // top-left
  'inset(0% 33.33% 66.67% 33.33%)', // top-center
  'inset(0% 0% 66.67% 66.67%)',   // top-right
  'inset(33.33% 66.67% 33.33% 0%)', // mid-left
  'inset(33.33% 33.33% 33.33% 33.33%)', // center
  'inset(33.33% 0% 33.33% 66.67%)', // mid-right
  'inset(66.67% 66.67% 0% 0%)',   // bottom-left
  'inset(66.67% 33.33% 0% 33.33%)', // bottom-center
  'inset(66.67% 0% 0% 66.67%)',   // bottom-right
]

/**
 * PuzzleReveal — painting divided into 9 pieces, each unlocked with a lesson.
 * When all 9 are collected, triggers a full-screen reveal animation.
 * Also renders a compact preview inside the MapOfLife overlay.
 */
export default function PuzzleReveal() {
  const { unlockedLessons, isComplete, revealTriggered, triggerReveal, dismissReveal } = useMap()
  const [hasTriggered, setHasTriggered] = useState(false)

  // Auto-trigger the final reveal when all pieces are collected
  useEffect(() => {
    if (isComplete && !hasTriggered) {
      const timer = setTimeout(() => {
        triggerReveal()
        setHasTriggered(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, hasTriggered, triggerReveal])

  return (
    <>
      {/* Full-screen reveal overlay */}
      <AnimatePresence>
        {revealTriggered && (
          <motion.div
            className="fixed inset-0 z-[3000] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0d1b2a' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            role="dialog"
            aria-label="The Bigger Picture — painting reveal"
            aria-modal="true"
          >
            {/* Painting assembled */}
            <motion.div
              className="relative w-[80vw] max-w-[600px] aspect-square rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={mapOfLife.paintingSrc}
                alt="Frankie's painting — The Bigger Picture"
                className="w-full h-full object-cover"
              />
              {/* Golden border glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#FFB400]/40 pointer-events-none" />
            </motion.div>

            {/* Closing line */}
            <motion.p
              className="mt-8 px-6 font-serif italic text-lg md:text-2xl text-[#FFF8F0]/85 text-center max-w-[550px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2 }}
            >
              &ldquo;{mapOfLife.closingLine}&rdquo;
            </motion.p>

            {/* Title */}
            <motion.p
              className="mt-4 font-sans text-xs uppercase tracking-[0.4em] text-[#FFB400]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              The Bigger Picture
            </motion.p>

            {/* Dismiss button */}
            <motion.button
              onClick={dismissReveal}
              className="mt-8 px-6 py-2.5 rounded-full border border-[#FFB400]/40 text-[#FFB400] font-sans text-sm tracking-wide hover:bg-[#FFB400]/10 transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              Continue the Journey
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * PuzzlePreview — compact 3x3 puzzle grid shown inside the Map overlay.
 * Displays which pieces have been collected.
 */
export function PuzzlePreview() {
  const { unlockedLessons } = useMap()

  return (
    <div className="mt-6 flex flex-col items-center">
      <p className="mb-2 font-sans text-[0.6rem] uppercase tracking-[0.3em] text-[#FFF8F0]/40">
        The Bigger Picture
      </p>
      <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden border border-[#FFF8F0]/10">
        {PIECE_CLIPS.map((clip, i) => {
          const lesson = lessons[i]
          const unlocked = unlockedLessons.has(lesson.id)
          return (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                clipPath: clip,
                opacity: unlocked ? 1 : 0,
              }}
            >
              <img
                src={mapOfLife.paintingSrc}
                alt=""
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
          )
        })}
        {/* Dark background for empty pieces */}
        <div className="absolute inset-0 -z-10 bg-[#1a2744]" />
      </div>
    </div>
  )
}
