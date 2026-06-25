import styles from './SectionHeading.module.css'

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className={`${styles.heading} ${light ? styles.light : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} aria-hidden="true" />
    </div>
  )
}
