import { useRef } from 'react'
import { motion } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import MagneticButton from '../common/MagneticButton'
import { useParallax } from '../../hooks/useScrollAnimation'

const hero = content.hero
const preIntro = content.preAct1Intro

export default function HeroExperience() {
  const { ref: parallaxRef1, y: y1 } = useParallax(0.2)
  const { ref: parallaxRef2, y: y2 } = useParallax(0.35)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-hidden px-6 md:px-10 lg:px-16"
      style={{
        background: 'linear-gradient(135deg, #F9F5D7 0%, #EDE4F5 40%, #D8C8EE 70%, #C9B6E6 100%)',
      }}
    >
      {/* Floating gradient orbs — adjusted to complement pastel purple/yellow */}
      <motion.div
        ref={parallaxRef1}
        style={{ y: y1 }}
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F5E6A3] to-[#D1C4E9]" />
      </motion.div>

      <motion.div
        ref={parallaxRef2}
        style={{ y: y2 }}
        className="absolute top-[60%] right-[8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E8D5F5] to-[#C9B6E6]" />
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
      <div className="relative z-10 max-w-[900px] mx-auto text-center min-h-screen flex flex-col items-center justify-center">
        {/* Eyebrow — enlarged per client request */}
        <motion.p
          className="font-serif text-lg md:text-2xl lg:text-3xl font-light tracking-[0.15em] text-[#5B3A7A] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Scroll down indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#4A4A4A]/50">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-[#5B3A7A]/40"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* ── Intro Script: "It's the story of an ordinary girl..." ── */}
      <div className="relative z-10 max-w-[760px] mx-auto text-center py-12 md:py-20">
        {preIntro.lines.map((line, i) => (
          <ScrollReveal key={i} variant="fadeIn" duration={1}>
            <p className={`font-serif leading-[1.6] text-[#2C2C2C] mb-3 md:mb-4 ${
              i === 1 ? 'text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-center italic text-[#5B3A7A]' :
              'text-lg md:text-xl lg:text-[1.35rem]'
            }`}>
              {line}
            </p>
          </ScrollReveal>
        ))}

        {/* Frankieism — "Belief is where every dream begins." */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="py-6 md:py-8 text-center">
            <p className="font-serif italic text-[clamp(1.25rem,2.5vw,1.75rem)] text-[#2C2C2C]/70">
              {preIntro.frankieism}
            </p>
          </div>
        </ScrollReveal>

        {/* "Let's Begin..." transition */}
        <ScrollReveal variant="fadeIn" duration={1}>
          <div className="py-4 md:py-6 text-center">
            <p className="font-serif font-light text-[clamp(1.5rem,3vw,2.25rem)] tracking-[0.05em] text-[#5B3A7A]/80">
              {preIntro.actTransition}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ── CTA Buttons ── */}
      <ScrollReveal variant="fadeIn" duration={1}>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pb-16 md:pb-24">
          <MagneticButton
            onClick={() => scrollToSection('where-belief-began')}
            variant="primary"
            size="lg"
          >
            {hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection('contact')}
            variant="secondary"
            size="lg"
          >
            {hero.ctaSecondary}
          </MagneticButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
