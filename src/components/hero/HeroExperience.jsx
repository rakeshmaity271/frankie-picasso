import { useRef } from 'react'
import { motion } from 'framer-motion'
import { content } from '../../data/content'
import TextReveal from '../common/TextReveal'
import MagneticButton from '../common/MagneticButton'
import { useParallax } from '../../hooks/useScrollAnimation'

const hero = content.hero

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: '#FFF8F0' }}
    >
      {/* Floating gradient orbs */}
      <motion.div
        ref={parallaxRef1}
        style={{ y: y1 }}
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFB400] to-[#FF7C15]" />
      </motion.div>

      <motion.div
        ref={parallaxRef2}
        style={{ y: y2 }}
        className="absolute bottom-[20%] right-[8%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFDAC5] to-[#ED4672]" />
      </motion.div>

      {/* Small warm accent orb */}
      <motion.div
        className="absolute top-[60%] left-[50%] w-[200px] h-[200px] rounded-full opacity-10 blur-[60px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FCD102 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-[#FF7C15] mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Main headline — word-by-word reveal */}
        <h1 className="font-serif font-light text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em] text-[#2C2C2C] mb-6 md:mb-8">
          <TextReveal
            text={hero.headline}
            mode="word"
            staggerDelay={0.04}
            duration={0.6}
          />
        </h1>

        {/* Subheadline */}
        <motion.p
          className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#4A4A4A] max-w-[700px] mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#4A4A4A]/50">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-[#FFB400]/60"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
