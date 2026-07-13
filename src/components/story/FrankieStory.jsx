import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import TextReveal from '../common/TextReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[0]

// Emphasis content that should be LARGE — major emotional peaks (Level 1)
const MAJOR_EMPHASIS = [
  'Because he believed it, I believed it too.',
  'He was my best friend.',
]

/**
 * Render inline content — supports string or array of segments
 * with optional bold/underline formatting.
 */
function InlineContent({ content }) {
  if (typeof content === 'string') return <>{content}</>
  return (
    <>
      {content.map((seg, i) => (
        <span
          key={i}
          className={[
            seg.bold ? 'font-semibold text-[#2C2C2C]' : '',
            seg.underline ? 'underline decoration-[#8B5FB0] decoration-2 underline-offset-2' : '',
          ].filter(Boolean).join(' ')}
        >
          {seg.text}
        </span>
      ))}
    </>
  )
}

/**
 * Render a narrative block with clear typographic hierarchy.
 * Level 1 — Major emotional statements (largest emphasis)
 * Level 2 — Standard emphasis (supporting reflections)
 * Level 3 — Mattered triplet (quiet, tightly grouped)
 * Body    — Storytelling paragraphs
 */
function NarrativeBlock({ block, index }) {
  // Bold emphasis — client-specified bold statements (e.g. "To me, it was perfect!")
  if (block.type === 'bold-emphasis') {
    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className="py-1.5 md:py-2.5 text-center overflow-hidden">
          <p className="font-serif font-semibold leading-[1.35] text-[#2C2C2C] italic whitespace-nowrap text-[clamp(1.05rem,2.3vw,1.5rem)]">
            {block.content}
          </p>
        </div>
      </ScrollReveal>
    )
  }

  // Boxed quote — visually distinct block with border
  if (block.type === 'boxed') {
    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className="my-3 md:my-5 mx-auto max-w-[680px] border-2 border-[#8B5FB0]/30 rounded-xl px-6 md:px-8 py-4 md:py-5 bg-white/20">
          <p className="font-serif italic font-light text-[clamp(1.05rem,2.3vw,1.5rem)] leading-[1.5] text-[#2C2C2C] text-center">
            {block.content}
          </p>
        </div>
      </ScrollReveal>
    )
  }

  // Separator — visual break between narrative thoughts
  if (block.type === 'separator') {
    return (
      <div className="py-2 md:py-4 text-center">
        <span className="font-serif text-[#2C2C2C]/30 text-2xl tracking-[0.5em]">&hellip;&hellip;&hellip;</span>
      </div>
    )
  }

  if (block.type === 'emphasis') {
    const isMattered = block.content.endsWith('mattered.')
    const isMajor = MAJOR_EMPHASIS.includes(block.content)

    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className={`${
          isMattered ? 'py-0.5 md:py-1' :
          isMajor ? 'py-2 md:py-3.5' :
          'py-1.5 md:py-2.5'
        } text-center overflow-hidden`}>
          <p className={`font-serif font-light leading-[1.35] text-[#2C2C2C] italic whitespace-nowrap ${
            isMattered
              ? 'text-[clamp(1rem,2vw,1.5rem)]'
              : isMajor
                ? 'text-[clamp(1.15rem,2.8vw,2rem)]'
                : 'text-[clamp(1.05rem,2.3vw,1.5rem)]'
          }`}>
            {block.content}
          </p>
        </div>
      </ScrollReveal>
    )
  }

  if (block.type === 'centered') {
    return (
      <ScrollReveal variant="fadeIn" duration={1.2}>
        <div className="py-1 md:py-2 text-center">
          {block.lines.map((line, i) => (
            <p
              key={i}
              className={`font-serif font-light leading-[1.5] text-[#2C2C2C] ${
                i === 0
                  ? 'text-[clamp(1.4rem,3vw,2.25rem)] mb-1.5'
                  : 'text-[clamp(1.05rem,2.2vw,1.5rem)] text-[#2C2C2C]/75'
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </ScrollReveal>
    )
  }

  // Default: body copy (Level 3 of overall hierarchy)
  return (
    <ScrollReveal variant="fadeUp" duration={0.9}>
      <p className="font-serif text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.6] text-[#2C2C2C]/85 mb-1.5 md:mb-2.5">
        <InlineContent content={block.content} />
      </p>
    </ScrollReveal>
  )
}

/**
 * ScrapbookCard — tilted, playful image card for childhood dreams
 * Shows each illustration at its natural proportions (no forced cropping).
 */
function ScrapbookCard({ image, dream, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const rotations = [-2.5, 1.5, -1, 2, -1.5, 2.5, -0.5]
  const rotation = rotations[index % rotations.length]

  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] cursor-default bg-[#FDF5ED]"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : { opacity: 0, y: 40, rotate: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="aspect-[100/114] w-full">
        <img
          src={image}
          alt={`Little Frankie wanted to be a ${dream}`}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}

export default function FrankieStory() {
  return (
    <div className="pt-0 pb-6 md:pb-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-[760px] mx-auto">

        {/* ── Part 1: Origin, Mother, Bedroom, Father, Cavalier ── */}
        <div className="py-0.5 md:py-2">
          {act.narrative.map((block, i) => (
            <NarrativeBlock key={i} block={block} index={i} />
          ))}
        </div>

        {/* ── Image placeholder: Childhood farm + Cavalier photos (upcoming assets) ── */}
        {/* Client will provide childhood photo with dog, farm photo, and horse artwork.
            These will be placed here — after the Cavalier story, before the visual breaths.
            Suggested layout: 2-column grid on desktop, stacked on mobile. */}
        <div className="py-2 md:py-4" id="act1-images" aria-label="Childhood memories" />

        {/* ── Visual Breaths: "Dreams are worth..." ── */}
        <div className="py-1 md:py-2">
          {act.visualBreaths.map((line, i) => (
            <ScrollReveal key={i} variant="fadeIn" duration={1.3}>
              <div className="py-1 md:py-1.5 text-center">
                <p className="font-serif font-light text-[clamp(1.35rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-[#2C2C2C]">
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
          <div className="py-4 md:py-6">
            <p className="font-serif text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.6] text-[#2C2C2C]/85 mb-1.5 md:mb-2.5">
              Every new dream opened another door, and my parents never asked me to choose only one. They encouraged me to explore them all, but they also gave me a nick name, “Iwanna”… as in I wanna this and I wanna that!
            </p>
            <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] font-light text-[#2C2C2C]/70 text-center mb-3">
              Little Frankie dreamed of becoming&hellip;
            </p>
            <div className="grid grid-cols-2 gap-5 md:gap-7 max-w-[900px] mx-auto mt-3">
              {act.childhoodDreams.map((item, i) => (
                <ScrapbookCard key={i} image={item.image} dream={item.dream} index={i} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Part 3: Iwanna, Mrs. Loughty, Reflection, Closing ── */}
        <div className="py-0 md:py-1">
          {act.narrativePart3.map((block, i) => (
            <NarrativeBlock key={`p3-${i}`} block={block} index={i} />
          ))}
        </div>

        {/* ── Reflection question ── */}
        {act.reflection && (
          <ScrollReveal variant="fadeIn" duration={1.4}>
            <div className="py-1 md:py-2.5 text-center">
              <p className="font-serif text-[clamp(1.4rem,3vw,2.25rem)] font-medium tracking-[0.05em] text-[#2C2C2C] mb-1">
                Reflection
              </p>
              <p className="font-serif italic font-light text-[clamp(1.3rem,2.5vw,1.75rem)] leading-[1.5] text-[#2C2C2C]/65">
                {act.reflection}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* ─ Frankieism — recurring visual signature ── */}
        {act.frankieism && (
          <div className="pt-2 md:pt-4">
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-[#8B5FB0]/50 text-center mb-2">
              Frankie'ism
            </p>
            <Frankieism text={act.frankieism} accentColor="#8B5FB0" textColor="#8B5FB0" />
          </div>
        )}
      </div>
    </div>
  )
}
