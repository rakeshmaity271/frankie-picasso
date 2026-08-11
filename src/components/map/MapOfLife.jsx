import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMap } from '../../context/MapContext'
import { mapOfLife } from '../../data/content'
import { PuzzlePreview } from './PuzzleReveal'

/**
 * MapOfLife — full-screen constellation overlay.
 * 9 stars in a dark navy sky; unlocked stars glow gold and connect with lines.
 * Locked stars are dim. Click a star to see its lesson details.
 */
export default function MapOfLife() {
  const lessons = mapOfLife?.lessons || []
  const { mapOpen, closeMap, unlockedLessons, count, total } = useMap()
  const [selected, setSelected] = useState(null)
  const overlayRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    if (!mapOpen) return
    const handler = (e) => { if (e.key === 'Escape') closeMap() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [mapOpen, closeMap])

  // Focus trap: focus overlay when opened
  useEffect(() => {
    if (mapOpen && overlayRef.current) {
      overlayRef.current.focus()
    }
  }, [mapOpen])

  // Build connecting lines between consecutive unlocked stars
  const unlockedOrdered = lessons.filter((l) => unlockedLessons.has(l.id))
  const lines = []
  for (let i = 1; i < unlockedOrdered.length; i++) {
    const a = unlockedOrdered[i - 1]
    const b = unlockedOrdered[i]
    lines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key: `${a.id}-${b.id}` })
  }

  return (
    <AnimatePresence>
      {mapOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0d1b2a' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="dialog"
          aria-label={mapOfLife.title}
          aria-modal="true"
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            onClick={closeMap}
            className="absolute top-5 right-6 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Close map"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>

          {/* Title */}
          <motion.div
            className="absolute top-6 left-0 right-0 text-center px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="font-serif font-light text-2xl md:text-3xl text-[#FFF8F0] tracking-wide">
              {mapOfLife.title}
            </h2>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.3em] text-[#FFB400]/70">
              {count} / {total} lessons discovered
            </p>
          </motion.div>

          {/* Constellation SVG */}
          <div className="w-full max-w-[800px] px-6">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-auto"
              style={{ maxHeight: '46vh' }}
              aria-hidden="true"
            >
              {/* Connecting lines */}
              {lines.map((line) => (
                <motion.line
                  key={line.key}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#FFB400"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              ))}

              {/* Stars */}
              {lessons.map((lesson, i) => {
                const unlocked = unlockedLessons.has(lesson.id)
                const isSelected = selected === lesson.id
                return (
                  <g
                    key={lesson.id}
                    onClick={() => setSelected(isSelected ? null : lesson.id)}
                    className="cursor-pointer"
                    role="button"
                    aria-label={unlocked ? `${lesson.word}: ${lesson.meaning}` : 'Locked lesson'}
                  >
                    {/* Glow halo for unlocked */}
                    {unlocked && (
                      <motion.circle
                        cx={lesson.x}
                        cy={lesson.y}
                        r={isSelected ? 4 : 3}
                        fill="rgba(255,180,0,0.12)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    {/* Star dot */}
                    <motion.circle
                      cx={lesson.x}
                      cy={lesson.y}
                      r={unlocked ? (isSelected ? 2 : 1.5) : 1}
                      fill={unlocked ? '#FFB400' : '#4a5568'}
                      stroke={unlocked ? '#FFD700' : 'transparent'}
                      strokeWidth="0.2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    />
                    {/* Label for unlocked */}
                    {unlocked && (
                      <text
                        x={lesson.x}
                        y={lesson.y - 3.5}
                        textAnchor="middle"
                        fill="#FFF8F0"
                        fontSize="2.2"
                        fontFamily="serif"
                        opacity={isSelected ? 1 : 0.7}
                      >
                        {lesson.word}
                      </text>
                    )}
                    {/* Lock indicator */}
                    {!unlocked && (
                      <text
                        x={lesson.x}
                        y={lesson.y + 0.7}
                        textAnchor="middle"
                        fill="#4a5568"
                        fontSize="1.8"
                      >
                        ?
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* The Bigger Picture — the bear assembling piece by piece */}
          <PuzzlePreview />

          {/* Selected lesson detail */}
          <AnimatePresence>
            {selected && unlockedLessons.has(selected) && (
              <motion.div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center px-8 max-w-[400px]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const l = lessons.find((x) => x.id === selected)
                  return (
                    <>
                      <span className="text-2xl">{l.emoji}</span>
                      <p className="mt-2 font-serif text-xl text-[#FFF8F0]">{l.word}</p>
                      <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#FFB400]/70">
                        {l.chapter}
                      </p>
                      <p className="mt-2 font-serif italic text-sm text-[#FFF8F0]/70">
                        &ldquo;{l.meaning}&rdquo;
                      </p>
                    </>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtitle when no lessons unlocked */}
          {count === 0 && (
            <motion.p
              className="absolute bottom-16 left-0 right-0 text-center px-8 font-serif italic text-sm text-[#FFF8F0]/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Journey through the story to discover each lesson&hellip;
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
