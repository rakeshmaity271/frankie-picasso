import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import TextReveal from '../common/TextReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[4] // Giving

export default function CommunityImpact() {
  return (
    <div className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-[800px] mx-auto">
        {/* Intro */}
        <ScrollReveal variant="fadeUp">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2C2C2C]/80 mb-5 md:mb-8">
            {act.intro}
          </p>
        </ScrollReveal>

        {/* Large emotional quote */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="py-5 md:py-8 text-center">
            <p className="font-serif font-light text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] text-[#2C2C2C] max-w-[650px] mx-auto">
              <TextReveal
                text={act.quote}
                mode="word"
                staggerDelay={0.05}
                duration={0.6}
              />
            </p>
          </div>
        </ScrollReveal>

        {/* Initiatives */}
        <div className="space-y-5 mb-8 md:mb-10">
          {act.initiatives.map((item, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
              <div className="p-6 md:p-8 rounded-xl bg-white/30 border border-white/40">
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-2">
                  {item.name}
                </h4>
                <p className="font-sans text-sm text-[#629E46] mb-3">{item.role}</p>
                <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Frankieism text={act.frankieism} accentColor="#629E46" />
    </div>
  )
}
