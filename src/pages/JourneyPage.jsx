import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroExperience from '../components/hero/HeroExperience'
import WhoIsFrankie from '../components/who/WhoIsFrankie'
import JourneyPreviews from '../components/journey/JourneyPreviews'
import LessonGrid from '../components/map/LessonGrid'
import MapSection from '../components/map/MapSection'
import Impact from '../components/impact/Impact'
import BooksPublications from '../components/books/BooksPublications'
import Art from '../components/art/Art'
import Testimonials from '../components/testimonials/Testimonials'
import ClosingSection from '../components/closing/ClosingSection'
import Contact from '../components/contact/Contact'
import { mapOfLife } from '../data/content'

/**
 * JourneyPage — the main page ('/').
 * Hero followed by eight short-form Act previews (each introduced by a
 * Heartbeat transition), the Life Lessons editorial showcase, the future-ready
 * Map architecture, Impact, the Creative Studio (Books + Art), Testimonials,
 * and the warm high-contrast Closing & Contact experience.
 */
export default function JourneyPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const lessons = mapOfLife?.lessons || []

  // Cross-route section navigation: when Nav is used on an act page it
  // navigates here with { scrollTo: sectionId } — scroll after render.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const timer = setTimeout(() => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Clear the state AFTER the scroll has fired (inside the timeout)
      // so a refresh doesn't re-scroll and cleanup can't cancel the timer.
      navigate(location.pathname, { replace: true, state: {} })
    }, 150)
    return () => clearTimeout(timer)
  }, [location.state, location.pathname, navigate])

  // Mount-time scroll reset: arriving without a scrollTo intent (e.g.
  // back-link from an act page) should land at the top, not mid-page.
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* Hero */}
      <HeroExperience />

      {/* Who Is Frankie? — About section (office candid lives here) */}
      <WhoIsFrankie />

      {/* The Journey — eight Act previews, each preceded by a Heartbeat */}
      <JourneyPreviews />

      {/* Life Lessons — compact editorial showcase */}
      <LessonGrid lessons={lessons} />

      {/* Map Architecture — ready for Frankie's upcoming custom life map asset */}
      <MapSection />

      {/* Impact & Platform Building */}
      <Impact />

      {/* The Creative Studio — Books + Art unified creative expression */}
      <BooksPublications />
      <Art />

      {/* Voices & Testimonials */}
      <Testimonials />

      {/* Closing & Contact — warm high-contrast readable finale */}
      <ClosingSection />
      <Contact />
    </>
  )
}
