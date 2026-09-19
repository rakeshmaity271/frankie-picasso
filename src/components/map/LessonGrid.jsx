import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMap } from '../../context/MapContext'

/**
 * LessonGrid — compact presentation of all Map of Life lessons.
 * Replaces 9 full-viewport LessonGlow blocks with a single
 * responsive grid that reduces scroll while keeping each lesson visible.
 */
export default function LessonGrid({ lessons }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { unlockLesson, unlockedLessons } = useMap()

  // Unlock all lessons when the grid scrolls into view
  useEffect(() => {
    if (isInView && lessons) {
      lessons.forEach((lesson, i) => {
        if (!unlockedLessons.has(lesson.id)) {
          const timer = setTimeout(() => unlockLesson(lesson.id), 800 + i * 300)
          return () => clearTimeout(timer)
        }
      })
    }
  }, [isInView, lessons, unlockedLessons, unlockLesson])

  return (
    <section ref={ref} className="relative py-10 md:py-16 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-[800px] mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400] mb-3">Lessons</p>
          <h2 className="font-serif font-light text-[clamp(1.8rem,4vw,3rem)] text-[#2C2C2C] mb-3">The Map of a Life</h2>
          <p className="font-serif italic text-base text-[#2C2C2C]/60 max-w-[480px] mx-auto">
            Nine lessons. Each one earned. None of them optional.
          </p>
        </motion.div>

        {/* Compact 3×3 lesson grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.id}
              className="group relative p-5 md:p-6 rounded-lg bg-white/50 border border-white/60 text-center hover:bg-white/70 transition-all duration-500"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              {/* Glow orb */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'radial-gradient(circle, rgba(255,180,0,0.12) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <span className="relative text-xl md:text-2xl block mb-2" aria-hidden="true">{lesson.emoji}</span>
              <h3
                className="relative font-serif font-light text-xl md:text-2xl text-[#2C2C2C] mb-1.5"
                style={{ textShadow: '0 0 16px rgba(255,180,0,0.15)' }}
              >
                {lesson.word}
              </h3>
              <p className="relative font-serif italic text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed mb-2">
                &ldquo;{lesson.meaning}&rdquo;
              </p>
              <p className="relative font-sans text-[0.6rem] uppercase tracking-[0.3em] text-[#FFB400]/70">
                {lesson.chapter}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
