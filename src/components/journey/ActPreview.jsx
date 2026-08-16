import { motion } from 'framer-motion'
import TextReveal from '../common/TextReveal'
import Frankieism from '../common/Frankieism'

const EASE = [0.22, 1, 0.36, 1]

// Legacy Act ids that must remain resolvable via getElementById (nav
// active-section detection and smooth-scroll lookups) even though
// preview sections carry their own preview ids.
const legacyAnchors = {
  becoming: 'building',
  'the-builder': 'building-through-boxing',
}

/**
 * ActPreview — short-form editorial preview of an Act on the Journey page.
 *
 * DOM order per preview:
 *   Act number eyebrow + serif title → shortIntro (italic serif) →
 *   shortBody paragraphs → photo block → THE HIGHLIGHT → "Read the full story →"
 *
 * Desktop: asymmetric two-column editorial composition with alternating
 * image placement per act. Mobile: single-column vertical flow.
 */
export default function ActPreview({ preview, index = 0 }) {
  const sectionId = preview.anchorId || preview.id
  const legacyId = legacyAnchors[preview.id]
  const imageLeft = index % 2 === 1 // alternate photo side per act

  return (
    <section
      id={sectionId}
      className="relative scroll-mt-[64px] md:scroll-mt-[76px]"
      style={{ backgroundColor: preview.color }}
    >
      {/* Legacy anchor target: under HashRouter these do NOT make URL-level
          #building anchors work — they exist purely as getElementById targets
          for nav smooth-scroll and active-section detection */}
      {legacyId && legacyId !== sectionId && (
        <div id={legacyId} aria-hidden="true" className="absolute top-0 left-0 w-px h-px" />
      )}
      <div className="pt-3 md:pt-5 pb-10 md:pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1180px] mx-auto">
          {/* ── Act number eyebrow + serif title (markup per ActSection) ── */}
          <div className="max-w-[760px] mb-6 md:mb-10">
            <motion.p
              className="font-sans text-xs uppercase tracking-[0.3em] mb-1.5"
              style={{ color: 'var(--text-primary, #2C2C2C)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Act {preview.number}
            </motion.p>

            <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[#2C2C2C] mb-2.5">
              <TextReveal
                text={preview.title}
                mode="word"
                staggerDelay={0.08}
                duration={0.7}
              />
            </h2>
          </div>

          {/* ── Editorial composition: narrative + photo ── */}
          <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-16 items-start">
            {/* Text column */}
            <div className={`max-w-[760px] ${imageLeft ? 'lg:order-2' : ''}`}>
              {/* Opening line */}
              <motion.p
                className="font-serif italic text-[#2C2C2C]"
                style={{
                  fontSize: 'clamp(1.25rem, 2.6vw, 1.9rem)',
                  lineHeight: 1.25,
                  marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: EASE }}
              >
                {preview.shortIntro}
              </motion.p>

              {/* Short-form story paragraphs */}
              <div className="space-y-[clamp(1.1rem,2.2vh,1.6rem)]">
                {preview.shortBody.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className="font-sans text-[#2C2C2C]"
                    style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', lineHeight: 1.6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: Math.min(i * 0.04, 0.2), ease: EASE }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Photo column */}
            <div
              className={`w-full max-w-[480px] mx-auto lg:mx-0 lg:max-w-none ${
                imageLeft ? 'lg:order-1 lg:sticky lg:top-28' : 'lg:sticky lg:top-28'
              }`}
            >
              <div className="space-y-6">
                {(preview.images || []).map((image, i) => (
                  <motion.figure
                    key={image.src}
                    className="bg-[#FDF5ED] p-2.5 md:p-3 pb-3.5 md:pb-4 rounded-sm shadow-[0_10px_30px_rgba(44,44,44,0.10)]"
                    style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)` }}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                  >
                    <div
                      className="w-full overflow-hidden"
                      style={{ aspectRatio: preview.images.length > 1 && i === 1 ? '4 / 3' : '4 / 5', maxHeight: '62vh' }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover block"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>

          {/* ── THE HIGHLIGHT + CTA ── */}
          <div className="max-w-[760px] mx-auto mt-8 md:mt-12 flex flex-col items-center text-center">
            <Frankieism
              label={preview.highlightLabel}
              compact
              text={preview.highlight}
              accentColor={preview.accent}
            />

            <motion.a
              href={preview.fullStoryUrl}
              className="group mt-3 md:mt-4 inline-flex items-baseline gap-2 font-serif italic text-lg md:text-xl text-[#2C2C2C] transition-opacity duration-300 hover:opacity-70"
              style={{ borderBottom: `1px solid ${preview.accent}55` }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              <span>Read the full story</span>
              <span
                aria-hidden="true"
                className="not-italic inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                style={{ color: preview.accent }}
              >
                →
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
