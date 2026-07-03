import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import TextReveal from '../common/TextReveal'

const data = content.whoIsFrankie

export default function WhoIsFrankie() {
  const sectionRef = useRef(null)

  return (
    <section
      id="who-is-frankie"
      ref={sectionRef}
      className="relative py-12 md:py-20 px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: '#FFF3E8' }}
    >
      <div className="max-w-[800px] mx-auto">
        {/* Opening statement — oversized serif */}
        <ScrollReveal variant="fadeIn" duration={1}>
          <h2 className="font-serif font-light text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-[#2C2C2C] mb-6 md:mb-10">
            {data.opening}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-[#4A4A4A] mb-8 md:mb-10">
            {data.openingFollow}
          </p>
        </ScrollReveal>

        {/* Built list — staggered with lines */}
        <div className="mb-10 md:mb-14 space-y-0">
          {data.builtList.map((item, i) => (
            <ScrollReveal key={i} variant="fadeLeft" delay={i * 0.08} duration={0.7}>
              <div className="flex items-baseline gap-4 py-4 border-b border-[#2C2C2C]/10">
                <span className="font-serif italic text-[#FF7C15] text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-base md:text-lg text-[#2C2C2C]">
                  {item}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Belief — visual breath */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="py-8 md:py-14">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#4A4A4A]/50 mb-4">
              {data.thread}
            </p>
            <h3 className="font-serif font-light text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.15] tracking-[-0.01em] text-[#2C2C2C]">
              <TextReveal
                text={data.belief}
                mode="word"
                staggerDelay={0.05}
                duration={0.6}
              />
            </h3>
            <p className="font-sans text-base md:text-lg text-[#4A4A4A] mt-6">
              {data.beliefFollow}
            </p>
          </div>
        </ScrollReveal>

        {/* Roles paragraph */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-6">
            {data.roles}
          </p>
          <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-10 md:mb-14">
            {data.rolesFollow}
          </p>
        </ScrollReveal>

        {/* Three values */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#4A4A4A]/50 mb-6">
            {data.valuesIntro}
          </p>
        </ScrollReveal>

        <div className="space-y-6 mb-10 md:mb-14">
          {data.values.map((val, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.12}>
              <div className="group">
                <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2C2C] mb-2">
                  <span className="text-[#FF7C15] mr-3 font-sans text-sm font-normal tracking-wider uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {val.label}
                </h4>
                <p className="font-sans text-base md:text-lg text-[#4A4A4A] italic pl-8 md:pl-12">
                  {val.reason}
                </p>
                <div className="h-[1px] bg-gradient-to-r from-[#FFB400]/40 via-[#FF7C15]/20 to-transparent mt-6" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Followed list */}
        <ScrollReveal variant="fadeIn" duration={1}>
          <div className="py-6 md:py-8">
            <p className="font-sans text-base md:text-lg text-[#4A4A4A] mb-6">
              {data.question}
            </p>
            <p className="font-sans text-base md:text-lg text-[#4A4A4A] mb-8">
              {data.answer}
            </p>
            {data.followedList.map((line, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-[#2C2C2C] mb-3 leading-snug">
                  {line}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Closing thoughts */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="pt-8 md:pt-12">
            <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-6">
              {data.today}
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-4">
              {data.closing}
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[#4A4A4A] mb-8">
              {data.closingFollow}
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-[#2C2C2C]">
              {data.finalThought}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
