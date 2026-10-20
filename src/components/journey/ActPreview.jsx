import { motion } from 'framer-motion'
import TextReveal from '../common/TextReveal'

const EASE = [0.22, 1, 0.36, 1]

// Legacy Act ids that must remain resolvable via getElementById (nav
// active-section detection and smooth-scroll lookups) even though
// preview sections carry their own preview ids.
const legacyAnchors = {
  becoming: 'building',
  'the-builder': 'building-through-boxing',
}

// Authentic personal margin notes from Frankie bringing her personality and voice directly into each Act preview
const frankieNotes = {
  'where-belief-began': "“Nickname: ‘Iwanna’—because one dream at a time was never going to be enough!”",
  'becoming': "“One boss asked me to sell less because I was ‘demoralizing the men.’ I took that as my cue to aim higher.”",
  'the-builder': "“Promoting world championship title fights on ESPN—in heels, naturally.”",
  'the-leader': "“144 flights up the CN Tower. My colleague took 14 minutes. I took 45. But I didn't stop.”",
  'the-survivor': "“When life strips away everything you thought you were, you discover who was underneath all along.”",
  'coming-home': "“Every single morning in recovery: lipstick first. It was my war paint.”",
  'beginning-again': "“Retirement at 65? Not for this Glamma. Thirteen grandchildren with birthdays every month!”",
  'still-becoming': "“Terrible at standing still. And honestly? Thank goodness for that.”",
}

/**
 * PhotoFigure — one polaroid-framed photo in the act's photo column.
 * `large` controls the album rhythm: one dominant print vs tucked snapshots.
 */
