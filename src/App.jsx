import { useEffect, useRef, useState, useCallback } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SectionIndicator from './components/common/SectionIndicator'
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
import { content } from './data/content'
import styles from './App.module.css'

const acts = content.acts

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const appRef = useRef(null)

  useEffect(() => {
    const loader = document.getElementById('loader')
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden')
        setTimeout(() => loader.remove(), 600)
      }, 400)
    }
  }, [])

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
    <div className={styles.app} ref={appRef}>
      <SiteLoader />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <a href="#main" className={styles.skipLink}>Skip to main content</a>
      <Nav />
      <SectionIndicator />
      <main id="main">
        <HeroExperience />
        <WhoIsFrankie />

        <ActSection act={acts[0]}>
          <FrankieStory />
        </ActSection>
        <Heartbeat line={acts[0].heartbeatLine} />

        <ActSection act={acts[1]}>
          <Entrepreneurship />
        </ActSection>
        <Heartbeat line={acts[1].heartbeatLine} />

        <ActSection act={acts[2]}>
          {/* Media content lives in the standalone MediaSection below */}
        </ActSection>
        <Heartbeat line={acts[2].heartbeatLine} />

        <ActSection act={acts[3]}>
          <Creativity />
        </ActSection>
        <Heartbeat line={acts[3].heartbeatLine} />

        <ActSection act={acts[4]}>
          <CommunityImpact />
        </ActSection>
        <Heartbeat line={acts[4].heartbeatLine} />

        <ActSection act={acts[5]}>
          <FutureVision />
        </ActSection>
        <Heartbeat line={acts[5].heartbeatLine} />

        <Impact />
        <MediaSection />
        <BooksPublications standalone />
        <Art />
        <TimelineSection />

        <ClosingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
