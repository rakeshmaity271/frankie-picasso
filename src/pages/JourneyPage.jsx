import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroExperience from '../components/hero/HeroExperience'
import JourneyPreviews from '../components/journey/JourneyPreviews'
import LessonGrid from '../components/map/LessonGrid'
import Impact from '../components/impact/Impact'
import BooksPublications from '../components/books/BooksPublications'
import Testimonials from '../components/testimonials/Testimonials'
import Art from '../components/art/Art'
import ClosingSection from '../components/closing/ClosingSection'
import Contact from '../components/contact/Contact'
import { mapOfLife } from '../data/content'

/**
 * JourneyPage — the main page ('/').
 * Hero followed by eight short-form Act previews (each introduced by a
 * Heartbeat transition), the Map of a Life lesson markers, and the
 * supporting sections. The full Acts live behind #/act/:actId routes.
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

      {/* Who Is Frankie? — preserved for future placement */}
      {/* <WhoIsFrankie /> */}

      {/* The Journey — eight Act previews, each preceded by a Heartbeat */}
      <JourneyPreviews />

      {/* Map of a Life — compact lesson grid */}
      <LessonGrid lessons={lessons} />

      {/* Supporting sections */}
      <Impact />
      <BooksPublications />
      <Testimonials />
      <Art />

      {/* Closing & Contact */}
      <ClosingSection />
      <Contact />
    </>
  )
}
