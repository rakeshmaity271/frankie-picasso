import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, sectionIds } from '../../data/content'
import { useMap } from '../../context/MapContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const lastScrollY = useRef(0)
  const navRef = useRef(null)
  const { openMap, count } = useMap()

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

    // Detect active section
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
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          <button
            onClick={() => scrollToSection('hero')}
            className="font-serif text-lg md:text-xl font-medium tracking-wide text-[var(--text-primary,#2C2C2C)] hover:opacity-70 transition-opacity duration-300 cursor-pointer"
          >
            Frankie Picasso
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    relative text-sm font-sans font-normal tracking-wide
                    transition-colors duration-300 cursor-pointer
                    py-1
                    ${activeSection === link.id
                      ? 'text-[var(--accent,#FFB400)]'
                      : 'text-[var(--text-primary,#2C2C2C)] hover:text-[var(--accent,#FFB400)]'
                    }
                  `}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[1.5px] bg-[var(--accent,#FFB400)]
                      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${activeSection === link.id ? 'w-full' : 'w-0'}
                    `}
                  />
                </button>
              </li>
            ))}
            {/* The Map link */}
            <li>
              <button
                onClick={openMap}
                className="relative text-sm font-sans font-normal tracking-wide transition-colors duration-300 cursor-pointer py-1 text-[var(--text-primary,#2C2C2C)] hover:text-[#FFB400]"
              >
                The Map{count > 0 && <span className="ml-1 text-[#FFB400]">({count})</span>}
              </button>
            </li>
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
            className="fixed inset-0 z-[999] bg-[#FFF8F0]/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`
                      font-serif text-3xl md:text-4xl font-light tracking-wide
                      transition-colors duration-300 cursor-pointer
                      ${activeSection === link.id
                        ? 'text-[#FFB400]'
                        : 'text-[#2C2C2C] hover:text-[#FFB400]'
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              {/* The Map link (mobile) */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => { setMenuOpen(false); openMap() }}
                  className="font-serif text-3xl md:text-4xl font-light tracking-wide text-[#2C2C2C] hover:text-[#FFB400] transition-colors duration-300 cursor-pointer"
                >
                  The Map{count > 0 && <span className="ml-2 text-[#FFB400] text-xl">({count})</span>}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
