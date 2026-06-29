import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { content } from '../../data/content'
import styles from './WhoIsFrankie.module.css'

export default function WhoIsFrankie() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const data = content.whoIsFrankie

  return (
    <section id="who-is-frankie" className={styles.section} aria-label="Who Is Frankie?">
      <div className={styles.content} ref={sectionRef}>
        <h2 className={styles.title}>{data.title}</h2>

        <div className={styles.block}>
          <p className={styles.opening}>{data.opening}</p>
          <p className={styles.body}>{data.openingFollow}</p>
        </div>

        <ul className={styles.builtList}>
          {data.builtList.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        <div className={styles.block}>
          <p className={styles.body}>{data.thread}</p>
          <p className={styles.belief}>&ldquo;{data.belief}&rdquo;</p>
          <p className={styles.body}>{data.beliefFollow}</p>
        </div>

        <div className={styles.block}>
          <p className={styles.body}>{data.roles}</p>
          <p className={styles.body}>{data.rolesFollow}</p>
        </div>

        <div className={styles.valuesBlock}>
          <p className={styles.body}>{data.valuesIntro}</p>
          <div className={styles.values}>
            {data.values.map((v, i) => (
              <div key={i} className={styles.valueItem}>
                <span className={styles.valueLabel}>{v.label}</span>
                <span className={styles.valueReason}>{v.reason}</span>
              </div>
            ))}
          </div>
          <p className={styles.body}>{data.valuesFollow}</p>
        </div>

        <div className={styles.block}>
          <p className={styles.body}>{data.question}</p>
          <p className={styles.body}>{data.answer}</p>
          <ul className={styles.followedList}>
            {data.followedList.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.body}>{data.today}</p>
        </div>

        <div className={styles.closingBlock}>
          <p className={styles.body}>{data.closing}</p>
          <p className={styles.body}>{data.closingFollow}</p>
          <p className={styles.finalThought}>{data.finalThought}</p>
          <p className={styles.finalLine}>{data.finalLine}</p>
          <p className={styles.ctaLine}>{data.cta}</p>
        </div>
      </div>
    </section>
  )
}
