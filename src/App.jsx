import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SiteLoader from './components/common/SiteLoader'
import HeroExperience from './components/hero/HeroExperience'
import WhoIsFrankie from './components/who/WhoIsFrankie'
import ActSection from './components/acts/ActSection'
import FrankieStory from './components/story/FrankieStory'
import Entrepreneurship from './components/entrepreneurship/Entrepreneurship'
import Creativity from './components/creativity/Creativity'
import CommunityImpact from './components/community/CommunityImpact'
import FutureVision from './components/vision/FutureVision'
import Heartbeat from './components/acts/Heartbeat'
import Impact from './components/impact/Impact'
import MediaSection from './components/media/MediaSection'
import BooksPublications from './components/books/BooksPublications'
import Art from './components/art/Art'
import TimelineSection from './components/timeline/TimelineSection'
import ClosingSection from './components/closing/ClosingSection'
import Contact from './components/contact/Contact'
import { useLenis } from './hooks/useLenis'
import { content } from './data/content'

const acts = content.acts

// Color pairs for heartbeat transitions (from -> to)
const heartbeatColors = [
  { from: '#D8C8EE', to: '#FFDAC5', accent: '#8B5FB0' },    // hero -> act I
  { from: '#FFDAC5', to: '#FFF0CC', accent: '#EE5802' },     // act I -> act II
  { from: '#FFF0CC', to: '#E0F4F4', accent: '#01B2D4' },     // act II -> act III
  { from: '#E0F4F4', to: '#FDE8EF', accent: '#DF3CB5' },     // act III -> act IV
  { from: '#FDE8EF', to: '#E8F0E0', accent: '#629E46' },     // act IV -> act V
  { from: '#E8F0E0', to: '#FFF8F0', accent: '#FFB400' },     // act V -> act VI
]

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  useLenis()

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="min-h-screen">
      <SiteLoader />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Skip link */}
      <a href="#main" className="skip-link">Skip to main content</a>

      <Nav />

      <main id="main">
        {/* Hero */}
        <HeroExperience />

        {/* Who Is Frankie? — preserved for future placement */}
        {/* <WhoIsFrankie /> */}

        {/* Heartbeat transition: Who -> Act I */}
        <Heartbeat
          line={acts[0].frankieism}
          fromColor={heartbeatColors[0].from}
          toColor={heartbeatColors[0].to}
          accentColor={heartbeatColors[0].accent}
        />

        {/* Act I - Where Belief Began */}
        <ActSection act={acts[0]}>
          <FrankieStory />
        </ActSection>

        {/* Heartbeat transition: Act I -> Act II */}
        <Heartbeat
          line={acts[1].frankieism}
          fromColor={heartbeatColors[1].from}
          toColor={heartbeatColors[1].to}
          accentColor={heartbeatColors[1].accent}
        />

        {/* Act II - Building */}
        <ActSection act={acts[1]}>
          <Entrepreneurship />
        </ActSection>

        {/* Heartbeat transition: Act II -> Act III */}
        <Heartbeat
          line={acts[2].frankieism}
          fromColor={heartbeatColors[2].from}
          toColor={heartbeatColors[2].to}
          accentColor={heartbeatColors[2].accent}
        />

        {/* Act III - Amplifying (Media Section) */}
        <ActSection act={acts[2]}>
          <MediaSection />
        </ActSection>

        {/* Heartbeat transition: Act III -> Act IV */}
        <Heartbeat
          line={acts[3].frankieism}
          fromColor={heartbeatColors[3].from}
          toColor={heartbeatColors[3].to}
          accentColor={heartbeatColors[3].accent}
        />

        {/* Act IV - Creating */}
        <ActSection act={acts[3]}>
          <Creativity />
        </ActSection>

        {/* Heartbeat transition: Act IV -> Act V */}
        <Heartbeat
          line={acts[4].frankieism}
          fromColor={heartbeatColors[4].from}
          toColor={heartbeatColors[4].to}
          accentColor={heartbeatColors[4].accent}
        />

        {/* Act V - Giving */}
        <ActSection act={acts[4]}>
          <CommunityImpact />
        </ActSection>

        {/* Heartbeat transition: Act V -> Act VI */}
        <Heartbeat
          line={acts[5].frankieism}
          fromColor={heartbeatColors[5].from}
          toColor={heartbeatColors[5].to}
          accentColor={heartbeatColors[5].accent}
        />

        {/* Act VI - Still Becoming */}
        <ActSection act={acts[5]}>
          <FutureVision />
        </ActSection>

        {/* Supporting sections */}
        <Impact />
        <BooksPublications />
        <Art />
        <TimelineSection />

        {/* Closing & Contact */}
        <ClosingSection />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
