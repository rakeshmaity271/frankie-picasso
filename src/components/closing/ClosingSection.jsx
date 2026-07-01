import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import TextReveal from '../common/TextReveal'
import MagneticButton from '../common/MagneticButton'
import ScrollReveal from '../common/ScrollReveal'

const data = content.closing

export default function ClosingSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="closing"
      className="relative py-32 md:py-44 lg:py-56 px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: '#1a1a2e' }}
    >
      {/* Warm glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,180,0,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.3em] text-[#FFB400]/60 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Next Chapter
        </motion.p>

        <h2 className="font-serif font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.08] tracking-[-0.02em] text-[#FFF8F0] mb-10 md:mb-14">
          <TextReveal
            text={data.question}
            mode="word"
            staggerDelay={0.06}
            duration={0.7}
          />
        </h2>

        <ScrollReveal variant="fadeIn" duration={1.2}>
          <p className="font-serif italic text-lg md:text-xl text-[#FFF8F0]/60 max-w-[600px] mx-auto mb-12">
            {data.quote}
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <MagneticButton onClick={scrollToContact} variant="primary" size="lg">
            {data.cta}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
