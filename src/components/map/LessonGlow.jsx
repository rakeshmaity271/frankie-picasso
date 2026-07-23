import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMap } from '../../context/MapContext'

/**
 * LessonGlow — a glowing lesson word revealed at the end of an Act section.
 * Elegant, cinematic: the page "pauses" as the word emerges with a warm
 * golden glow, followed by its meaning. Not a modal — lives in the page flow.
 */
export default function LessonGlow({ lesson }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const { unlockLesson, unlockedLessons } = useMap()
  const [settled, setSettled] = useState(false)
  const alreadyUnlocked = unlockedLessons.has(lesson.id)

  // Unlock the lesson when it scrolls into view
  useEffect(() => {
    if (isInView && !alreadyUnlocked) {
      const timer = setTimeout(() => unlockLesson(lesson.id), 1800)
      return () => clearTimeout(timer)
    }
  }, [isInView, alreadyUnlocked, lesson.id, unlockLesson])

  // Settle the glow after the initial animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setSettled(true), 3200)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center px-6"
      aria-label={`Lesson: ${lesson.word}`}
    >
      {/* Subtle dark vignette behind the lesson */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.04) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />

      {/* Glow orb behind the word */}
      <motion.div
        className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,180,0,0.15) 0%, transparent 70%)',
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView
          ? settled
            ? { scale: 1, opacity: 0.4 }
            : { scale: [0.5, 1.2, 1], opacity: [0, 0.7, 0.5] }
          : { scale: 0.5, opacity: 0 }
        }
        transition={settled
          ? { duration: 1.5, ease: 'easeOut' }
          : { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
        }
        aria-hidden="true"
      />

      {/* Emoji */}
      <motion.span
        className="relative text-2xl md:text-3xl mb-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        {lesson.emoji}
      </motion.span>

      {/* Lesson word with golden glow */}
      <motion.h3
        className="relative font-serif font-light tracking-[0.08em] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-[#2C2C2C]"
        style={{
          textShadow: settled
            ? '0 0 20px rgba(255,180,0,0.2)'
            : '0 0 40px rgba(255,180,0,0.5), 0 0 80px rgba(255,180,0,0.2)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {lesson.word}
      </motion.h3>

      {/* Meaning line */}
      <motion.p
        className="relative mt-4 font-serif italic text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-[#2C2C2C]/70 max-w-[500px]"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        &ldquo;{lesson.meaning}&rdquo;
      </motion.p>

      {/* Small chapter label */}
      <motion.p
        className="relative mt-3 font-sans text-[0.65rem] uppercase tracking-[0.35em] text-[#FFB400]/60"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {lesson.chapter}
      </motion.p>

      {/* Decorative dot */}
      <motion.div
        className="relative mt-5 w-2 h-2 rounded-full bg-[#FFB400]/50"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        aria-hidden="true"
      />
    </div>
  )
}
