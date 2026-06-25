import styles from './PlaceholderImage.module.css'

export default function PlaceholderImage({ label = 'Photo', aspectRatio = '16/9', className = '' }) {
  return (
    <div
      className={`${styles.placeholder} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className={styles.inner}>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}
