import { motion } from 'framer-motion'
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
      className="relative py-14 md:py-24 px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1C1917 0%, #171412 100%)',
      }}
    >
      {/* Warm ambient glow for depth and warmth */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,180,0,0.09) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[820px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-[#FFB400]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Next Chapter
        </motion.p>

        {/* Big question with high contrast */}
        <motion.h2
          className="font-serif font-light text-[clamp(2.5rem,6vw,5.2rem)] leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] mb-5 md:mb-8 drop-shadow-sm"
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <TextReveal
            text={data.question}
            mode="word"
            staggerDelay={0.06}
            duration={0.7}
          />
        </motion.h2>

        {/* Thoughtful quote with crystal-clear readability */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <p className="font-serif italic text-lg md:text-2xl text-[#FAF3EA] leading-relaxed max-w-[680px] mx-auto mb-8 md:mb-10 font-normal">
            &ldquo;{data.quote}&rdquo;
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <MagneticButton onClick={scrollToContact} variant="primary" size="lg">
            {data.cta}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
