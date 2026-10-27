import { motion } from 'framer-motion'
import TextReveal from '../common/TextReveal'
import { journeyActs } from '../../data/journey'

/**
 * ActSection — wraps each Act with a title reveal animation.
 * Uses the Act's color for background.
 * Opens with a hero photo (the act's primary journey-preview image) so every
 * section leads with a face before the writing starts.
 */
export default function ActSection({ act, children, overrideTitle }) {
  const preview = journeyActs.find((p) => p.fullStoryUrl === `#/act/${act.id}`)
  const hero = preview?.images?.[0]

  return (
    <section
      id={act.id}
      className="relative"
      style={{ backgroundColor: act.color }}
    >
      {/* Act title header */}
      <div className="pt-3 md:pt-5 pb-1 md:pb-2 px-6 md:px-10 lg:px-16">
        <div className="max-w-[760px] mx-auto">
          {/* Act number */}
          <motion.p
            className="font-sans text-xs uppercase tracking-[0.3em] mb-1.5"
            style={{ color: 'var(--text-primary, #2C2C2C)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Act {act.number}
          </motion.p>

          {/* Act title */}
          <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[#2C2C2C] mb-2.5">
            <TextReveal
              text={overrideTitle || act.title}
              mode="word"
              staggerDelay={0.08}
              duration={0.7}
            />
          </h2>

          {/* Tagline */}
          <motion.p
            className="font-serif italic text-lg md:text-xl text-[#2C2C2C]/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {act.tagline}
          </motion.p>
        </div>
      </div>

      {/* Hero photo — fixed-height band, frame hugs the photo's width */}
      {hero && (
        <div className="px-6 md:px-10 lg:px-16 mb-7 md:mb-10">
          <motion.figure
            className="w-fit max-w-full mx-auto bg-[#FAF6F0] p-3 sm:p-3.5 rounded-sm shadow-[0_12px_36px_rgba(44,28,16,0.12)] border border-[#E8DCC8]/70"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[2px] border border-black/[0.08] bg-white flex items-center justify-center">
              <img
                src={hero.src}
                alt={hero.alt || ''}
                className="block max-w-full h-[44vh] sm:h-[50vh] w-auto object-contain rounded-[2px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.figure>
        </div>
      )}

      {/* Act content */}
      {children}
    </section>
  )
}
