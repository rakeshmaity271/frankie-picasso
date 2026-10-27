import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.media

function VideoLightbox({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
        aria-label="Close video"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <motion.div
        className="relative z-10 w-full max-w-[90vw] md:max-w-[900px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-4 font-sans text-sm text-white/70 text-center">{video.title}</p>
      </motion.div>
    </motion.div>
  )
}

export default function MediaSection() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section id="media" className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#E0F4F4' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <div className="mb-6 md:mb-10">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#01B2D4] mb-4">{data.title}</p>
            <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#1a2e2e] mb-4">{data.subtitle}</h2>
            <p className="font-serif text-lg text-[#1a2e2e]/60 max-w-[600px]">Through radio, podcasts, and media platforms, Frankie amplified voices that deserved to be heard.</p>
          </div>
        </ScrollReveal>

        {/* Shows grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10">
          {data.shows.map((show, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-6 md:p-8 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all duration-500 h-full">
                <span className="font-sans text-xs uppercase tracking-wider text-[#01B2D4] mb-2 block">{show.type}</span>
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#1a2e2e] mb-2">{show.title}</h4>
                {show.image && (
                  <img
                    src={show.image}
                    alt={`${show.title} cover art`}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover border border-white/70 shadow-[0_4px_14px_rgba(26,46,46,0.18)] my-3 -rotate-[2deg] transition-transform duration-500 hover:rotate-0"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <p className="font-sans text-sm text-[#1a2e2e]/50 mb-3">{show.years}</p>
                <p className="font-sans text-sm leading-relaxed text-[#1a2e2e]/70">{show.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Watch — YouTube episodes */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#01B2D4] mb-4">Watch</p>
          <h3 className="font-serif font-light text-[clamp(1.5rem,3vw,2.25rem)] text-[#1a2e2e] mb-6">Frankie on screen.</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 md:mb-10">
          {data.videos.map((video, i) => (
            <ScrollReveal key={video.id} variant="fadeUp" delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="text-left w-full p-0 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all duration-500 h-full overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <span className="w-12 h-12 rounded-full bg-white/85 group-hover:bg-[#01B2D4] flex items-center justify-center transition-colors duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="fill-[#1a2e2e] group-hover:fill-white"><polygon points="8,5 20,12 8,19" /></svg>
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-sans text-xs uppercase tracking-wider text-[#01B2D4] mb-1">{video.channel}</p>
                  <h4 className="font-serif text-lg font-light text-[#1a2e2e] leading-snug">{video.title}</h4>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Press highlights */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#1a2e2e]/40 mb-8">Press & Recognition</p>
        </ScrollReveal>
        <div className="space-y-0">
          {data.press.map((item, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.06}>
              <div className="flex items-center justify-between py-4 border-b border-[#1a2e2e]/8">
                <div>
                  <p className="font-serif text-base md:text-lg text-[#1a2e2e]">{item.title}</p>
                  <p className="font-sans text-xs text-[#1a2e2e]/50">{item.outlet}</p>
                </div>
                <span className="font-sans text-xs text-[#01B2D4]">{item.year}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence>
          {activeVideo && <VideoLightbox video={activeVideo} onClose={() => setActiveVideo(null)} />}
        </AnimatePresence>
      </div>
    </section>
  )
}
