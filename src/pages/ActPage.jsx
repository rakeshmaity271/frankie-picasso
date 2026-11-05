import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ActSection from '../components/acts/ActSection'
import FrankieStory from '../components/story/FrankieStory'
import FrankieStoryActTwo from '../components/story/FrankieStoryActTwo'
import FrankieStoryActThree from '../components/story/FrankieStoryActThree'
import FrankieStoryActFour from '../components/story/FrankieStoryActFour'
import FrankieStoryActFive from '../components/story/FrankieStoryActFive'
import FrankieStoryActSix from '../components/story/FrankieStoryActSix'
import FrankieStoryActSeven from '../components/story/FrankieStoryActSeven'
import FrankieStoryActEight from '../components/story/FrankieStoryActEight'
import MediaSection from '../components/media/MediaSection'
import Creativity from '../components/creativity/Creativity'
import CommunityImpact from '../components/community/CommunityImpact'
import { content } from '../data/content'
import { ScrollTrigger } from '../hooks/useGsap'

/**
 * ActPage — full Act experiences behind hash routes (#/act/:actId).
 * Each entry renders its themed component inside the existing ActSection
 * wrapper using the matching content.acts entry.
 */
const registry = {
  'where-belief-began': FrankieStory,
  building: FrankieStoryActTwo,
  'building-through-boxing': FrankieStoryActThree,
  'the-leader': FrankieStoryActFour,
  'the-survivor': FrankieStoryActFive,
  'coming-home': FrankieStoryActSix,
  'beginning-again': FrankieStoryActSeven,
  'still-becoming': FrankieStoryActEight,
  amplifying: MediaSection,
  creating: Creativity,
  giving: CommunityImpact,
}

const actOrder = [
  { id: 'where-belief-began', number: 'I', title: 'Welcome to the Journey' },
  { id: 'building', number: 'II', title: 'Becoming' },
  { id: 'building-through-boxing', number: 'III', title: 'The Builder' },
  { id: 'the-leader', number: 'IV', title: 'The Leader' },
  { id: 'the-survivor', number: 'V', title: 'The Survivor' },
  { id: 'coming-home', number: 'VI', title: 'Coming Home' },
  { id: 'beginning-again', number: 'VII', title: 'Beginning Again' },
  { id: 'still-becoming', number: 'VIII', title: 'Still Becoming' },
]

export default function ActPage() {
  const { actId } = useParams()
  const Story = registry[actId]
  const act = (content.acts || []).find((a) => a.id === actId)

  const currentIndex = actOrder.findIndex((a) => a.id === actId)
  const prevAct = currentIndex > 0 ? actOrder[currentIndex - 1] : null
  const nextAct = currentIndex >= 0 && currentIndex < actOrder.length - 1 ? actOrder[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    // Re-measure GSAP triggers after the new page settles
    const raf = requestAnimationFrame(() => {
      if (ScrollTrigger && typeof ScrollTrigger.refresh === 'function') {
        ScrollTrigger.refresh()
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [actId])

  if (!Story || !act) {
    return <Navigate to="/" replace />
  }

  const pageTitle = actId === 'where-belief-began' ? 'Welcome to the Journey' : act.title

  return (
    <div>
      {/* Heading hierarchy: one visually-hidden h1 per act page */}
      <h1 className="sr-only">{pageTitle}</h1>
      {/* Restrained return link + chapter indicator */}
      <div
        className="px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-2"
        style={{ backgroundColor: act.color }}
      >
        <div className="max-w-[760px] mx-auto flex items-center justify-between">
          <motion.a
            href="#/"
            className="inline-block font-sans text-sm tracking-wide text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors duration-300"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ← Back to the Journey
          </motion.a>
          {currentIndex >= 0 && (
            <span className="font-sans text-xs uppercase tracking-widest text-[#2C2C2C]/50 font-medium">
              Act {actOrder[currentIndex].number} of VIII
            </span>
          )}
        </div>
      </div>

      <ActSection act={act} overrideTitle={actId === 'where-belief-began' ? 'Welcome to the Journey' : undefined}>
        <Story />
      </ActSection>

      {/* Connected Act-to-Act Navigation Footer */}
      <div
        className="px-6 md:px-10 lg:px-16 pb-16 pt-8 border-t border-black/[0.06]"
        style={{ backgroundColor: act.color }}
      >
        <div className="max-w-[760px] mx-auto">
          {/* Prev / Next controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {prevAct ? (
              <a
                href={`#/act/${prevAct.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/85 border border-[#2C2C2C]/10 text-xs font-sans text-[#2C2C2C] hover:bg-white hover:shadow-xs transition-all"
              >
                <span>&larr;</span>
                <span>Act {prevAct.number}: {prevAct.title}</span>
              </a>
            ) : (
              <a
                href="#/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/85 border border-[#2C2C2C]/10 text-xs font-sans text-[#2C2C2C] hover:bg-white transition-all"
              >
                <span>&larr;</span>
                <span>Back to the Journey</span>
              </a>
            )}

            <a
              href="#/"
              className="text-xs font-sans uppercase tracking-widest text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors"
            >
              All Chapters
            </a>

            {nextAct ? (
              <a
                href={`#/act/${nextAct.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2C2C2C] text-white text-xs font-sans hover:bg-[#4A4A4A] transition-all shadow-xs"
              >
                <span>Act {nextAct.number}: {nextAct.title}</span>
                <span>&rarr;</span>
              </a>
            ) : (
              <a
                href="#/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2C2C2C] text-white text-xs font-sans hover:bg-[#4A4A4A] transition-all shadow-xs"
              >
                <span>Return to Journey</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>

          {/* Quick jump row to all 8 Acts */}
          <div className="pt-6 border-t border-black/[0.05] text-center">
            <p className="text-[11px] font-sans uppercase tracking-widest text-[#2C2C2C]/60 mb-3 font-semibold">
              Explore All 8 Acts
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {actOrder.map((item) => (
                <a
                  key={item.id}
                  href={`#/act/${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                    item.id === actId
                      ? 'bg-[#2C2C2C] text-white font-medium shadow-xs'
                      : 'bg-white/80 text-[#2C2C2C] hover:bg-white border border-[#2C2C2C]/10'
                  }`}
                >
                  Act {item.number}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
