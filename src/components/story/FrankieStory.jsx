import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import TextReveal from '../common/TextReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[0]

/**
 * Render a narrative block based on its type
 */
function NarrativeBlock({ block, index }) {
  if (block.type === 'emphasis') {
    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className="py-6 md:py-10 text-center">
          <p className="font-serif text-[clamp(1.25rem,3vw,2.25rem)] font-light leading-[1.35] text-[#2C2C2C] italic">
            {block.content}
          </p>
        </div>
      </ScrollReveal>
    )
  }

  if (block.type === 'centered') {
    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className="py-10 md:py-16 text-center">
          {block.lines.map((line, i) => (
            <p
              key={i}
              className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-light leading-[1.6] text-[#2C2C2C]"
            >
              {line}
            </p>
          ))}
        </div>
      </ScrollReveal>
    )
  }

  // Default: regular text paragraph
  return (
    <ScrollReveal variant="fadeUp" duration={0.9}>
      <p className="font-serif text-lg md:text-xl lg:text-[1.35rem] leading-[1.8] text-[#2C2C2C]/85 mb-6 md:mb-8">
        {block.content}
      </p>
    </ScrollReveal>
  )
}

/**
 * ScrapbookCard — tilted, playful card for childhood dreams
 */
function ScrapbookCard({ emoji, dream, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const rotations = [-2, 1.5, -1, 2.5, -1.5, 2, -0.5]
  const bgColors = ['#FFDAC5', '#FFE8D6', '#FFF0CC', '#FFDAC5', '#FFE8D6', '#FFF0CC', '#FFDAC5']
  const rotation = rotations[index % rotations.length]

  return (
    <motion.div
      ref={ref}
      className="p-5 md:p-7 rounded-lg shadow-sm cursor-default flex flex-col items-start gap-2"
      style={{
        backgroundColor: bgColors[index % bgColors.length],
        transform: `rotate(${rotation}deg)`,
        border: '1px solid rgba(0,0,0,0.04)',
      }}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : { opacity: 0, y: 30, rotate: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.3 } }}
    >
      <span className="text-2xl md:text-3xl" role="img" aria-hidden="true">{emoji}</span>
      <p className="font-handwritten text-lg md:text-xl text-[#2C2C2C]/80 leading-relaxed">
        {dream}
      </p>
    </motion.div>
  )
}

export default function FrankieStory() {
  return (
    <div className="pb-20 md:pb-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-[760px] mx-auto">

        {/* ── Opening visual breath ── */}
        <ScrollReveal variant="fadeIn" duration={1.4}>
          <div className="py-16 md:py-24 text-center">
            <p className="font-serif font-light text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] tracking-[-0.02em] text-[#2C2C2C]">
              <TextReveal
                text="Every life has an origin story."
                mode="word"
                staggerDelay={0.07}
                duration={0.8}
              />
            </p>
          </div>
        </ScrollReveal>

        {/* ── Part 1: Origin, Mother, Bedroom, Father, Cavalier ── */}
        <div className="py-4 md:py-8">
          {act.narrative.map((block, i) => (
            <NarrativeBlock key={i} block={block} index={i} />
          ))}
        </div>

        {/* ── Visual Breaths: "Dreams are worth..." ── */}
        <div className="py-12 md:py-20">
          {act.visualBreaths.map((line, i) => (
            <ScrollReveal key={i} variant="fadeIn" duration={1.3}>
              <div className="py-10 md:py-16 text-center">
                <p className="font-serif font-light text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.15] tracking-[-0.02em] text-[#2C2C2C]">
                  <TextReveal
                    text={line}
                    mode="word"
                    staggerDelay={0.06}
                    duration={0.7}
                  />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Part 2: Transition line ── */}
        {act.narrativePart2 && act.narrativePart2.map((block, i) => (
          <NarrativeBlock key={`p2-${i}`} block={block} index={i} />
        ))}

        {/* ── "Little Frankie wanted to be..." — Scrapbook style ── */}
        <ScrollReveal variant="fadeUp">
          <div className="py-16 md:py-24">
            <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] font-light text-[#2C2C2C]/70 text-center mb-4">
              Little Frankie wanted to be&hellip;
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 max-w-[650px] mx-auto mt-10">
              {act.childhoodDreams.map((item, i) => (
                <ScrapbookCard key={i} emoji={item.emoji} dream={item.dream} index={i} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Part 3: Iwanna, Mrs. Loughty, Reflection, Closing ── */}
        <div className="py-4 md:py-8">
          {act.narrativePart3.map((block, i) => (
            <NarrativeBlock key={`p3-${i}`} block={block} index={i} />
          ))}
        </div>

        {/* ── Reflection question ── */}
        {act.reflection && (
          <ScrollReveal variant="fadeIn" duration={1.4}>
            <div className="py-16 md:py-24 text-center">
              <p className="font-serif italic text-[clamp(1.1rem,2.5vw,1.5rem)] text-[#2C2C2C]/40 mb-3">
                Reflection
              </p>
              <p className="font-serif font-light text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] text-[#2C2C2C]">
                {act.reflection}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* ── Frankieism — recurring visual signature ── */}
        <Frankieism text={act.frankieism} accentColor="#FF7C15" />
      </div>
    </div>
  )
}
