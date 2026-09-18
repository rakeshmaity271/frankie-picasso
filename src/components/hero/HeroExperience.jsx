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
        background: 'linear-gradient(135deg, #F9F5D7 0%, #F5EDDA 40%, #EDE4D3 70%, #E8DCC8 100%)',
      }}
    >
      {/* Stage spotlight — a soft radial glow from above center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(245,230,163,0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Theatrical curtain edges — subtle dark vignette on left and right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(44,44,44,0.06) 0%, transparent 15%, transparent 85%, rgba(44,44,44,0.06) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom curtain fade — creates depth as story begins below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(44,44,44,0.04) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Floating gradient orbs — warm neutral tones */}
      <motion.div
        ref={parallaxRef1}
        style={{ y: y1 }}
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F5E6A3] to-[#E8D5B5]" />
      </motion.div>

      <motion.div
        ref={parallaxRef2}
        style={{ y: y2 }}
        className="absolute top-[60%] right-[8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F0E0C8] to-[#E0D0B8]" />
      </motion.div>

      {/* Small warm accent orb */}
      <motion.div
        className="absolute top-[40%] left-[50%] w-[200px] h-[200px] rounded-full opacity-10 blur-[60px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F5E6A3 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* ── Hero Viewport: Eyebrow + Headline ── */}
      <div className="relative z-10 max-w-[760px] mx-auto text-center min-h-[55vh] flex flex-col items-center justify-center pt-14 md:pt-16">
        {/* Opening act label — subtle stage curtain call */}
        <motion.div
          className="flex items-center gap-3 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block w-8 md:w-12 h-[1px] bg-[#7A6545]/30" />
          <span className="font-sans text-[0.6rem] md:text-xs uppercase tracking-[0.3em] text-[#7A6545]/60">
            Act I
          </span>
          <span className="block w-8 md:w-12 h-[1px] bg-[#7A6545]/30" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="font-serif text-lg md:text-2xl lg:text-3xl font-light tracking-[0.15em] text-[#7A6545] mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Headline — "This isn't a résumé!" */}
        <h1 className="font-serif font-semibold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-[#2C2C2C] mb-4 md:mb-5">
          <TextReveal
            text={hero.headline}
            mode="word"
            staggerDelay={0.08}
            duration={0.7}
          />
        </h1>

        {/* Decorative divider below headline */}
        <motion.div
          className="w-16 h-[1px] bg-[#7A6545]/25 mb-6 md:mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Scroll down indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#4A4A4A]/60">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-[#7A6545]/40"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* ── Intro Script: "It's the story of an ordinary girl..." ── */}
      <div className="relative z-10 max-w-[760px] mx-auto text-center py-5 md:py-8">
        {preIntro.lines.map((line, i) => (
          <ScrollReveal key={i} variant="fadeIn" duration={1}>
            <p className={`font-serif leading-[1.5] text-[#2C2C2C] ${
              i === preIntro.lines.length - 1 ? 'mb-0' : 'mb-1.5 md:mb-2'
            } ${
              i === 1 ? 'text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-center italic text-[#7A6545]' :
              'text-lg md:text-xl lg:text-[1.35rem]'
            }`}>
              {line}
            </p>
          </ScrollReveal>
        ))}

        {/* Frankieism — "Belief is where every dream begins." */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="text-center mt-2 md:mt-3">
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-[#7A6545]/50 mb-1.5">
              Frankie'ism
            </p>
            <p className="font-serif italic text-[clamp(1.25rem,2.5vw,1.75rem)] text-[#2C2C2C]/70 whitespace-nowrap">
              {preIntro.frankieism}
            </p>
          </div>
        </ScrollReveal>

        {/* "Let's Begin..." transition */}
        <ScrollReveal variant="fadeIn" duration={1}>
          <div className="text-center mt-2 md:mt-3">
            <p className="font-serif font-light text-[clamp(1.5rem,3vw,2.25rem)] tracking-[0.05em] text-[#7A6545]/80">
              {preIntro.actTransition}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
