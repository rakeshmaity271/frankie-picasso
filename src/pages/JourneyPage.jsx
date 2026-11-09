import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroExperience from '../components/hero/HeroExperience'
import WhoIsFrankie from '../components/who/WhoIsFrankie'
import JourneyPreviews from '../components/journey/JourneyPreviews'
import LessonGrid from '../components/map/LessonGrid'
import MapSection from '../components/map/MapSection'
import TimelineSection from '../components/timeline/TimelineSection'
import Impact from '../components/impact/Impact'
import BooksPublications from '../components/books/BooksPublications'
import Art from '../components/art/Art'
import Testimonials from '../components/testimonials/Testimonials'
import ClosingSection from '../components/closing/ClosingSection'
import Contact from '../components/contact/Contact'
import { mapOfLife, sectionIds } from '../data/content'

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

  // Cross-route and deep-link section navigation:
  // When a link with scrollTo or hash (#logos, #impact, etc.) is opened,
  // execute multi-pass scrolling so cold-load rendering, fonts, and images
  // don't leave the scroll stranded midway.
  useEffect(() => {
    let target = location.state?.scrollTo
    if (!target && typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim().toLowerCase()
      if (hash === 'logos' || hash === 'platforms') {
        target = 'logos'
      } else if (hash && sectionIds.includes(hash)) {
        target = hash
      }
    }

    if (!target) return

    const navHeight = 72
    let cancelled = false
    let userInteracted = false

    const onUserInteraction = () => {
      userInteracted = true
    }

    window.addEventListener('wheel', onUserInteraction, { passive: true })
    window.addEventListener('touchstart', onUserInteraction, { passive: true })
    window.addEventListener('pointerdown', onUserInteraction, { passive: true })
    window.addEventListener('keydown', onUserInteraction, { passive: true })

    const doScroll = (immediate = false) => {
      if (cancelled || userInteracted) return false
      const el = document.getElementById(target)
      if (!el) return false

      const rect = el.getBoundingClientRect()
      if (Math.abs(rect.top - navHeight) <= 6) return true

      const targetY = Math.max(0, rect.top + window.pageYOffset - navHeight)

      if (window.__lenis) {
        try {
          window.__lenis.scrollTo(targetY, { immediate, duration: immediate ? 0 : 0.6 })
        } catch {
          /* ignore */
        }
      }

      try {
        window.scrollTo({
          top: targetY,
          behavior: immediate ? 'auto' : 'smooth'
        })
      } catch {
        window.scrollTo(0, targetY)
      }

      return true
    }

    // Staggered passes as initial components mount
    const timers = [
      setTimeout(() => doScroll(false), 50),
      setTimeout(() => doScroll(false), 200),
      setTimeout(() => doScroll(false), 500),
      setTimeout(() => doScroll(false), 900),
      setTimeout(() => doScroll(false), 1500),
      setTimeout(() => doScroll(false), 2200),
      setTimeout(() => doScroll(false), 3000),
    ]

    // Continuous layout tracking: as lazy images above load and push layout down,
    // re-align until user interacts
    let resizeObserver = null
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      let prevHeight = document.body.scrollHeight
      resizeObserver = new ResizeObserver(() => {
        if (cancelled || userInteracted) return
        const currentHeight = document.body.scrollHeight
        if (Math.abs(currentHeight - prevHeight) > 20) {
          prevHeight = currentHeight
          doScroll(false)
        }
      })
      resizeObserver.observe(document.body)
    }

    // Font readiness
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled && !userInteracted) doScroll(false)
      })
    }

    // Window load event
    const onLoad = () => {
      if (!cancelled && !userInteracted) doScroll(false)
    }
    window.addEventListener('load', onLoad)

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      if (resizeObserver) resizeObserver.disconnect()
      window.removeEventListener('load', onLoad)
      window.removeEventListener('wheel', onUserInteraction)
      window.removeEventListener('touchstart', onUserInteraction)
      window.removeEventListener('pointerdown', onUserInteraction)
      window.removeEventListener('keydown', onUserInteraction)
    }
  }, [location.state?.scrollTo])

  // Mount-time scroll reset: only when arriving without any scrollTo or hash intent
  useEffect(() => {
    const hasIntent =
      Boolean(location.state?.scrollTo) ||
      (typeof window !== 'undefined' &&
        window.location.hash &&
        window.location.hash !== '#/' &&
        window.location.hash !== '#' &&
        window.location.hash !== '')

    if (!hasIntent) {
      window.scrollTo(0, 0)
    }
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

      {/* Map Architecture — interactive 8-act journey roadmap & illustrated canvas */}
      <MapSection />

      {/* Life Map & Milestones — A Life in Chapters */}
      <TimelineSection />

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
