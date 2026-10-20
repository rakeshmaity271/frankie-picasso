import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.contact

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-14 md:py-20 px-6 md:px-10 lg:px-16"
      style={{ background: 'linear-gradient(180deg, #181513 0%, #151210 100%)' }}
    >
      <div className="max-w-[760px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB400] mb-3">
            Connect
          </p>
          <h2 className="font-serif font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-[#FFFFFF] mb-5">
            Let's Connect
          </h2>
          <p className="font-sans text-base md:text-lg text-[#FAF3EA] leading-relaxed mb-8 max-w-[640px]">
            {data.intro}
          </p>
        </ScrollReveal>

        {/* Email */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="mb-10">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAF3EA]/70 block mb-2">
              Direct Email
            </span>
            <a
              href={`mailto:${data.email}`}
              className="inline-block font-serif text-2xl md:text-4xl text-[#FFB400] hover:text-[#FFD166] transition-colors duration-300 font-medium underline decoration-[#FFB400]/40 hover:decoration-[#FFD166] underline-offset-8"
            >
              {data.email}
            </a>
          </div>
        </ScrollReveal>

        {/* Speaking topics */}
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400] font-semibold mb-4">
            Speaking Topics & Keynotes
          </p>
          <div className="flex flex-wrap gap-2.5 md:gap-3 mb-10">
            {data.speakingTopics.map((topic, i) => (
              <span
                key={i}
                className="font-sans text-xs md:text-sm font-medium text-[#FAF3EA] bg-white/[0.07] border border-white/20 rounded-full px-4 py-2 hover:border-[#FFB400] hover:text-[#FFB400] hover:bg-white/[0.12] transition-all duration-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Socials */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FAF3EA]/80 font-semibold mb-4">
            Follow & Platforms
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {data.socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="font-sans text-sm md:text-base font-medium text-[#FFFFFF] hover:text-[#FFB400] transition-colors duration-300 relative group py-1"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFB400] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
