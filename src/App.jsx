import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SectionIndicator from './components/common/SectionIndicator'
import SiteLoader from './components/common/SiteLoader'
import HeroExperience from './components/hero/HeroExperience'
import ActSection from './components/acts/ActSection'
import FrankieStory from './components/story/FrankieStory'
import Entrepreneurship from './components/entrepreneurship/Entrepreneurship'
import MediaHub from './components/media/MediaHub'
import Creativity from './components/creativity/Creativity'
import BooksPublications from './components/books/BooksPublications'
import CommunityImpact from './components/community/CommunityImpact'
import FutureVision from './components/vision/FutureVision'
import RecognitionBadges from './components/acts/RecognitionBadges'
import TimelineStrip from './components/acts/TimelineStrip'
import Heartbeat from './components/acts/Heartbeat'
import ClosingSection from './components/closing/ClosingSection'
import Contact from './components/contact/Contact'
import { content } from './data/content'
import styles from './App.module.css'

const acts = content.acts

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden')
        setTimeout(() => loader.remove(), 600)
      }, 400)
    }
  }, [])

  return (
    <div className={styles.app}>
      <SiteLoader />
      <a href="#main" className={styles.skipLink}>Skip to main content</a>
      <Nav />
      <SectionIndicator />
      <main id="main">
        <HeroExperience />

        <ActSection act={acts[0]}>
          <FrankieStory />
        </ActSection>
        <Heartbeat line={acts[0].heartbeatLine} />

        <ActSection act={acts[1]}>
          <Entrepreneurship />
        </ActSection>
        <Heartbeat line={acts[1].heartbeatLine} />

        <ActSection act={acts[2]}>
          <MediaHub />
        </ActSection>
        <Heartbeat line={acts[2].heartbeatLine} />

        <ActSection act={acts[3]}>
          <Creativity />
          <BooksPublications />
        </ActSection>
        <Heartbeat line={acts[3].heartbeatLine} />

        <ActSection act={acts[4]}>
          <CommunityImpact />
        </ActSection>
        <Heartbeat line={acts[4].heartbeatLine} />

        <ActSection act={acts[5]}>
          <FutureVision />
          <RecognitionBadges />
          <TimelineStrip />
        </ActSection>
        <Heartbeat line={acts[5].heartbeatLine} />

        <ClosingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
