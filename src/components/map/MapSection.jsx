import { motion } from 'framer-motion'
import ScrollReveal from '../common/ScrollReveal'

/**
 * MapSection — architecture ready for Frankie's custom map / life illustration asset.
 * When Frankie supplies her illustrated map asset, provide `src` (or drop into data)
 * to seamlessly showcase her visual journey without redesigning the surrounding page.
 */
export default function MapSection({
  src = null,
  alt = "Frankie's Illustrated Life Map",
  caption = "The interconnected journey through Frankie's life, choices, and milestones."
}) {
  // If Frankie hasn't supplied the custom image asset yet, keep the component
  // architecture clean and minimal or render the designated space ready for it.
  if (!src) {
    return (
      <div id="life-map-slot" className="sr-only" aria-hidden="true">
        {/* Architectural hook for Frankie's future life map asset */}
      </div>
    )
  }

  return (
    <section
      id="life-map"
      className="relative py-12 md:py-18 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{ backgroundColor: '#FAF3EA' }}
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] mb-3">
            Life Map
          </p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-3">
            The Journey Map
          </h2>
          <p className="font-serif italic text-base md:text-lg text-[#4A4A4A] max-w-[600px] mx-auto mb-8 md:mb-12">
            A visual tapestry connecting every chapter, risk, and breakthrough.
          </p>
        </ScrollReveal>

        {/* Future Map Asset Container */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.12)] border border-[#E8D5B5] bg-[#FFF8F0] p-3 md:p-6"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-xl object-contain"
            loading="lazy"
            decoding="async"
          />
          {caption && (
            <p className="font-serif italic text-xs md:text-sm text-[#4A4A4A]/80 mt-4">
              {caption}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
