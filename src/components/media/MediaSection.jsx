import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.media

export default function MediaSection() {
  return (
    <section id="media" className="relative py-12 md:py-20 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#E0F4F4' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#01B2D4] mb-4">{data.title}</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#1a2e2e] mb-4">{data.subtitle}</h2>
          <p className="font-serif text-lg text-[#1a2e2e]/60 mb-10 md:mb-14 max-w-[600px]">Through radio, podcasts, and media platforms, Frankie amplified voices that deserved to be heard.</p>
        </ScrollReveal>

        {/* Shows grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-14">
          {data.shows.map((show, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-6 md:p-8 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all duration-500">
                <span className="font-sans text-xs uppercase tracking-wider text-[#01B2D4] mb-2 block">{show.type}</span>
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#1a2e2e] mb-2">{show.title}</h4>
                <p className="font-sans text-sm text-[#1a2e2e]/50 mb-3">{show.years}</p>
                <p className="font-sans text-sm leading-relaxed text-[#1a2e2e]/70">{show.description}</p>
              </div>
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
      </div>
    </section>
  )
}
