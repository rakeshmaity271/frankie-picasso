import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.impact

function CountUp({ target, isInView }) {
  const ref = useRef(null)
  return (
    <motion.span
      ref={ref}
      className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#2C2C2C]"
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
    <section id="impact" className="relative py-12 md:py-20 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400] mb-4">{data.title}</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-10 md:mb-14 max-w-[700px]">
            {data.subtitle}
          </h2>
        </ScrollReveal>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 md:mb-20">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <CountUp target={stat.number} isInView={isInView} />
              <p className="font-sans text-xs uppercase tracking-wider text-[#4A4A4A]/60 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.pillars.map((pillar, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
              <div className="p-6 md:p-8 rounded-xl bg-white/40 border border-white/50 hover:bg-white/60 transition-all duration-500 group">
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-3 group-hover:text-[#FFB400] transition-colors duration-300">
                  {pillar.title}
                </h4>
                <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4A4A]">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
