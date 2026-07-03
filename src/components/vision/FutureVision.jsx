import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import Frankieism from '../common/Frankieism'

const act = content.acts[5] // Still Becoming

export default function FutureVision() {
  return (
    <div className="pb-12 md:pb-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1000px] mx-auto">
        {/* Intro */}
        <ScrollReveal variant="fadeUp">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2C2C2C]/80 max-w-[750px] mb-10 md:mb-14">
            {act.intro}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-14">
          {/* Current projects — left */}
          <div>
            <ScrollReveal variant="fadeUp">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">
                Current Projects
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              {act.currentProjects.map((project, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
                  <div className="pb-6 border-b border-[#2C2C2C]/8">
                    <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] mb-2">
                      {project.title}
                    </h4>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                      {project.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Awards & Recognition — right */}
          <div>
            <ScrollReveal variant="fadeUp">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">
                Recognition
              </p>
            </ScrollReveal>

            {/* Featured award */}
            <ScrollReveal variant="scaleUp" delay={0.1}>
              <div className="p-6 md:p-8 rounded-xl bg-[#FFB400]/15 border border-[#FFB400]/20 mb-6">
                <p className="font-sans text-xs uppercase tracking-wider text-[#FFB400] mb-2">
                  {act.awards.featured.year}
                </p>
                <h4 className="font-serif text-2xl md:text-3xl font-light text-[#2C2C2C] mb-2">
                  {act.awards.featured.title}
                </h4>
                <p className="font-sans text-sm text-[#4A4A4A] mb-1">{act.awards.featured.org}</p>
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]/70">
                  {act.awards.featured.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Other awards */}
            <div className="space-y-4">
              {act.awards.items.map((item, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.06}>
                  <div className="flex items-center justify-between py-3 border-b border-[#2C2C2C]/6">
                    <span className="font-sans text-sm text-[#2C2C2C]">{item.title}</span>
                    <span className="font-sans text-xs text-[#2C2C2C]/40">{item.year}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Legacy timeline */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">
            A Life in Moments
          </p>
        </ScrollReveal>
        <div className="space-y-0 mb-16">
          {act.legacyEvents.map((event, i) => (
            <ScrollReveal key={i} variant="fadeLeft" delay={i * 0.06}>
              <div className="flex gap-6 py-4 border-b border-[#2C2C2C]/6">
                <span className="font-serif italic text-[#FFB400] text-sm min-w-[70px]">{event.year}</span>
                <div>
                  <p className="font-serif text-base md:text-lg text-[#2C2C2C]">{event.title}</p>
                  <p className="font-sans text-xs md:text-sm text-[#4A4A4A]/70">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Frankieism text={act.frankieism} accentColor="#FFB400" />
    </div>
  )
}
