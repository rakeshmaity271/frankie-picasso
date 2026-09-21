import { motion } from 'framer-motion'
import { content } from '../../data/content'
import TextReveal from '../common/TextReveal'
import ScrollReveal from '../common/ScrollReveal'
import { useParallax } from '../../hooks/useScrollAnimation'

export default function HeroExperience() {
  const hero = content?.hero
  const preIntro = content?.preAct1Intro
  const { ref: parallaxRef1, y: y1 } = useParallax(0.2)
  const { ref: parallaxRef2, y: y2 } = useParallax(0.35)

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-hidden px-6 md:px-10 lg:px-16"
      style={{
        background: 'radial-gradient(ellipse 90% 65% at 50% 0%, #FFFBF5 0%, #FDF4E7 35%, #F8EAD6 70%, #F0DEC5 100%)',
      }}
    >
      {/* Studio spotlight — a warm golden glow from above */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 15%, rgba(255, 180, 0, 0.18) 0%, rgba(223, 60, 181, 0.05) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Theatrical curtain edges — subtle warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(44,28,16,0.05) 0%, transparent 15%, transparent 85%, rgba(44,28,16,0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom curtain fade — creates seamless organic depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(44,28,16,0.04) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Floating gradient orbs — Frankie's vibrant artistic palette */}
      <motion.div
        ref={parallaxRef1}
        style={{ y: y1 }}
        className="absolute top-[10%] left-[8%] w-[320px] h-[320px] md:w-[540px] md:h-[540px] rounded-full opacity-25 blur-[90px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFB400] via-[#FF7C15] to-[#DF3CB5]" />
      </motion.div>

      <motion.div
        ref={parallaxRef2}
        style={{ y: y2 }}
        className="absolute top-[45%] right-[6%] w-[280px] h-[280px] md:w-[460px] md:h-[460px] rounded-full opacity-20 blur-[90px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#DF3CB5] via-[#ED4672] to-[#FFB400]" />
      </motion.div>

      {/* Small radiant gold accent orb */}
      <motion.div
        className="absolute top-[35%] left-[52%] w-[220px] h-[220px] rounded-full opacity-18 blur-[70px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FFB400 0%, #FF7C15 40%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.24, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* ── Hero Viewport: Eyebrow + Headline + Personality Note ── */}
      <div className="relative z-10 max-w-[820px] mx-auto text-center min-h-[58vh] flex flex-col items-center justify-center pt-14 md:pt-18">
        {/* Multi-hyphenate artist credential pill badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#FFB400]/40 shadow-[0_2px_12px_rgba(255,180,0,0.12)] mb-5"
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF7C15] animate-pulse" />
          <span className="font-sans text-[0.68rem] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#9E3E0C]">
            Artist • Author • Broadcaster • Champion
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="font-serif text-lg md:text-2xl lg:text-3xl font-light tracking-[0.12em] text-[#7A4B23] mb-2 md:mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Headline — "This isn't a résumé!" */}
        <div className="relative inline-block mb-3 md:mb-4">
          <h1 className="font-serif font-semibold text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.08] tracking-[-0.02em] text-[#241E1A]">
            <TextReveal
              text={hero.headline}
              mode="word"
              staggerDelay={0.08}
              duration={0.7}
            />
          </h1>
          {/* Hand-painted gold brush underline */}
          <motion.svg
            className="w-44 md:w-64 h-3 mx-auto mt-1 text-[#FFB400]"
            viewBox="0 0 240 12"
            fill="none"
            preserveAspectRatio="none"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <path
              d="M3 9C65 3 175 2 237 8"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>

        {/* Frankie's personal handwritten welcome note */}
        <motion.div
          className="my-5 max-w-[620px] mx-auto px-5 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-[#FFB400]/30 shadow-[0_8px_24px_rgba(44,28,16,0.06)] transform -rotate-[0.8deg] hover:rotate-0 transition-transform duration-400"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-handwritten text-xl md:text-2xl text-[#873600] leading-snug">
            “Come take a walk with me through time. It’s loud, it’s messy, it’s colourful—and it’s proof that impossible is often just another word for ‘not yet.’”
          </p>
          <p className="font-serif italic text-xs text-[#9E3E0C] text-right mt-1 font-medium">
            — Frankie Picasso
          </p>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#7A4B23]/70 font-medium">
            Explore The Story
          </span>
          <motion.div
            className="w-[1.5px] h-9 bg-gradient-to-b from-[#FF7C15] to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* ── Intro Script: "It's the story of an ordinary girl..." ── */}
      <div className="relative z-10 max-w-[780px] mx-auto text-center py-6 md:py-10">
        {preIntro.lines.map((line, i) => (
          <ScrollReveal key={i} variant="fadeIn" duration={1}>
            <p
              className={`font-serif leading-[1.5] text-[#241E1A] ${
                i === preIntro.lines.length - 1 ? 'mb-0' : 'mb-2 md:mb-2.5'
              } ${
                i === 1
                  ? 'text-[clamp(1.75rem,4vw,2.8rem)] font-bold text-center italic text-[#C24E1A] drop-shadow-sm my-2'
                  : 'text-lg md:text-xl lg:text-[1.38rem]'
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}

        {/* Frankieism — "Belief is where every dream begins." */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="text-center mt-4 md:mt-5 p-4 rounded-xl bg-white/50 backdrop-blur-xs border border-[#FFB400]/25 max-w-lg mx-auto">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-[#C24E1A] font-semibold mb-1.5">
              Frankie'ism
            </p>
            <p className="font-serif italic text-[clamp(1.3rem,2.6vw,1.85rem)] text-[#241E1A] leading-relaxed">
              {preIntro.frankieism}
            </p>
          </div>
        </ScrollReveal>

        {/* "Let's Begin..." transition */}
        <ScrollReveal variant="fadeIn" duration={1}>
          <div className="text-center mt-5 md:mt-6">
            <p className="font-serif font-light text-[clamp(1.6rem,3.2vw,2.4rem)] tracking-[0.05em] text-[#9E3E0C]">
              {preIntro.actTransition}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
