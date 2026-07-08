import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'

const data = content.art

export default function Art() {
  return (
    <section id="art" className="relative py-8 md:py-14 px-6 md:px-10 lg:px-16" style={{ backgroundColor: '#FDE8EF' }}>
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#DF3CB5] mb-4">{data.title}</p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-4">{data.subtitle}</h2>
          <p className="font-serif text-lg text-[#2C2C2C]/60 mb-6 md:mb-10 max-w-[600px]">{data.intro}</p>
        </ScrollReveal>

        {/* Mediums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10">
          {data.mediums.map((medium, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="p-6 md:p-8 rounded-xl bg-white/30 border border-white/40 hover:bg-white/50 transition-all duration-500">
                <h4 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-2">{medium.title}</h4>
                <p className="font-sans text-xs text-[#DF3CB5] italic mb-3">{medium.style}</p>
                <p className="font-sans text-sm leading-relaxed text-[#4A4A4A]">{medium.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gallery placeholders */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#2C2C2C]/40 mb-8">Gallery</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.gallery.map((item, i) => (
            <ScrollReveal key={i} variant="scaleUp" delay={i * 0.1}>
              <div
                className="aspect-[4/3] rounded-xl flex flex-col items-center justify-center p-4"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, #FDE8EF 0%, #DF3CB5 100%)`,
                  opacity: 0.5 + (i * 0.15),
                }}
              >
                <p className="font-serif text-lg text-white/80 text-center">{item.title}</p>
                <p className="font-sans text-xs text-white/50 mt-1">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
