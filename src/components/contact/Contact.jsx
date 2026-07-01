import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.contact

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="max-w-[700px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400]/60 mb-4">Connect</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#FFF8F0] mb-6">Let's Connect</h2>
          <p className="font-sans text-base md:text-lg text-[#FFF8F0]/60 leading-relaxed mb-12">{data.intro}</p>
        </ScrollReveal>

        {/* Email */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <a
            href={`mailto:${data.email}`}
            className="block font-serif text-2xl md:text-3xl text-[#FFB400] hover:text-[#FF7C15] transition-colors duration-300 mb-12"
          >
            {data.email}
          </a>
        </ScrollReveal>

        {/* Speaking topics */}
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFF8F0]/30 mb-6">Speaking Topics</p>
          <div className="flex flex-wrap gap-3 mb-12">
            {data.speakingTopics.map((topic, i) => (
              <span
                key={i}
                className="font-sans text-xs md:text-sm text-[#FFF8F0]/50 border border-[#FFF8F0]/10 rounded-full px-4 py-2 hover:border-[#FFB400]/40 hover:text-[#FFB400]/70 transition-all duration-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Socials */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFF8F0]/30 mb-4">Follow</p>
          <div className="flex gap-6">
            {data.socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="font-sans text-sm text-[#FFF8F0]/50 hover:text-[#FFB400] transition-colors duration-300 relative group"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFB400] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
