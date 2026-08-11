import { content } from '../../data/content'
import ScrollReveal from '../common/ScrollReveal'
import TextReveal from '../common/TextReveal'

// Act II accent — warm orange, drawn from the heartbeat palette (#EE5802),
// deepened slightly for readable contrast on the cream (#FFF0CC) background.
const ACCENT = '#C24E1A'

/**
 * ImagePlaceholder — a styled, dignified archival-image slot.
 * Renders as a semantic <figure> with an accessible label. When a real
 * asset arrives, swap this for an <img src=... loading="lazy" alt={alt} />.
 * The `hint` documents the intended visual for whoever supplies the art.
 */
function ImagePlaceholder({ alt, caption, hint }) {
  return (
    <ScrollReveal variant="scaleUp" duration={1.1}>
      <figure
        className="my-6 md:my-9 mx-auto max-w-[620px]"
        role="img"
        aria-label={alt}
      >
        {/* TODO: replace this placeholder with the archival asset described in `hint`.
            Suggested markup: <img src="/act2-..." alt={alt} loading="lazy" className="w-full rounded-2xl object-cover" /> */}
        <div
          className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-[#C24E1A]/20"
          style={{
            background:
              'linear-gradient(135deg, #FBE7C6 0%, #F7D9A8 45%, #F1C98A 100%)',
          }}
        >
          {/* subtle film-grain / frame decoration */}
          <div className="absolute inset-3 rounded-xl border border-white/40" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.4em] text-[#8A4A1C]/70 mb-2">
              Archival&nbsp;&middot;&nbsp;Image
            </span>
            <span className="font-serif italic text-[clamp(0.95rem,2vw,1.2rem)] leading-snug text-[#7A3E14]/85 max-w-[85%]">
              {hint}
            </span>
          </div>
        </div>
        <figcaption className="mt-2.5 font-sans text-[0.8rem] md:text-sm tracking-wide text-[#2C2C2C]/55 text-center italic">
          {caption}
        </figcaption>
      </figure>
    </ScrollReveal>
  )
}

/**
 * FrankieismCard — premium quote card for a Frankie-ism.
 * Large typography, accent color, decorative quotation mark.
 */
function FrankieismCard({ text }) {
  return (
    <ScrollReveal variant="fadeUp" duration={1}>
      <div className="my-8 md:my-12 mx-auto max-w-[680px]">
        <div
          className="relative rounded-2xl px-8 md:px-12 py-9 md:py-12 text-center bg-white/40 border"
          style={{ borderColor: `${ACCENT}33` }}
        >
          {/* decorative quotation mark */}
          <span
            className="absolute left-5 top-1 md:left-7 font-serif leading-none select-none"
            style={{ color: `${ACCENT}30`, fontSize: 'clamp(4rem,9vw,6.5rem)' }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p
            className="font-sans text-[0.62rem] uppercase tracking-[0.4em] mb-4"
            style={{ color: ACCENT, opacity: 0.7 }}
          >
            Frankie&rsquo;ism
          </p>
          <p
            className="font-serif italic font-light text-[clamp(1.35rem,3.2vw,2.15rem)] leading-[1.4] tracking-wide"
            style={{ color: ACCENT }}
          >
            {text}
          </p>
          <div
            className="mt-6 mx-auto h-[2px] w-14 rounded-full"
            style={{ backgroundColor: ACCENT, opacity: 0.5 }}
            aria-hidden="true"
          />
        </div>
      </div>
    </ScrollReveal>
  )
}

/**
 * StoryBlock — renders one narrative block with typographic hierarchy.
 * Body copy keeps a comfortable reading width; emphasis lines are centered
 * and allowed to wrap (Act II lines are longer than Act I's).
 */
function StoryBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return (
        <ScrollReveal variant="fadeUp" duration={0.9}>
          <div className="pt-10 md:pt-16 pb-3 md:pb-5 text-center">
            <div
              className="mx-auto mb-4 h-[3px] w-12 rounded-full"
              style={{ backgroundColor: ACCENT, opacity: 0.6 }}
              aria-hidden="true"
            />
            <h3 className="font-serif font-light text-[clamp(1.7rem,4.2vw,2.9rem)] leading-[1.12] tracking-[-0.01em] text-[#2C2C2C]">
              <TextReveal text={block.content} mode="word" staggerDelay={0.06} duration={0.7} />
            </h3>
          </div>
        </ScrollReveal>
      )

    case 'image':
      return <ImagePlaceholder alt={block.alt} caption={block.caption} hint={block.hint} />

    case 'frankieism':
      return <FrankieismCard text={block.content} />

    case 'pullquote':
      return (
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="my-6 md:my-9 mx-auto max-w-[560px] text-center">
            <p
              className="font-serif font-medium text-[clamp(1.6rem,4.5vw,2.75rem)] leading-[1.2] tracking-[0.02em]"
              style={{ color: ACCENT }}
            >
              {block.content}
            </p>
          </div>
        </ScrollReveal>
      )

    case 'boxed':
      return (
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div
            className="my-4 md:my-6 mx-auto max-w-[640px] rounded-xl px-6 md:px-8 py-5 md:py-6 bg-white/25 border"
            style={{ borderColor: `${ACCENT}33` }}
          >
            <p className="font-serif italic font-light text-[clamp(1.05rem,2.3vw,1.45rem)] leading-[1.5] text-[#2C2C2C] text-center">
              {block.content}
            </p>
          </div>
        </ScrollReveal>
      )

    case 'dialogue':
      return (
        <ScrollReveal variant="fadeIn" duration={1}>
          <div className="py-1.5 md:py-2 text-center">
            <p
              className="font-serif italic text-[clamp(1.15rem,2.6vw,1.7rem)] leading-[1.4]"
              style={{ color: ACCENT }}
            >
              {block.content}
            </p>
          </div>
        </ScrollReveal>
      )

    case 'bold-emphasis':
      return (
        <ScrollReveal variant="fadeIn" duration={1.1}>
          <div className="py-2 md:py-3 text-center">
            <p className="font-serif font-semibold italic leading-[1.35] text-[#2C2C2C] text-[clamp(1.2rem,2.8vw,1.85rem)]">
              {block.content}
            </p>
          </div>
        </ScrollReveal>
      )

    case 'emphasis':
      return (
        <ScrollReveal variant="fadeIn" duration={1.1}>
          <div className="py-1.5 md:py-2.5 text-center">
            <p className="font-serif font-light italic leading-[1.4] text-[#2C2C2C]/90 text-[clamp(1.1rem,2.5vw,1.6rem)]">
              {block.content}
            </p>
          </div>
        </ScrollReveal>
      )

    case 'centered':
      return (
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <div className="py-3 md:py-5 text-center">
            {block.lines.map((line, i) => (
              <p
                key={i}
                className="font-serif font-light text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] tracking-[0.02em]"
                style={{ color: ACCENT }}
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>
      )

    case 'separator':
      return (
        <div className="py-3 md:py-5 text-center" aria-hidden="true">
          <span className="font-serif text-[#2C2C2C]/25 text-2xl tracking-[0.5em]">
            &hellip;&hellip;&hellip;
          </span>
        </div>
      )

    default: // 'text' — body copy
      return (
        <ScrollReveal variant="fadeUp" duration={0.9}>
          <p className="font-serif text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.7] text-[#2C2C2C]/85 mb-3 md:mb-4">
            {block.content}
          </p>
        </ScrollReveal>
      )
  }
}

/**
 * FrankieStoryActTwo — Act II narrative chapter ("Becoming").
 * Renders Frankie's exact words in a cinematic, immersive reading flow,
 * mirroring the storytelling system established in Act I.
 */
export default function FrankieStoryActTwo() {
  const act = content.acts?.[1]
  if (!act || !act.story) return null
  return (
    <div className="pt-0 pb-8 md:pb-14 px-6 md:px-10 lg:px-16">
      <div className="max-w-[760px] mx-auto">
        {act.story.map((block, i) => (
          <StoryBlock key={i} block={block} />
        ))}
      </div>
    </div>
  )
}
