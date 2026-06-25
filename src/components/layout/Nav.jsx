import { useState, useEffect, useRef } from 'react'
import { gsap, useGSAP } from '../../hooks/useGsap'
import { useActiveSection } from '../../hooks/useActiveSection'
import { sectionIds, navLinks } from '../../data/content'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    if (!menuRef.current) return
    const items = menuRef.current.querySelectorAll('li')
    if (mobileOpen) {
      gsap.fromTo(items, { opacity: 0, x: 40 }, { opacity: 1, x: 0, stagger: 0.06, duration: 0.4, ease: 'power2.out' })
    }
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo('hero')} aria-label="Go to top">
          Frankie Picasso
        </button>

        <nav aria-label="Main navigation" className={styles.desktopNav}>
          <ul>
            {navLinks.slice(1).map((link) => (
              <li key={link.id}>
                <button
                  className={`${styles.navLink} ${activeId === link.id ? styles.active : ''}`}
                  onClick={() => scrollTo(link.id)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul ref={menuRef}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`${styles.mobileLink} ${activeId === link.id ? styles.active : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
