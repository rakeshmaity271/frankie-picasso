import { useEffect, useState, useCallback, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SiteLoader from './components/common/SiteLoader'
import JourneyPage from './pages/JourneyPage'
import { useLenis } from './hooks/useLenis'
import { MapProvider } from './context/MapContext'
import MapOfLife from './components/map/MapOfLife'
import PuzzleReveal from './components/map/PuzzleReveal'
import MapProgress from './components/map/MapProgress'
import { sectionIds } from './data/content'

// Act pages are lazy-loaded to keep the initial bundle lean;
// JourneyPage stays eager as the landing experience.
const ActPage = lazy(() => import('./pages/ActPage'))

/**
 * LegacySectionRedirect — catch-all for old bookmark-style URLs like
 * site/#contact, #books, #building. If the path segment is a known
 * section id, redirect home with scroll intent; otherwise just go home.
 */
function LegacySectionRedirect() {
  const location = useLocation()
  const segment = location.pathname.replace(/^\//, '')
  if (segment && sectionIds.includes(segment)) {
    return <Navigate to="/" replace state={{ scrollTo: segment }} />
  }
  return <Navigate to="/" replace />
}

/**
 * App shell — global chrome (loader, scroll progress, nav, footer,
 * Map of a Life overlays) plus hash routing:
 *   '/'          → JourneyPage (hero + 5 Act previews + supporting sections)
 *   '/act/:actId' → ActPage (full Act stories and themed sections)
 */
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
    <MapProvider>
    <div className="min-h-screen">
      <SiteLoader />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Skip link — onClick scroll because HashRouter owns the URL hash */}
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault()
          const main = document.getElementById('main')
          if (main) {
            main.setAttribute('tabindex', '-1')
            main.focus({ preventScroll: true })
            main.scrollIntoView()
          }
        }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<JourneyPage />} />
            <Route path="/act/:actId" element={<ActPage />} />
            <Route path="*" element={<LegacySectionRedirect />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* The Map of a Life — global overlays */}
      <MapOfLife />
      <PuzzleReveal />
      <MapProgress />
    </div>
    </MapProvider>
  )
}

export default App
