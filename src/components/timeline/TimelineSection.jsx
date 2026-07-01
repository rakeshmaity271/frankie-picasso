import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const events = content.acts[5].legacyEvents

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 md:py-36 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400] mb-4">Timeline</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-16 md:mb-20">
            A Life in Chapters
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[35px] md:left-[45px] top-0 bottom-0 w-[1px] bg-[#FFB400]/20" aria-hidden="true" />

          {events.map((event, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="flex gap-6 md:gap-8 mb-10 relative">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-[24px] md:w-[32px] flex items-start pt-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFB400] border-2 border-[#F5EFE6]" />
                </div>
                {/* Content */}
                <div className="pb-8">
                  <span className="font-serif italic text-[#FFB400] text-sm mb-1 block">{event.year}</span>
                  <h4 className="font-serif text-lg md:text-xl font-light text-[#2C2C2C] mb-1">{event.title}</h4>
                  <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
