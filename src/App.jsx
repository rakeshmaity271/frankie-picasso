import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SectionIndicator from './components/common/SectionIndicator'
import SiteLoader from './components/common/SiteLoader'
import HeroExperience from './components/hero/HeroExperience'
import FrankieStory from './components/story/FrankieStory'
import Entrepreneurship from './components/entrepreneurship/Entrepreneurship'
import Creativity from './components/creativity/Creativity'
import CommunityImpact from './components/community/CommunityImpact'
import MediaHub from './components/media/MediaHub'
import BooksPublications from './components/books/BooksPublications'
import AwardsRecognition from './components/awards/AwardsRecognition'
import LegacyTimeline from './components/legacy/LegacyTimeline'
import FutureVision from './components/vision/FutureVision'
import Contact from './components/contact/Contact'
import styles from './App.module.css'

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
        <FrankieStory />
        <Entrepreneurship />
        <Creativity />
        <CommunityImpact />
        <MediaHub />
        <BooksPublications />
        <AwardsRecognition />
        <LegacyTimeline />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
