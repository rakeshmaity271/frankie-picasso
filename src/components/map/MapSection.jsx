import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../common/ScrollReveal'
import { journeyActs } from '../../data/journey'

/**
 * MapSection — Interactive Visual Roadmap & Life Map Canvas.
 * Renders on both the Journey landing page (#life-map) and the dedicated LifeMapPage.
 * Fully visible, rich, and responsive. When Frankie supplies her illustrated map image file,
 * passing `src` will prominently feature her artwork at the top of this canvas.
 */
export default function MapSection({
  src = null,
  alt = "Frankie's Illustrated Life Map",
  caption = "The interconnected journey through Frankie's life, choices, and milestones.",
  id = 'life-map',
  showDedicatedPageLink = true
}) {
  return (
    <section
      id={id}
      className="relative py-16 md:py-24 px-6 md:px-10 lg:px-16 overflow-hidden border-b border-[#E8DCC8]"
      style={{ backgroundColor: '#FAF3EA' }}
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14">
            <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-[#EE5802] font-semibold mb-3">
              The Map of a Life &amp; Milestones
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#2C2C2C] leading-[1.15] mb-4">
              Frankie&rsquo;s Journey Map
            </h2>
            <p className="font-serif italic text-base md:text-xl text-[#4A4A4A] leading-relaxed mb-6">
              &ldquo;A life is not a straight line. It is a collection of lessons, choices, risks, and breakthroughs that only make complete sense when you step back and see the whole picture.&rdquo;
            </p>
            <p className="font-sans text-xs md:text-sm text-[#4A4A4A]/80 max-w-[620px] mx-auto">
              From the Austrian countryside and the family farm to broadcast airwaves, kickboxing championship rings, and creative literature — explore the interconnected roadmap of Frankie&rsquo;s eight acts.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Custom Illustration (if image asset provided) OR Illustrated Canvas Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          {src ? (
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.12)] border border-[#E8D5B5] bg-[#FFF8F0] p-4 md:p-8">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto rounded-xl object-contain"
                loading="lazy"
                decoding="async"
              />
              {caption && (
                <p className="font-serif italic text-xs md:text-sm text-[#4A4A4A]/80 text-center mt-4">
                  {caption}
                </p>
              )}
            </div>
          ) : (
            <div className="relative rounded-2xl border-2 border-dashed border-[#D4C3A3] bg-gradient-to-b from-[#FFFDF8] to-[#F5ECE0] p-8 md:p-12 shadow-[0_12px_36px_rgba(44,28,16,0.06)] text-center">
              <div className="max-w-[680px] mx-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF3EA] border border-[#E8DCC8] flex items-center justify-center text-3xl mb-4 text-[#8B5FB0] shadow-inner">
                  🗺️
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[#2C2C2C] mb-2 font-medium">
                  Illustrated Map Artwork Canvas
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed mb-6">
                  This showcase is reserved for Frankie&rsquo;s custom hand-illustrated life map artwork. Below is the live, interactive cartography charting the eight defining chapters of her journey.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E8DCC8] text-xs font-sans font-medium text-[#4A4A4A] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#629E46] animate-pulse"></span>
                  <span>Interactive Map Live &bull; Ready for Illustrated Artwork File</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 8-Act Interconnected Journey Map Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E8DCC8]/60">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8B5FB0] font-bold">
              The Eight Acts Cartography
            </span>
            <span className="font-sans text-xs text-[#4A4A4A]/60">
              Interactive Story Map
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {journeyActs.map((act) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: act.number * 0.05 }}
                className="group relative rounded-xl p-5 bg-white border border-[#E8DCC8] hover:border-[#8B5FB0] shadow-[0_4px_16px_rgba(44,28,16,0.04)] hover:shadow-[0_8px_24px_rgba(139,95,176,0.12)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-sans text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#FAF3EA] text-[#8B5FB0] border border-[#E8DCC8]/60">
                      Act {act.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#4A4A4A]/60">
                      {act.era}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#2C2C2C] group-hover:text-[#EE5802] transition-colors mb-2 leading-snug">
                    {act.title}
                  </h4>
                  <p className="font-sans text-xs text-[#4A4A4A]/80 leading-relaxed mb-4 line-clamp-3">
                    {act.description || act.hook || 'Explore the choices, breakthroughs, and milestones of this defining chapter.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#FAF3EA] flex items-center justify-between">
                  <Link
                    to={`/act/${act.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#8B5FB0] group-hover:text-[#EE5802] transition-colors"
                  >
                    <span>Read Story</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                  {act.id === 'still-becoming' && (
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#3B5998]/12 text-[#3B5998] font-bold">
                      What&rsquo;s My Q
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Controls & Deep Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-center">
          {showDedicatedPageLink && (
            <Link
              to="/life-map"
              className="px-6 py-3 rounded-full bg-[#8B5FB0] text-white text-xs font-sans font-semibold tracking-wide hover:bg-[#724B94] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <span>Open Dedicated Life Map Page</span>
              <span>→</span>
            </Link>
          )}
          <a
            href="#timeline"
            className="px-6 py-3 rounded-full bg-white border border-[#E8DCC8] text-[#2C2C2C] text-xs font-sans font-semibold tracking-wide hover:border-[#EE5802] hover:text-[#EE5802] transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Explore Milestones Timeline</span>
            <span>↓</span>
          </a>
          <a
            href="#lessons"
            className="px-6 py-3 rounded-full bg-[#FAF3EA] border border-[#E8DCC8] text-[#4A4A4A] text-xs font-sans font-semibold tracking-wide hover:border-[#8B5FB0] hover:text-[#8B5FB0] transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>The Nine Life Lessons</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
