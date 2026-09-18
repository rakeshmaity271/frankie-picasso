import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../common/ScrollReveal'

const EASE = [0.22, 1, 0.36, 1]

const milestones = [
  {
    year: 'The Beginning',
    period: 'Early Life',
    title: 'Where Belief Began',
    description: 'A childhood on the farm taught Frankie that love expressed through belief is the most powerful force there is.',
    image: '/images/act1-childhood-with-dog.jpg',
    imageAlt: 'Young Frankie with her dog on the farm — where it all began.',
    accent: '#8B5FB0',
  },
  {
    year: 'Becoming',
    period: 'Youth',
    title: 'Finding Her Voice',
    description: 'From school corridors to early adventures, Frankie learned that the only limits are the ones we accept.',
    image: '/images/act2-youth-cowboy-hat-puppy.jpg',
    imageAlt: 'Frankie as a young woman — discovering who she was becoming.',
    accent: '#EE5802',
  },
  {
    year: '1990s',
    period: 'The Builder',
    title: 'Roundhouse Promotions',
    description: 'First professional female kickboxing promotion company. Breaking barriers in a world that said she couldn\'t.',
    image: '/images/act3-kickboxing-championship-poster.jpg',
    imageAlt: 'Roundhouse kickboxing championship poster — Frankie as promoter.',
    accent: '#629E46',
  },
  {
    year: '2000s',
    period: 'The Leader',
    title: 'Government Leadership',
    description: 'From organizing a single event to a full-time career — strategic planning across Ontario government ministries.',
    image: '/images/act5-motorcycle-studio-portrait.jpg',
    imageAlt: 'Frankie in her leadership years — bringing people together.',
    accent: '#01B2D4',
  },
  {
    year: '2010s',
    period: 'The Broadcaster',
    title: 'The Good Radio Network',
    description: 'International positive-impact media platform. Mission Unstoppable became a voice for people who deserved to be heard.',
    image: '/images/media-podcast-studio-portrait.jpg',
    imageAlt: 'Frankie in the radio studio — amplifying voices that matter.',
    accent: '#DF3CB5',
  },
  {
    year: '2020s',
    period: 'The Author',
    title: 'International Bestsellers',
    description: 'Midlife Mojo and other titles became international bestsellers. Writing as a conversation with the reader.',
    image: '/images/book-midlife-mojo-cover.jpg',
    imageAlt: 'Midlife Mojo — an international bestselling book by Frankie Picasso.',
    accent: '#FFB400',
  },
  {
    year: '2024',
    period: 'Recognition',
    title: 'Woman of the Decade',
    description: 'Honored by Women\'s Economic Forum for a decade of impact across media, advocacy, and community building.',
    image: '/images/recent-frankie-with-mara.jpg',
    imageAlt: 'Frankie with family — legacy is what we awaken in others.',
    accent: '#D4764E',
  },
  {
    year: 'Present',
    period: 'Still Becoming',
    title: 'The Story Continues',
    description: 'Still building, still creating, still connecting. The next chapter isn\'t something that happens to us — it\'s something we choose to create.',
    image: '/images/recent-frankie-playing-drums.jpg',
    imageAlt: 'Frankie playing drums — creative expression as a way of life.',
    accent: '#3B5998',
  },
]

function MilestoneNode({ milestone, index, isLeft }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center mb-12 md:mb-16 ${
        isLeft ? '' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
    >
      {/* Left content or image */}
      <div className={`${isLeft ? 'md:text-right' : 'md:order-3'}`}>
        {isLeft ? (
          <MilestoneText milestone={milestone} />
        ) : (
          <MilestoneImage milestone={milestone} />
        )}
      </div>

      {/* Center path node */}
      <div className="hidden md:flex flex-col items-center relative z-10">
        <div
          className="w-4 h-4 rounded-full border-2 bg-white"
          style={{ borderColor: milestone.accent }}
        />
        <div
          className="w-[1px] h-16 md:h-20"
          style={{ backgroundColor: `${milestone.accent}30` }}
        />
      </div>

      {/* Right content or image */}
      <div className={`${isLeft ? 'md:order-3' : ''}`}>
        {isLeft ? (
          <MilestoneImage milestone={milestone} />
        ) : (
          <MilestoneText milestone={milestone} />
        )}
      </div>
    </motion.div>
  )
}

function MilestoneText({ milestone }) {
  return (
    <div className="px-2 md:px-0">
      <p
        className="font-sans text-[0.65rem] uppercase tracking-[0.25em] mb-1.5"
        style={{ color: milestone.accent }}
      >
        {milestone.period}
      </p>
      <h3 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] mb-2">
        {milestone.title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-[#4A4A4A] mb-3">
        {milestone.description}
      </p>
      <span className="font-serif italic text-sm" style={{ color: milestone.accent }}>
        {milestone.year}
      </span>
    </div>
  )
}

function MilestoneImage({ milestone }) {
  return (
    <div className="flex justify-center md:justify-start">
      <div
        className="relative w-full max-w-[280px] md:max-w-[240px] p-2 bg-white rounded-sm shadow-[0_8px_24px_rgba(44,44,44,0.1)]"
        style={{ transform: `rotate(${Math.random() > 0.5 ? -1.5 : 1.5}deg)` }}
      >
        <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: '4 / 3' }}>
          <img
            src={milestone.image}
            alt={milestone.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative py-12 md:py-20 px-6 md:px-10 lg:px-16"
      style={{ backgroundColor: '#F5EFE6' }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Section header */}
        <ScrollReveal variant="fadeUp">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#FFB400] mb-4">
            The Journey
          </p>
          <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.5rem)] text-[#2C2C2C] mb-3">
            A Life in Chapters
          </h2>
          <p className="font-sans text-base md:text-lg text-[#4A4A4A] max-w-[600px] mb-10 md:mb-14">
            Every chapter built on the one before it. Every lesson led to the next.
          </p>
        </ScrollReveal>

        {/* Winding path journey */}
        <div className="relative">
          {/* Vertical path line — visible on md+ */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
            style={{ backgroundColor: '#FFB40020' }}
            aria-hidden="true"
          />

          {milestones.map((milestone, i) => (
            <MilestoneNode
              key={i}
              milestone={milestone}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}

          {/* End marker */}
          <div className="flex justify-center">
            <div className="w-3 h-3 rounded-full bg-[#FFB400]" />
          </div>
        </div>
      </div>
    </section>
  )
}
