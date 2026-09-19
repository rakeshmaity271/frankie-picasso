import { useState, useCallback } from 'react'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import Lightbox from '../common/Lightbox'

const data = content.art

export default function Art() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const openLightbox = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(-1), [])
  const prevImage = useCallback(() => setLightboxIndex((p) => (p > 0 ? p - 1 : data.gallery.length - 1)), [])
  const nextImage = useCallback(() => setLightboxIndex((p) => (p < data.gallery.length - 1 ? p + 1 : 0)), [])

  return (
    <section id="art" className="relative py-10 md:py-16 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FDE8EF' }}>
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#DF3CB5] mb-4">{data.title}</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-2 md:mb-4">{data.subtitle}</h2>
          <p className="font-serif text-base md:text-lg text-[#2C2C2C]/60 mb-8 md:mb-12 max-w-[600px]">{data.intro}</p>
        </ScrollReveal>

        {/* Mediums */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-14">
          {data.mediums.map((medium, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-5 md:p-6 rounded-lg bg-white/40 border border-white/50">
                <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] mb-1">{medium.title}</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#DF3CB5] mb-2">{medium.style}</p>
                <p className="font-sans text-xs leading-relaxed text-[#4A4A4A]">{medium.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gallery — curated uniform grid, museum framing */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-6">Gallery</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {data.gallery.map((item, i) => (
            <ScrollReveal key={i} variant="scaleUp" delay={i * 0.06}>
              <button
                onClick={() => openLightbox(i)}
                className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF3CB5] w-full"
              >
                {/* Museum-style frame */}
                <div className="bg-white p-2 md:p-2.5 rounded-sm shadow-[0_6px_20px_rgba(44,44,44,0.08)] transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(44,44,44,0.15)] group-hover:-translate-y-0.5">
                  <div className="overflow-hidden rounded-[2px]" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Caption */}
                  <p className="font-sans text-[10px] md:text-xs text-[#2C2C2C]/50 mt-1.5 md:mt-2 leading-snug text-center truncate">{item.caption}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
