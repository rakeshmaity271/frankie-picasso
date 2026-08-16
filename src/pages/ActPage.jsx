import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ActSection from '../components/acts/ActSection'
import FrankieStory from '../components/story/FrankieStory'
import FrankieStoryActTwo from '../components/story/FrankieStoryActTwo'
import FrankieStoryActThree from '../components/story/FrankieStoryActThree'
import FrankieStoryActFour from '../components/story/FrankieStoryActFour'
import FrankieStoryActFive from '../components/story/FrankieStoryActFive'
import MediaSection from '../components/media/MediaSection'
import Creativity from '../components/creativity/Creativity'
import CommunityImpact from '../components/community/CommunityImpact'
import FutureVision from '../components/vision/FutureVision'
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
  amplifying: MediaSection,
  creating: Creativity,
  giving: CommunityImpact,
  'still-becoming': FutureVision,
}

export default function ActPage() {
  const { actId } = useParams()
  const Story = registry[actId]
  const act = (content.acts || []).find((a) => a.id === actId)

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
      {/* Restrained return link */}
      <div
        className="px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-2"
        style={{ backgroundColor: act.color }}
      >
        <div className="max-w-[760px] mx-auto">
          <motion.a
            href="#/"
            className="inline-block font-sans text-sm tracking-wide text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors duration-300"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ← Back to the Journey
          </motion.a>
        </div>
      </div>

      <ActSection act={act} overrideTitle={actId === 'where-belief-began' ? 'Welcome to the Journey' : undefined}>
        <Story />
      </ActSection>
    </div>
  )
}
