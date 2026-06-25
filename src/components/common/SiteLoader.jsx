import { useState, useEffect } from 'react'
import styles from './SiteLoader.module.css'

export default function SiteLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited')
    
    if (hasVisited) {
      setLoading(false)
      return
    }

    // Mark as visited
    sessionStorage.setItem('hasVisited', 'true')

    // Minimum display time for loader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}>
        <img src="/logo.png" alt="Frankie Picasso" className={styles.loaderLogo} />
        <div className={styles.loaderWordmark}>
          <span className={styles.loaderText}>FRANKIE PICASSO</span>
          <div className={styles.loaderDivider}>
            <span className={styles.loaderDividerLine} />
            <span className={styles.loaderDividerDot} />
            <span className={styles.loaderDividerLine} />
          </div>
        </div>
      </div>
    </div>
  )
}
