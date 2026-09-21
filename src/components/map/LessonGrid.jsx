import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'

// Act color mapping for each lesson
const actColors = {
  'where-belief-began': '#8B5FB0',
  building: '#EE5802',
  creating: '#C24E1A',
  amplifying: '#01B2D4',
  giving: '#DF3CB5',
  'still-becoming': '#3B5998',
}

const actNames = {
  'where-belief-began': 'Act I',
  building: 'Act II',
  creating: 'Act III',
  amplifying: 'Act IV',
  giving: 'Act V',
  'still-becoming': 'Act VIII',
}

export default function LessonGrid({ lessons = [] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="lessons"
      ref={ref}
      className="relative py-12 md:py-18 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F9F5EE 0%, #F4ECE1 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5802] mb-3">
              Life Lessons
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#2C2C2C] leading-[1.12] mb-4">
              Nine Lessons. Earned, Not Given.
            </h2>
            <p className="font-serif italic text-base md:text-lg text-[#2C2C2C]/75 leading-relaxed">
              &ldquo;A life is not a straight line. It is a collection of lessons, choices, risks, and breakthroughs that only make complete sense when we step back and see how every piece fit.&rdquo;
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial 3x3 Numbered Grid — concise, scan-friendly, vibrant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {lessons.map((lesson, i) => {
            const accent = actColors[lesson.act] || '#EE5802'
            const actLabel = actNames[lesson.act] || 'The Journey'
            const numStr = String(i + 1).padStart(2, '0')

            return (
              <motion.div
                key={lesson.id}
                className="group relative p-5 md:p-6 rounded-xl bg-[#FAF6F0] border border-[#E8DCC8]/80 shadow-[0_4px_20px_rgba(44,30,20,0.05)] hover:shadow-[0_12px_32px_rgba(44,30,20,0.12)] hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top accent line colored by Act */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: accent }}
                />

                <div>
                  {/* Header row: Number + Emoji + Act tag */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span
                      className="font-serif text-xs md:text-sm font-semibold tracking-wider"
                      style={{ color: accent }}
                    >
                      {numStr}
                    </span>
                    <span className="text-xl select-none" aria-hidden="true">
                      {lesson.emoji}
                    </span>
                  </div>

                  {/* Core Lesson Word */}
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-[#2C2C2C] mb-2 group-hover:text-[#EE5802] transition-colors">
                    {lesson.word}
                  </h3>

                  {/* Verbatim Lesson Meaning */}
                  <p className="font-serif italic text-xs md:text-sm text-[#4A4A4A] leading-relaxed mb-4">
                    &ldquo;{lesson.meaning}&rdquo;
                  </p>
                </div>

                {/* Bottom metadata pill */}
                <div className="pt-2 border-t border-[#E8DCC8]/60 flex items-center justify-between text-[11px] font-sans">
                  <span className="font-medium text-[#7A6545]">
                    {lesson.chapter}
                  </span>
                  <span
                    className="font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${accent}15`,
                      color: accent,
                    }}
                  >
                    {actLabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
