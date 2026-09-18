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
    <section id="art" className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FDE8EF' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#DF3CB5] mb-4">{data.title}</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-4">{data.subtitle}</h2>
          <p className="font-serif text-lg text-[#2C2C2C]/60 mb-6 md:mb-10 max-w-[600px]">{data.intro}</p>
        </ScrollReveal>

        {/* Mediums */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 md:mb-10">
          {data.mediums.map((medium, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-6 md:p-8 rounded-xl bg-white/30 border border-white/40 hover:bg-white/50 transition-all duration-500">
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-2">{medium.title}</h4>
                <p className="font-sans text-xs text-[#DF3CB5] italic mb-3">{medium.style}</p>
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{medium.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gallery — masonry columns, no cropping */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">Gallery</p>
        </ScrollReveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
          {data.gallery.map((item, i) => (
            <ScrollReveal key={i} variant="scaleUp" delay={i * 0.06}>
              <button
                onClick={() => openLightbox(i)}
                className="relative w-full break-inside-avoid mb-3 md:mb-4 rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF3CB5]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full block rounded-xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 rounded-xl">
                  <p className="font-sans text-xs text-white/90 leading-snug">{item.caption}</p>
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