function PhotoFigure({ image, delay = 0, rotate = -1.2, large = false, className = '' }) {
  return (
    <motion.figure
      className={`bg-[#FAF6F0] ${large ? 'p-3 sm:p-3.5 pb-3.5 sm:pb-4' : 'p-2.5 sm:p-3 pb-3 sm:pb-3.5'} rounded-sm shadow-[0_12px_36px_rgba(44,28,16,0.12)] border border-[#E8DCC8]/70 transition-transform duration-500 hover:rotate-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      <div className="w-full overflow-hidden rounded-[2px] border border-black/[0.08] bg-white flex items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full h-auto ${large ? 'max-h-[380px] sm:max-h-[440px] md:max-h-[480px]' : 'max-h-[170px] sm:max-h-[200px]'} object-contain rounded-[2px] transition-transform duration-500 hover:scale-[1.01]`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {image.caption && (
        <div className={`text-center px-1 ${large ? 'mt-2.5 sm:mt-3' : 'mt-1.5'}`}>
          <p className={`font-serif italic text-[#4A4A4A] leading-snug ${large ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-[11px]'}`}>
            {image.caption}
          </p>
        </div>
      )}
    </motion.figure>
  )
}

/**
 * ActPreview — short-form editorial preview of an Act on the Journey page.
 *
 * DOM order per preview:
 *   Act badge + serif title + handwritten note → shortIntro (italic serif) →
 *   shortBody paragraphs → photo block → THE HIGHLIGHT (Artistic Plaque) → "Read the full story →"
 *
 * Desktop: asymmetric two-column editorial composition with alternating
 * image placement per act. Mobile: single-column vertical flow.
 */
export default function ActPreview({ preview, index = 0 }) {
  const sectionId = preview.anchorId || preview.id
  const legacyId = legacyAnchors[preview.id]
  const imageLeft = index % 2 === 1 // alternate photo side per act
  const photoLayout = preview.imageLayout || ((preview.images?.length ?? 0) > 1 ? 'hero' : 'single')

  return (
    <section
      id={sectionId}
      className="relative scroll-mt-[64px] md:scroll-mt-[76px] overflow-hidden"
      style={{ backgroundColor: preview.color }}
    >
      {/* Soft ambient painterly wash in the corner */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ backgroundColor: preview.accent }}
        aria-hidden="true"
      />

      {/* Legacy anchor target: under HashRouter these do NOT make URL-level
          #building anchors work — they exist purely as getElementById targets
          for nav smooth-scroll and active-section detection */}
      {legacyId && legacyId !== sectionId && (
        <div id={legacyId} aria-hidden="true" className="absolute top-0 left-0 w-px h-px" />
      )}
      <div className="pt-3 md:pt-5 pb-10 md:pb-16 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-[1180px] mx-auto">
          {/* ── Act number eyebrow badge + serif title + Frankie's personal aside ── */}
          <div className="max-w-[800px] mb-6 md:mb-10">
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase shadow-xs border"
                style={{
                  backgroundColor: `${preview.accent}18`,
                  borderColor: `${preview.accent}40`,
                  color: preview.accent,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preview.accent }} />
                Act {preview.number}
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#4A4A4A]/60 hidden sm:inline">
                The Journey
              </span>
            </motion.div>

            <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[#241E1A] mb-2.5">
              <TextReveal
                text={preview.title}
                mode="word"
                staggerDelay={0.08}
                duration={0.7}
              />
            </h2>

            {/* Frankie's personal handwritten margin note */}
            {frankieNotes[preview.id] && (
              <motion.div
                className="inline-flex items-center gap-2 mt-1 mb-2 px-3.5 py-1.5 rounded-lg bg-white/60 backdrop-blur-xs border border-black/[0.06] shadow-[0_2px_8px_rgba(44,28,16,0.04)]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              >
                <span className="font-handwritten text-lg md:text-xl text-[#7A3E12] leading-snug">
                  {frankieNotes[preview.id]}
                </span>
                <span className="font-serif italic text-xs text-[#9E3E0C] font-semibold flex-shrink-0">
                  — Frankie
                </span>
              </motion.div>
            )}
          </div>

          {/* ── Editorial composition: narrative + photo ── */}
          <div className={`grid gap-10 lg:gap-16 items-start ${
            preview.images?.length ? 'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]' : ''
          }`}>
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

            {/* Photo column — uncropped archival presentation, mobile-friendly */}
            {preview.images?.length > 0 && (
            <div
              className={`w-full max-w-[420px] mx-auto lg:mx-0 lg:max-w-none ${
                imageLeft ? 'lg:order-1 lg:sticky lg:top-28' : 'lg:sticky lg:top-28'
              }`}
            >
              {photoLayout === 'reveal' ? (
                /* Act I album reveal — the childhood print is the anchor; the dad
                   photo tucks out from behind it instead of sitting as a twin */
                <div className="relative max-w-[440px] mx-auto lg:mx-0">
                  <div className="relative z-10">
                    <PhotoFigure image={preview.images[0]} rotate={-1.8} large />
                  </div>
                  <div className="relative z-0 -mt-10 sm:-mt-14 w-[74%] ml-auto">
                    <PhotoFigure image={preview.images[1]} rotate={4.5} delay={0.3} />
                  </div>
                </div>
              ) : photoLayout === 'hero' ? (
                /* One dominant print with smaller candids tucked below at varied angles */
                <div className="max-w-[440px] mx-auto lg:mx-0">
                  <PhotoFigure image={preview.images[0]} rotate={index % 2 === 0 ? -1.5 : 1.5} large />
                  {preview.images.length > 1 && (
                    <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 mt-3.5 sm:mt-4">
                      {preview.images.slice(1).map((image, i, rest) => (
                        <PhotoFigure
                          key={image.src}
                          image={image}
                          delay={0.15 + i * 0.12}
                          rotate={i % 2 === 0 ? 3 : -2.5}
                          className={rest.length % 2 === 1 && i === rest.length - 1 ? 'col-span-2 max-w-[62%] mx-auto' : ''}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="max-w-[360px] sm:max-w-[390px] mx-auto lg:mx-0">
                  <PhotoFigure
                    image={preview.images[0]}
                    rotate={index % 2 === 0 ? -1.2 : 1.2}
                    large
                  />
                </div>
              )}
            </div>
            )}
          </div>

          {/* ── THE HIGHLIGHT (Artistic Exhibition Plaque) + CTA ── */}
          <div className="max-w-[780px] mx-auto mt-10 md:mt-14 flex flex-col items-center text-center">
            <motion.div
              className="relative w-full p-6 md:p-8 rounded-2xl bg-white/75 backdrop-blur-md shadow-[0_8px_30px_rgba(44,28,16,0.06)] border transition-all duration-400"
              style={{ borderColor: `${preview.accent}35` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {/* Soft decorative glow */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-20"
                style={{ backgroundColor: preview.accent }}
              />

              <p
                className="font-sans text-[0.68rem] md:text-xs font-semibold uppercase tracking-[0.35em] mb-3"
                style={{ color: preview.accent }}
              >
                {preview.highlightLabel}
              </p>

              <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#241E1A] leading-relaxed max-w-2xl mx-auto">
                &ldquo;{preview.highlight}&rdquo;
              </p>

              <div
                className="w-12 h-1 rounded-full mx-auto mt-4"
                style={{ backgroundColor: preview.accent }}
              />
            </motion.div>

            <motion.a
              href={preview.fullStoryUrl}
              className="group mt-6 md:mt-8 inline-flex items-center gap-3 px-8 py-3.5 md:px-10 md:py-4 rounded-full border shadow-sm transition-all duration-400 hover:shadow-md hover:-translate-y-0.5"
              style={{
                borderColor: `${preview.accent}50`,
                backgroundColor: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${preview.accent}12`
                e.currentTarget.style.borderColor = preview.accent
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'
                e.currentTarget.style.borderColor = `${preview.accent}50`
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">
                Read the Full Story
              </span>
              <span
                aria-hidden="true"
                className="not-italic inline-block text-lg transition-transform duration-400 group-hover:translate-x-1.5"
                style={{ color: preview.accent }}
              >
                &rarr;
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
