import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../common/SectionHeading'
import { content } from '../../data/content'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  useScrollReveal(sectionRef, { animation: 'fade-up' })

  const data = content.contact

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={`section-padding ${styles.section}`} ref={sectionRef} aria-label="Contact">
      <div className="container">
        <SectionHeading number="11" title="Get in Touch" subtitle={data.intro} />

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Media Inquiries</h3>
              <a href={`mailto:${data.email}`} className={styles.email}>{data.email}</a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Speaking Topics</h3>
              <ul className={styles.topicsList}>
                {data.speakingTopics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoLabel}>Connect</h3>
              <div className={styles.socials}>
                {data.socials.map((social, i) => (
                  <a key={i} href={social.url} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.thankYou}>
                <h3 className={styles.thankYouTitle}>Thank You</h3>
                <p>Your message has been received. We&rsquo;ll be in touch soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input type="text" id="name" name="name" required className={styles.input} placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" required className={styles.input} placeholder="your@email.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <select id="subject" name="subject" className={styles.input} required>
                    <option value="">Select a topic</option>
                    <option value="media">Media Inquiry</option>
                    <option value="speaking">Speaking Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="message" rows="5" required className={styles.input} placeholder="Your message..." />
                </div>
                <button type="submit" className={styles.submit}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
