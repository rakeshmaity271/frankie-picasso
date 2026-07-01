import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[3] // Creating

export default function Creativity() {
  return (
    <div className="pb-16 md:pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1000px] mx-auto">
        {/* Intro */}
        <ScrollReveal variant="fadeUp">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2C2C2C]/80 max-w-[700px] mb-16 md:mb-20">
            {act.intro}
          </p>
        </ScrollReveal>

        {/* Creative works — right-emphasis with overlapping layout */}
        <div className="space-y-10 md:space-y-14 mb-16 md:mb-20">
          {act.works.map((work, i) => (
            <ScrollReveal key={i} variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={0.05}>
              <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Placeholder image area */}
                <div className={`w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 ${i % 2 === 0 ? '' : 'md:order-2'}`}
                  style={{
                    background: `linear-gradient(135deg, #FDE8EF 0%, #DF3CB5 50%, #ED4672 100%)`,
                    opacity: 0.6 + (i * 0.05),
                  }}
                />
                {/* Content */}
                <div className="flex-1 pt-2">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#DF3CB5] mb-2 block">
                    {work.type}
                  </span>
                  <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-3">
                    {work.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                    {work.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Frankieism text={act.frankieism} accentColor="#DF3CB5" />
    </div>
  )
}
