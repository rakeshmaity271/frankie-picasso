import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { navLinks, sectionIds } from '../../data/content'
import { journeyActs } from '../../data/journey'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const lastScrollY = useRef(0)
  const navRef = useRef(null)
  const pendingSection = useRef(null)
  const dropdownTimer = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const onJourney = location.pathname === '/'

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    setScrolled(currentY > 80)

    // Hide on scroll down, show on scroll up
    if (currentY > lastScrollY.current && currentY > 200) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastScrollY.current = currentY

    // Detect active section on landing page
    if (location.pathname === '/') {
      const sections = sectionIds.map((id) => document.getElementById(id))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // After returning to the Journey page from an act route, complete the
  // pending section scroll once the page has rendered.
  useEffect(() => {
    if (location.pathname !== '/' || !pendingSection.current) return
    const id = pendingSection.current
    pendingSection.current = null
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 })
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [location.pathname])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    setJourneyDropdownOpen(false)
    if (!onJourney) {
      pendingSection.current = id
      navigate('/', { state: { scrollTo: id } })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleLinkClick = (link) => {
    setJourneyDropdownOpen(false)
    if (link.route) {
      setMenuOpen(false)
      navigate(link.route.replace(/^#/, ''))
      return
    }
    scrollToSection(link.id)
  }

  const navigateToAct = (actId) => {
    setMenuOpen(false)
    setJourneyDropdownOpen(false)
    if (onJourney) {
      const el = document.getElementById(actId)
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 })
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    } else {
      pendingSection.current = actId
      navigate('/')
    }
  }

  return (
    <>
      <motion.header
        ref={navRef}
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          transition-all duration-500
          ${scrolled
            ? 'bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
          }
        `}
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[64px] md:h-[76px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (onJourney) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="font-serif text-lg md:text-xl font-medium tracking-wide text-[var(--text-primary,#2C2C2C)] hover:opacity-70 transition-opacity duration-300 cursor-pointer"
          >
            Frankie Picasso
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isJourney = link.id === 'where-belief-began'
              const isRouteActive = link.route && location.pathname === link.route.replace(/^#/, '')
              const isSectionActive = !link.route && onJourney && activeSection === link.id
              const isActive = isRouteActive || isSectionActive

              return (
                <li
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => {
                    if (isJourney) {
                      if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
                      setJourneyDropdownOpen(true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (isJourney) {
                      dropdownTimer.current = setTimeout(() => {
                        setJourneyDropdownOpen(false)
                      }, 180)
                    }
                  }}
                >
                  {link.route ? (
                    <Link
                      to={link.route.replace(/^#/, '')}
                      onClick={() => {
                        setMenuOpen(false)
                        setJourneyDropdownOpen(false)
                      }}
                      className={`
                        relative text-sm font-sans font-normal tracking-wide
                        transition-colors duration-300 cursor-pointer
                        py-1 inline-flex items-center gap-1
                        ${isActive
                          ? 'text-[var(--accent,#FFB400)]'
                          : 'text-[var(--text-primary,#2C2C2C)] hover:text-[var(--accent,#FFB400)]'
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`
                          absolute bottom-0 left-0 h-[1.5px] bg-[var(--accent,#FFB400)]
                          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${isActive ? 'w-full' : 'w-0'}
                        `}
                      />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(link)}
                      className={`
                        relative text-sm font-sans font-normal tracking-wide
                        transition-colors duration-300 cursor-pointer
                        py-1 inline-flex items-center gap-1
                        ${isActive
                          ? 'text-[var(--accent,#FFB400)]'
                          : 'text-[var(--text-primary,#2C2C2C)] hover:text-[var(--accent,#FFB400)]'
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      {isJourney && (
                        <svg
                          className={`w-3 h-3 opacity-60 transition-transform duration-200 ${journeyDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      <span
                        className={`
                          absolute bottom-0 left-0 h-[1.5px] bg-[var(--accent,#FFB400)]
                          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${isActive ? 'w-full' : 'w-0'}
                        `}
                      />
                    </button>
                  )}

                  {/* Acts I–VIII Desktop Dropdown */}
                  {isJourney && (
                    <AnimatePresence>
                      {journeyDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-[1050]"
                        >
                          <div className="bg-white/98 backdrop-blur-xl border border-[#E8DCC8] rounded-xl shadow-[0_16px_48px_rgba(44,28,16,0.14)] p-2">
                            <div className="px-3 py-1.5 border-b border-[#E8DCC8]/60 mb-1 flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B5FB0]">The Eight Acts</span>
                              <span className="text-[10px] text-[#4A4A4A]/60">Jump to Act</span>
                            </div>
                            <div className="space-y-0.5 max-h-[360px] overflow-y-auto">
                              {journeyActs.map((act) => (
                                <button
                                  key={act.id}
                                  onClick={() => navigateToAct(act.id)}
                                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-sans hover:bg-[#FAF3EA] transition-colors flex items-center justify-between group/act cursor-pointer"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-[11px] px-1.5 py-0.5 rounded-sm bg-[#FAF3EA] text-[#8B5FB0] group-hover/act:bg-[#8B5FB0] group-hover/act:text-white transition-colors">
                                      Act {act.number}
                                    </span>
                                    <span className="text-[#2C2C2C] font-medium group-hover/act:text-[#EE5802] transition-colors truncate max-w-[155px]">
                                      {act.title}
                                    </span>
                                  </div>
                                  {act.id === 'still-becoming' && (
                                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-[#3B5998]/12 text-[#3B5998] font-bold">
                                      Latest
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer z-[1010]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-[var(--text-primary,#2C2C2C)] origin-center"
              animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-[var(--text-primary,#2C2C2C)] origin-center"
              animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-[#FFF8F0]/98 backdrop-blur-xl flex flex-col items-center justify-center overflow-y-auto py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-[360px] px-6">
              {navLinks.map((link, i) => {
                const isRouteActive = link.route && location.pathname === link.route.replace(/^#/, '')
                const isSectionActive = !link.route && onJourney && activeSection === link.id
                const isActive = isRouteActive || isSectionActive

                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: i * 0.03, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full text-center flex flex-col items-center"
                  >
                    {link.route ? (
                      <Link
                        to={link.route.replace(/^#/, '')}
                        onClick={() => {
                          setMenuOpen(false)
                          setJourneyDropdownOpen(false)
                        }}
                        className={`
                          font-serif text-2xl sm:text-3xl font-light tracking-wide
                          transition-colors duration-300 cursor-pointer py-1
                          ${isActive
                            ? 'text-[#FFB400]'
                            : 'text-[#2C2C2C] hover:text-[#FFB400]'
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className={`
                          font-serif text-2xl sm:text-3xl font-light tracking-wide
                          transition-colors duration-300 cursor-pointer py-1
                          ${isActive
                            ? 'text-[#FFB400]'
                            : 'text-[#2C2C2C] hover:text-[#FFB400]'
                          }
                        `}
                      >
                        {link.label}
                      </button>
                    )}

                    {link.id === 'where-belief-began' && (
                      <div className="grid grid-cols-4 gap-1.5 w-full mt-2 mb-1 px-1">
                        {journeyActs.map((act) => (
                          <button
                            key={act.id}
                            onClick={() => navigateToAct(act.id)}
                            className={`px-2 py-1.5 rounded-lg text-xs font-sans text-center transition-colors cursor-pointer ${
                              act.id === 'still-becoming'
                                ? 'bg-[#3B5998]/15 border border-[#3B5998]/40 text-[#3B5998] font-bold'
                                : 'bg-white/80 border border-[#E8DCC8] text-[#2C2C2C]'
                            }`}
                          >
                            Act {act.number}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
