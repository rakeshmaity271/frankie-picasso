import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.impact

const pillarAccents = {
  Entrepreneurship: { color: '#EE5802', emoji: '⚡' },
  Creativity: { color: '#DF3CB5', emoji: '🎨' },
  Community: { color: '#01B2D4', emoji: '🤝' },
  Leadership: { color: '#8B5FB0', emoji: '🌟' },
}

function CountUp({ target, isInView }) {
  const ref = useRef(null)
  return (
    <motion.span
      ref={ref}
      className="font-serif text-[clamp(2.8rem,5.5vw,4.8rem)] font-light leading-none block mb-2 bg-gradient-to-r from-[#C24E1A] via-[#EE5802] to-[#FFB400] bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {target}
    </motion.span>
  )
}

export default function Impact() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })

  return (
    <section
      id="impact"
      className="relative py-14 md:py-22 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F4ECE1 0%, #FFF8F0 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 md:mb-16">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5802] mb-3">
              Platform Building & Reach
            </p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#2C2C2C] leading-[1.12] mb-4">
              Legacy in Motion
            </h2>
            <p className="font-serif italic text-base md:text-xl text-[#2C2C2C]/75 leading-relaxed">
              &ldquo;{data.subtitle}&rdquo;
            </p>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-5 md:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E8DCC8]/70 shadow-[0_4px_20px_rgba(44,30,20,0.05)]"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <CountUp target={stat.number} isInView={isInView} />
              <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wider text-[#7A6545]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.pillars.map((pillar, i) => {
            const accent = pillarAccents[pillar.title] || { color: '#EE5802', emoji: '✨' }
            return (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <div className="relative p-6 md:p-8 rounded-2xl bg-[#FAF6F0] border border-[#E8DCC8] shadow-[0_6px_24px_rgba(44,30,20,0.06)] hover:shadow-[0_12px_36px_rgba(44,30,20,0.12)] hover:-translate-y-1 transition-all duration-400 group flex flex-col justify-between h-full overflow-hidden">
                  {/* Color-coded top strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: accent.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl select-none" aria-hidden="true">
                        {accent.emoji}
                      </span>
                      <span
                        className="font-sans text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${accent.color}15`,
                          color: accent.color,
                        }}
                      >
                        Pillar
                      </span>
                    </div>

                    <h3
                      className="font-serif text-2xl md:text-3xl font-light text-[#2C2C2C] mb-3 transition-colors duration-300"
                      style={{ color: '#241E1A' }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Business Logos & Platforms Showcase */}
        {data.platforms && (
          <div className="mt-16 md:mt-24">
            <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
              <ScrollReveal variant="fadeUp">
                <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#EE5802] mb-3">
                  Ventures &amp; Media Platforms
                </p>
                <h3 className="font-serif font-light text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#2C2C2C] leading-tight mb-3">
                  Enterprises Built from Belief
                </h3>
                <p className="font-serif italic text-sm md:text-base text-[#2C2C2C]/70">
                  From executive coaching and script apps to global radio platforms and personal empowerment.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
              {data.platforms.map((platform, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DCC8] shadow-[0_6px_24px_rgba(44,30,20,0.06)] hover:shadow-[0_12px_36px_rgba(44,30,20,0.12)] hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between h-full group">
                    <div>
                      {/* Logo Frame */}
                      <div className="w-full h-44 sm:h-48 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center p-4 mb-5 overflow-hidden shadow-xs group-hover:border-[#EE5802]/30 transition-colors duration-300">
                        <img
                          src={platform.image}
                          alt={`${platform.name} logo`}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* Header & Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-serif text-xl font-light text-[#2C2C2C] leading-snug">
                          {platform.name}
                        </h4>
                        {platform.badge && (
                          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#EE5802]/10 text-[#EE5802] shrink-0">
                            {platform.badge}
                          </span>
                        )}
                      </div>

                      {/* Tagline */}
                      {platform.tagline && (
                        <p className="font-serif italic text-xs text-[#7A6545] mb-2.5">
                          {platform.tagline}
                        </p>
                      )}

                      {/* Description */}
                      <p className="font-sans text-xs md:text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        {platform.description}
                      </p>
                    </div>

                    {/* Action / Link */}
                    {platform.url ? (
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-[#2C2C2C] hover:bg-[#EE5802] text-white font-sans text-xs font-medium tracking-wider uppercase transition-colors duration-300 mt-2"
                      >
                        <span>{platform.cta || 'Visit Platform'}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ) : (
                      <div className="pt-2 border-t border-[#2C2C2C]/5 text-[11px] font-sans uppercase tracking-wider text-[#7A6545]/70">
                        {platform.category}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
