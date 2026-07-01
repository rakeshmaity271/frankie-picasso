import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[1] // Building

export default function Entrepreneurship() {
  return (
    <div className="pb-16 md:pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1100px] mx-auto">
        {/* Intro */}
        <ScrollReveal variant="fadeUp">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2C2C2C]/80 max-w-[700px] mb-16 md:mb-20">
            {act.intro}
          </p>
        </ScrollReveal>

        {/* Ventures — split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {act.ventures.map((venture, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="group p-6 md:p-8 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C]">
                    {venture.name}
                  </h4>
                  <span className="font-sans text-xs tracking-wider uppercase text-[#EE5802] bg-[#EE5802]/10 px-3 py-1 rounded-full whitespace-nowrap ml-3">
                    {venture.impact}
                  </span>
                </div>
                <p className="font-sans text-sm text-[#EE5802] mb-3">{venture.role}</p>
                <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                  {venture.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal variant="fadeUp">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">
              Key Milestones
            </p>
          </ScrollReveal>
          {act.timeline.map((entry, i) => (
            <ScrollReveal key={i} variant="fadeLeft" delay={i * 0.1}>
              <div className="flex gap-6 md:gap-8 mb-8 pb-8 border-b border-[#2C2C2C]/8">
                <span className="font-serif italic text-[#EE5802] text-sm min-w-[80px] pt-1">
                  {entry.year}
                </span>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] mb-1">
                    {entry.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                    {entry.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Frankieism text={act.frankieism} accentColor="#EE5802" />
    </div>
  )
}
