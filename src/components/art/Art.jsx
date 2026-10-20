import { useState, useCallback } from 'react'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import Lightbox from '../common/Lightbox'

const data = content.art

export default function Art() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [activeCategory, setActiveCategory] = useState('All')

  const openLightbox = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(-1), [])
  const prevImage = useCallback(
    () => setLightboxIndex((p) => (p > 0 ? p - 1 : data.gallery.length - 1)),
    []
  )
  const nextImage = useCallback(
    () => setLightboxIndex((p) => (p < data.gallery.length - 1 ? p + 1 : 0)),
    []
  )

  const categories = ['All', 'Landscapes', 'Pet Portraits', 'Wildlife', 'Life & People']

  const filteredGallery =
    activeCategory === 'All'
      ? data.gallery
      : data.gallery.filter((item) => item.category === activeCategory)

  return (
    <section
      id="art"
      className="relative py-14 md:py-22 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF3DA 0%, #FDF0F4 50%, #FAF3EA 100%)',
      }}
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#DF3CB5] mb-3">
              Fine Art & Creative Expression
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,4rem)] text-[#2C2C2C] leading-[1.12] mb-4">
              Where Words Meet Colour
            </h2>
            <p className="font-serif italic text-base md:text-xl text-[#2C2C2C]/75 leading-relaxed">
              &ldquo;{data.subtitle}&rdquo;
            </p>
            <p className="font-sans text-xs md:text-sm text-[#4A4A4A] mt-3 max-w-[620px] mx-auto leading-relaxed">
              {data.intro}
            </p>
          </ScrollReveal>

          {/* Behind-the-curtain candid: Frankie at her gallery exhibition */}
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <figure className="relative w-full max-w-[340px] mx-auto mt-9 mb-1 rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
              <div className="bg-[#FAF6F0] p-2.5 pb-3 rounded-sm shadow-[0_10px_28px_rgba(44,28,16,0.14)] border border-[#E8DCC8]">
                <img
                  src="/images/art-gallery-exhibition-sign.jpg"
                  alt="Frankie in a black evening dress beside the Picasso, Pollock, Vermeer & more exhibition sign at Arta Gallery."
                  className="w-full h-auto rounded-[2px] border border-black/[0.08]"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="mt-2 text-center font-serif italic text-[11px] sm:text-xs text-[#4A4A4A] leading-tight">
                  Opening night • “The Art of Picasso, Pollock, Vermeer & more” • Arta Gallery
                </figcaption>
              </div>
            </figure>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#DF3CB5] text-white shadow-sm font-semibold'
                    : 'bg-white/60 text-[#4A4A4A] hover:bg-white border border-[#E8DCC8]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Museum Gallery Wall — balanced frames, archival mats, intentional sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {filteredGallery.map((item, i) => {
            const originalIndex = data.gallery.findIndex((g) => g.src === item.src)

            return (
              <ScrollReveal key={item.src} variant="fadeUp" delay={i * 0.05}>
                <button
                  onClick={() => openLightbox(originalIndex >= 0 ? originalIndex : i)}
                  className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF3CB5] w-full text-left"
                >
                  {/* Museum archival frame & matting */}
                  <div className="bg-[#FAF6F0] p-3 md:p-3.5 pb-4 md:pb-4.5 rounded-sm shadow-[0_8px_24px_rgba(44,30,20,0.08)] border border-[#E8DCC8] transition-all duration-400 group-hover:shadow-[0_16px_36px_rgba(44,30,20,0.16)] group-hover:-translate-y-1">
                    {/* Painting Exhibition Frame with Keyline — uncropped presentation */}
                    <div
                      className="w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-[2px] border border-black/[0.08] relative bg-[#F4ECE1]/60 flex items-center justify-center p-2.5 sm:p-3"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="max-h-full max-w-full w-auto h-auto object-contain rounded-[1px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Gentle frame inner shadow */}
                      <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(44,28,16,0.05)] pointer-events-none" />
                    </div>

                    {/* Museum Plaque Caption Plate */}
                    <div className="mt-3.5 pt-2 border-t border-[#E8DCC8]/70 flex flex-col justify-between">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-serif text-base md:text-lg font-normal text-[#2C2C2C] leading-snug group-hover:text-[#DF3CB5] transition-colors">
                          {item.title}
                        </h3>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#DF3CB5] font-semibold flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#7A6545] mt-1 truncate">
                        {item.medium}
                      </p>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Fine Art America Attribution / Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="font-serif italic text-sm md:text-base text-[#4A4A4A]/80">
            Original and commissioned works featured through Fine Art America. Custom pet portraits supporting animal welfare causes.
          </p>
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          images={data.gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
