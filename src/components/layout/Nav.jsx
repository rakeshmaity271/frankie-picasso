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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    if (!menuRef.current) return
    const items = menuRef.current.querySelectorAll('li')
    if (mobileOpen) {
      gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' })
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
      const y = el.getBoundingClientRect().top + window.scrollY - 60
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo('hero')} aria-label="Go to top">
          <img src="/logo.png" alt="Frankie Picasso" className={styles.logoImage} />
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.desktopLink} ${activeId === link.id ? styles.active : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
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
        <div className={styles.menuContent}>
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
          <div className={styles.menuFooter}>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>LinkedIn</a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>Twitter</a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>Instagram</a>
            </div>
            <button className={styles.contactBtn} onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
