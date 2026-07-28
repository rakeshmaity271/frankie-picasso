import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * MamaBearFinale — the emotional conclusion of Act VI and the entire journey.
 *
 * Designed as the closing scene of a documentary: a dark, museum-quality
 * frame built around Frankie's Grizzly Bear painting, her words revealed
 * line by line, landing on one unforgettable title — Mama Bear — and one
 * unforgettable word — Unstoppable.
 *
 * Palette: #111111 -> #000000 background, warm white #F5F5F5 text,
 * muted gold #C7A86D accent. The painting stays vibrant and untouched.
 */

const EASE = [0.22, 1, 0.36, 1]
const EASE_CINEMATIC = [0.16, 1, 0.3, 1]

const GOLD = '#C7A86D'
const WARM_WHITE = '#F5F5F5'

/* ----- Motion variants ----- */

// Staggered line-by-line reveal for the quote + attributes
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.55, delayChildren: 0.25 } },
}

const line = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1.3, ease: EASE } },
}

/* ----- Content ----- */

const names = ['daughter,', 'wife,', 'mother,', 'entrepreneur,', 'broadcaster,', 'survivor...']

const attributes = ['She adapts.', 'She protects.', 'She nurtures.', 'She fights when she must.', 'And she keeps going.']

/* ----- Ambient particles ----- */

function Particles({ count = 24 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.6 + 1.2,
        duration: Math.random() * 9 + 9,
        delay: Math.random() * 8,
        peak: Math.random() * 0.3 + 0.08,
        gold: Math.random() > 0.45,
      })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.gold ? GOLD : WARM_WHITE,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, p.peak, 0], y: [0, -46, -92] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ----- The Finale ----- */

export default function MamaBearFinale() {
  return (
    <section
      id="mama-bear"
      aria-label="Mama Bear — the finale"
      className="relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 55%, #000000 100%)' }}
    >
      {/* ============================================================
          MOMENT 1 — The Painting
          ============================================================ */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28">
        {/* Soft spotlight behind the painting */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] md:w-[900px] h-[130vw] md:h-[900px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(199,168,109,0.13) 0%, rgba(199,168,109,0.05) 38%, transparent 68%)' }}
          aria-hidden="true"
        />
        {/* Vignette darkening the edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.6) 100%)' }}
          aria-hidden="true"
        />
        <Particles />

        {/* Museum label */}
        <motion.p
          className="relative font-sans text-[0.7rem] md:text-xs tracking-[0.4em] uppercase mb-12 md:mb-16"
          style={{ color: 'rgba(199,168,109,0.75)' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          Act VI &middot; Finale
        </motion.p>

        {/* The painting — dominant, slightly oversized */}
        <motion.div
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 44 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.2, ease: EASE_CINEMATIC }}
        >
          <img
            src="/mama-bear.jpg"
            alt="Mama Bear — a vibrant painting of a grizzly bear mid-roar, rendered in bold strokes of gold, teal, purple and orange"
            className="w-full h-auto select-none"
            style={{
              boxShadow: '0 40px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(199,168,109,0.14)',
            }}
            draggable="false"
          />
        </motion.div>
      </div>

      {/* ============================================================
          MOMENT 2 — The Quote
          ============================================================ */}
      <motion.div
        className="relative max-w-3xl mx-auto px-6 pt-8 pb-28 md:pb-40"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={line}
          className="font-serif italic leading-snug"
          style={{ color: WARM_WHITE, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
        >
          &ldquo;I&rsquo;ve worn many names in my life...
        </motion.p>

        {/* The names, one per line */}
        <div className="mt-12 md:mt-16 space-y-3 md:space-y-4">
          {names.map((name) => (
            <motion.p
              key={name}
              variants={line}
              className="font-serif"
              style={{ color: 'rgba(245,245,245,0.92)', fontSize: 'clamp(1.35rem, 2.6vw, 2rem)', lineHeight: 1.3 }}
            >
              {name}
            </motion.p>
          ))}
        </div>

        <motion.p
          variants={line}
          className="font-serif italic mt-14 md:mt-20 leading-snug"
          style={{ color: WARM_WHITE, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
        >
          but if I had to choose just one...
        </motion.p>

        <motion.p
          variants={line}
          className="font-serif italic mt-6 md:mt-8 leading-snug"
          style={{ color: 'rgba(245,245,245,0.75)', fontSize: 'clamp(1.35rem, 2.6vw, 2rem)' }}
        >
          I&rsquo;d choose...
        </motion.p>

        {/* Mama Bear — the title */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 34 },
            show: { opacity: 1, y: 0, transition: { duration: 1.9, ease: EASE_CINEMATIC } },
          }}
          className="font-serif mt-14 md:mt-20 leading-none"
          style={{
            color: GOLD,
            fontSize: 'clamp(3.25rem, 9vw, 6.5rem)',
            letterSpacing: '0.01em',
            textShadow: '0 0 46px rgba(199,168,109,0.35)',
          }}
        >
          Mama Bear.&rdquo;
        </motion.h2>
      </motion.div>

      {/* ============================================================
          MOMENT 3 — What a Mama Bear is
          ============================================================ */}
      <motion.div
        className="relative max-w-2xl mx-auto px-6 pb-32 md:pb-44"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={line}
          className="font-serif italic leading-snug"
          style={{ color: WARM_WHITE, fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}
        >
          A mama bear doesn&rsquo;t stop.
        </motion.p>

        <div className="mt-12 md:mt-16 space-y-4 md:space-y-5">
          {attributes.map((attr) => (
            <motion.p
              key={attr}
              variants={line}
              className="font-serif"
              style={{ color: 'rgba(245,245,245,0.9)', fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', lineHeight: 1.35 }}
            >
              {attr}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* ============================================================
          MOMENT 4 — Unstoppable.
          ============================================================ */}
      <div className="relative min-h-[85vh] flex items-center justify-center px-6 pb-36 md:pb-48">
        {/* Breathing gold glow behind the word */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[720px] h-[60vh] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(199,168,109,0.14) 0%, transparent 65%)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 0.6, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <motion.h2
          className="relative font-serif leading-none select-none"
          style={{
            color: WARM_WHITE,
            fontSize: 'clamp(3.5rem, 11vw, 8.5rem)',
            letterSpacing: '0.06em',
            textShadow: '0 0 30px rgba(199,168,109,0.45), 0 0 80px rgba(199,168,109,0.25)',
          }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2.4, ease: EASE_CINEMATIC }}
        >
          Unstoppable.
        </motion.h2>
      </div>
    </section>
  )
}
