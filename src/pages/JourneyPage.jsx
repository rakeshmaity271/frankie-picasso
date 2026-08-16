import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroExperience from '../components/hero/HeroExperience'
import JourneyPreviews from '../components/journey/JourneyPreviews'
import LessonGlow from '../components/map/LessonGlow'
import MamaBearFinale from '../components/finale/MamaBearFinale'
import Impact from '../components/impact/Impact'
import BooksPublications from '../components/books/BooksPublications'
import Art from '../components/art/Art'
import TimelineSection from '../components/timeline/TimelineSection'
import ClosingSection from '../components/closing/ClosingSection'
import Contact from '../components/contact/Contact'
import { mapOfLife } from '../data/content'

/**
 * JourneyPage — the main page ('/').
 * Hero followed by five short-form Act previews (each introduced by a
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

      {/* The Journey — five Act previews, each preceded by a Heartbeat */}
      <JourneyPreviews />

      {/* Map of a Life lesson markers (original order preserved) */}
      {/* Lesson 1: Responsibility (The Farm) */}
      <LessonGlow lesson={lessons[0]} />

      {/* Lessons 2-5: Observation, Courage, Human Nature, Self-Care */}
      <LessonGlow lesson={lessons[1]} />
      <LessonGlow lesson={lessons[2]} />
      <LessonGlow lesson={lessons[3]} />
      <LessonGlow lesson={lessons[4]} />

      {/* Lesson 7: Connection (Radio) */}
      <LessonGlow lesson={lessons[6]} />

      {/* Lesson 6: Resilience (Boxing & Kickboxing) */}
      <LessonGlow lesson={lessons[5]} />

      {/* Lesson 8: Perspective (Motorcycle Accident) */}
      <LessonGlow lesson={lessons[7]} />

      {/* Lesson 9: Collaboration (World Supply Tent) */}
      <LessonGlow lesson={lessons[8]} />

      {/* Act VI Finale — Mama Bear (emotional conclusion of the journey) */}
      <MamaBearFinale />

      {/* Supporting sections */}
      <Impact />
      <BooksPublications />
      <Art />
      <TimelineSection />

      {/* Closing & Contact */}
      <ClosingSection />
      <Contact />
    </>
  )
}
