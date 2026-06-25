import { navLinks } from '../../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.goldLine} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Frankie Picasso" className={styles.brandLogo} />
          <h3 className={styles.brandName}>Frankie Picasso</h3>
          <p className={styles.tagline}>Building Platforms for People, Ideas, and Impact.</p>
          <a href="https://frankiepicasso.com" className={styles.websiteUrl}>frankiepicasso.com</a>
        </div>

        <nav aria-label="Footer navigation" className={styles.links}>
          <h4 className={styles.heading}>Navigate</h4>
          <ul>
            {navLinks.slice(1, 7).map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)}>{link.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.links}>
          <h4 className={styles.heading}>Explore</h4>
          <ul>
            {navLinks.slice(7).map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)}>{link.label}</button>
              </li>
            ))}
          </ul>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>LinkedIn</a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>Twitter</a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>Instagram</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} Frankie Picasso. All rights reserved.</p>
        <p className={styles.credits}>Designed with intention.</p>
      </div>
    </footer>
  )
}
