import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActSeven — "Beginning Again"
 * Act VII spans retirement, grief, the Girl Power Talk assignment,
 * Girl Power USA, and the founding of G-Woman Media.
 *
 * Text is verbatim from the client's Act 7 document extraction.
 *
 * Typography hierarchy (mirrors FrankieStoryActSix.jsx):
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActSeven() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-[760px] mx-auto px-6 md:px-0 py-0.5 md:py-2 text-[#2C2C2C]"
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      transition={{ staggerChildren: 0.08 }}
    >
      {/* ============================================================
          OPENING HOOK — Level 1 Emotional Peak
          ============================================================ */}
      <motion.p
        variants={fadeInUp}
        className="font-serif italic leading-snug"
        style={{ fontSize: 'clamp(1.15rem, 2.8vw, 2rem)', marginBottom: 'clamp(2.5rem, 5vh, 4rem)', lineHeight: 1.2, paddingBottom: 'clamp(1.75rem, 3.5vh, 2.5rem)' }}
      >
        I officially retired at sixty-five&mdash;and almost immediately discovered that retirement wasn&rsquo;t all it was cracked up to be.
      </motion.p>

      {/* ============================================================
          THE DRIFT — Grief and Loss
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 0,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          I didn&rsquo;t know what to do with myself.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My father had passed away three months earlier, and then my beloved dog died on my birthday. I was grieving, lost and, quite honestly, a mess.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was still doing radio and painting, but I had stopped coaching and felt as though I were drifting. I wasn&rsquo;t sleeping. I wasn&rsquo;t interested in much of anything. For someone who had spent her entire life creating, working, helping and charging headfirst into the next adventure, having nowhere in particular to go was not relaxing.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          It was depressing.
        </p>
      </motion.div>

      {/* ============================================================
          WANTING TO BE VALUED
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had spent years volunteering with different organizations, giving away my time, experience and energy. Eventually, I began to wonder whether it might be nice to get paid again. I didn&rsquo;t care if it was only one dollar an hour. I simply wanted something that said, We value you. We value your time. What you bring matters.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          Some people are cut out for retirement. Apparently, I am not.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Besides, I have thirteen grandchildren. Trust me, there is a birthday every month. I needed money to support my Glamma habit.
        </p>
      </motion.div>

      {/* ============================================================
          THE ASSIGNMENT — Girl Power Talk
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Around that time, I reached out to a friend who offered me an opportunity to take a deep dive into his company. He asked me to interview some of his employees and write a report about what I discovered.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            marginBottom: 0,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          What I discovered was myself.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I came out of those interviews recharged and ready to fly to the moon. It was as though someone had flipped a switch and turned the lights back on inside me. The energy radiating from the young women I interviewed felt like a gift. Their intelligence, ambition, optimism and determination reminded me of everything I still loved about working with people.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          The company was called Girl Power Talk, and before I had even finished my assignment, I told my friend, &ldquo;I have to work here.&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Girl Power Talk was founded on the belief that young people deserve an innovative work culture that recognizes talent and potential regardless of gender or background. It was more than a company. It was a movement rooted in empowerment, professional ambition and social impact.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Young women and men from around the world were given opportunities to learn, develop their talents and gain real-world experience across fields such as law, marketing, video production, social media and finance. They worked with actual clients while also receiving training in writing, financial responsibility, career development and social impact.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I worked with young people from India, Kenya, Egypt, Nigeria, Uganda, Lebanon, Kazakhstan, Indonesia, the Philippines and beyond. They brought different cultures, experiences and perspectives to the table, yet they shared the same determination to create meaningful futures for themselves.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Their energy was contagious.
        </p>
      </motion.div>

      {/* ============================================================
          GIRL POWER USA — Building the Nonprofit
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I spent a year working as a Director at Girl Power Talk. During that time, Girl Power USA had just received its 501(c)(3) nonprofit designation&mdash;but beyond that designation, there was no organization yet. No team, no programs and no established direction.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          I was asked to build it.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        For a while, I worked within both companies. Then we invited a group of young people from Girl Power Talk who were passionate about social impact to join me. Together, we formed the first Girl Power USA team.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was the Executive Director from the beginning, and we hit the ground running.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Our purpose was to support young people and vulnerable communities, primarily in India and Africa. We helped young medical students in Uganda continue their education and worked to address period poverty in communities across Africa. We supported sexual-health education for young mothers in Homa Bay and assisted a Nairobi home caring for children with cerebral palsy.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        In Uganda, we supported organizations helping children who were living and working on the streets and organized medical camps. In Nigeria, we worked with Enable the ENABLED, an organization helping women and children with disabilities develop new skills and find employment. In India, we helped provide food, clothing and other necessities to families in need, as well as run an after-school program for young children in the offices of Girl Power Talk.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Every project was different, but the purpose was always the same: to give people the resources, opportunities and dignity they needed to create better lives.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Social impact is my love language. I have always tried to weave it into everything I do. To me, success has never been only about what we accomplish for ourselves. It is also about who is better off because we were here.
        </p>
      </motion.div>

      {/* ============================================================
          G-WOMAN MEDIA — The New Chapter
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        While I was working with Girl Power USA, another idea was beginning to take shape.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My longtime friend Alex Okoroji was already an experienced media entrepreneur. She owned BRAG! Media and hosted The Naked Talk, so she understood the power of media, storytelling and owning the space from which those stories are told.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Alex and I had met in 2016 and collaborated on the book I Bared My Chest in 2017. We shared a passion for women, storytelling and social impact&mdash;but the idea that became G-Woman Media did not begin with just the two of us.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We had been volunteering with another women&rsquo;s organization for approximately four years. In our roles as Directors and Global Chair, we proposed creating a global media platform that would amplify women&rsquo;s voices and give women greater ownership of their stories.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          The organization wasn&rsquo;t interested in pursuing the idea.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          But we couldn&rsquo;t let it go.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We believed the gap was too important to ignore. So those of us who shared the vision left the organization and decided to build it ourselves.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There was another truth we had also begun to recognize. We had volunteered for years, freely contributing our experience, creativity, contacts and labour. We wanted to create something that acknowledged the value of women&rsquo;s work&mdash;not only with praise and gratitude, but financially.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Historically, women have given away far too much of themselves. We donate our time, minimize our contributions and accept appreciation in place of compensation. We needed to stop apologizing for wanting to be paid and start showing the world&mdash;and ourselves&mdash;what our work was worth.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          So we created a media company that would value women&rsquo;s voices and women&rsquo;s labour.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Now, in the interest of complete honesty, G-Woman Media has been operating for a year and a half, and we still haven&rsquo;t been paid.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Apparently, we are still working out that particular detail. Actually, we are reinvesting in ourselves, growing our resources and developing BIG ideas.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        But the reason G-Woman Media matters goes far beyond any one of us.
      </motion.p>

      {/* ============================================================
          WHY MEDIA MATTERS — Level 1 Emotional Peak
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Media is the gateway to information. Governments, corporations and powerful institutions have always understood that whoever owns the media has enormous influence over what people see, hear and ultimately believe. Ownership determines which stories are told, which voices are treated as authorities and whose experiences become part of the public record.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Women have never held that kind of collective media power on a global scale.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Many women don&rsquo;t yet realize why that matters. But when women do not own the platforms, we are always dependent upon someone else to decide whether our stories are worthy, how they should be framed and whether they will be told at all.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            marginBottom: 0,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          If you don&rsquo;t own the platforms, you don&rsquo;t own the message.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          G-Woman Media was created to change that.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Alex and I became partners in 2021, and the company was formally incorporated in 2023. Our public launch began in March 2025.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Today, G-Woman Media owns a digital magazine platform, a global 24/7 radio station, a television platform, an original-stories division and a community where women can gather, share, learn and grow together.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          It is an ecosystem designed by women, owned by women and built to amplify women across borders.
        </p>
      </motion.div>

      {/* ============================================================
          CLOSING — The Intermission
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        className="my-8 md:my-12"
        style={{ paddingY: 'clamp(1.25rem, 2.5vh, 2rem)' }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Retirement was supposed to be my closing chapter.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Instead, it became an intermission.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Girl Power Talk reminded me that I still had something to contribute. Building Girl Power USA returned me to the work that mattered most to me. And G-Woman Media opened the door to an entirely new act&mdash;one more ambitious, more global and perhaps more audacious than anything I had imagined.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            marginBottom: 0,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          Apparently, I wasn&rsquo;t ready to retire.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 0,
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          I was only getting ready to begin again.
        </p>
      </motion.div>

      {/* ─ Frankie'ism — recurring visual signature ─ */}
      <div className="pt-2 md:pt-4">
        <Frankieism
          label="Frankie'ism"
          text="Some people are cut out for retirement. Apparently, I am not."
          accentColor="#D4764E"
          textColor="#A85A3A"
        />
      </div>
    </motion.div>
  )
}
