import styles from './SectionHeading.module.css'

export default function SectionHeading({ number, title, subtitle, light = false }) {
  return (
    <div className={`${styles.heading} ${light ? styles.light : ''}`}>
      {number && (
        <span className={styles.number} aria-hidden="true">{number}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} aria-hidden="true" />
    </div>
  )
}
