import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActFour — "The Leader"
 * Act IV spans the Ontario government years: SPIRIT, Dragon Boat teams,
 * community programs, and the CN Tower climb — ending at the stop sign.
 *
 * Text is verbatim from the client's "Act 4 – The Leader.docx" extraction.
 *
 * Typography hierarchy (mirrors FrankieStoryActThree.jsx):
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActFour() {
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
        Two days after promoting Paul Biafore&rsquo;s World Championship event, I received a phone call that would change the direction of my life.
      </motion.p>

      {/* ============================================================
          THE CALL — Scene Setting
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        It was the Office of the Solicitor General for the Province of Ontario.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        They wanted to know if I could organize an event for the Ministry of Justice.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        To this day, I don&rsquo;t know how they found me. Maybe someone had attended the fight. Maybe they had heard about it through someone else. It really doesn&rsquo;t matter. What mattered was that someone saw something in me that I hadn&rsquo;t yet seen in myself.
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
            marginBottom: 0,
          }}
        >
          Of course, I said yes.
        </p>
      </motion.div>

      {/* ============================================================
          A NEW CHAPTER — Inside the Ontario Government
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        What began as organizing one event soon turned into a full-time career with the Ontario government. For the first time in my life, I wasn&rsquo;t working for myself. After years of building businesses and creating opportunities from scratch, I suddenly found myself inside one of the largest organizations in the province. It was a huge adjustment, but with three children, braces to pay for, and a health plan that actually sounded appealing, it was the right decision.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        After several years with the Ministry of Justice, I was seconded to Cabinet Office, eventually becoming Special Advisor for SPIRIT under the Deputy Minister of Labour. My job was unlike anything I had ever done before.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The government had recently decentralized, leaving many regional offices feeling disconnected from Queen&rsquo;s Park. Tensions also existed between different unions after labour disputes. My challenge was simple to describe but much harder to accomplish: create programs that brought sixty thousand public servants together without spending money on salary increases.
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
          }}
        >
          I loved every minute of it.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          I discovered that my real gift wasn&rsquo;t organizing events.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          It was bringing people together around a common purpose.
        </p>
      </motion.div>

      {/* ============================================================
          DRAGON BOAT — Titles Disappear in the Same Boat
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One of my favourite initiatives was creating a government Dragon Boat team. It didn&rsquo;t matter whether someone was twenty-five or sixty-five, an executive or an administrative assistant. Once everyone climbed into the same boat, titles disappeared. There was only one goal: paddle together.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The first year we competed, we won every race we entered. Before long, the team was so committed they purchased their own Dragon Boat.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        The races became more than competitions. They became a symbol of what could happen when people trusted one another.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We also built volunteer emergency response teams with local fire departments, encouraged public servants to mentor high school students completing their community service hours, and looked for every opportunity to strengthen communities instead of simply managing departments.
      </motion.p>

      {/* ============================================================
          THE CN TOWER — Keep Climbing
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
          One of our charity challenges was climbing the CN Tower.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          One hundred and forty-four flights of stairs.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          One thousand one hundred and twenty-two feet.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        On paper it sounded difficult. In reality, it was brutal.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Inside the concrete stairwell the air was hot and heavy. Moisture clung to the walls. People were sitting on different landings, exhausted, trying to catch their breath before taking another step.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We had been told there would be water stations, but I ran out of water halfway up. By the time I finally reached the next station, the water was warm.
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
          My colleague finished the climb in fourteen minutes.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          It took me forty-five.
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
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          I wasn&rsquo;t racing him.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          I was racing the little voice in my head that wanted me to quit.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(0.75rem, 1.5vh, 1rem)',
        }}
      >
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          When I finally stepped out at the top, I wasn&rsquo;t thinking about my time.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            marginBottom: 0,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          I was simply proud that I had finished.
        </p>
      </motion.div>

      {/* ============================================================
          THE LESSON — SPIRIT's True Meaning
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        That climb reminded me of everything we were trying to accomplish through SPIRIT. It was never about being the fastest or the strongest. It was about ordinary people discovering they were capable of more than they ever imagined when they challenged themselves—and supported one another along the way.
      </motion.p>

      {/* ============================================================
          THE CLIFFHANGER — Life at Its Fullness
          ============================================================ */}
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
          Life was full.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          The work was meaningful.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I truly believed I had found exactly where I was supposed to be.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I felt like I was just getting started.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 0,
          paddingY: 'clamp(1.25rem, 2.5vh, 2rem)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          Then, one summer evening, a car ran a stop sign.
        </p>
      </motion.div>

      {/* ─ Frankie'ism — recurring visual signature ─ */}
      <div className="pt-2 md:pt-4">
        <Frankieism
          label="Frankie'ism"
          text="You don’t have to be the fastest. You just have to keep climbing."
          accentColor="#01B2D4"
          textColor="#086F85"
        />
      </div>
    </motion.div>
  )
}
