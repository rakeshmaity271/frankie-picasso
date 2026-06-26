import { useState, useEffect } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { sectionIds, actColors } from '../../data/content'
import styles from './SectionIndicator.module.css'

const dotColors = {
  hero: '#C5A55A',
  ...actColors,
  closing: '#C5A55A',
  contact: '#C5A55A'
}

export default function SectionIndicator() {
  const activeId = useActiveSection(sectionIds)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`${styles.indicator} ${visible ? styles.visible : ''}`}
      aria-label="Section navigation"
    >
      {sectionIds.map((id) => (
        <button
          key={id}
          className={`${styles.dot} ${activeId === id ? styles.active : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${id}`}
          aria-current={activeId === id ? 'true' : undefined}
          style={{ '--dot-color': dotColors[id] || '#C5A55A' }}
        />
      ))}
    </nav>
  )
}
