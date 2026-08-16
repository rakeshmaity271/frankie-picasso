import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActFive — "The Survivor"
 * Act V spans the motorcycle accident, the trauma hospital, rehabilitation,
 * the "Dark Night of the Soul," and the emergence of the coach within.
 *
 * Text is verbatim from the client's "Act 5 – The Survivor.docx" extraction.
 *
 * Typography hierarchy (mirrors FrankieStoryActThree.jsx):
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActFive() {
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
        I was really just getting started when everything changed.
      </motion.p>

      {/* ============================================================
          A NEW PASSION — Mercury
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My marriage was over. Just a few weeks earlier, I had gone to a lawyer to arrange a separation agreement. Work was fulfilling, life was busy, and I had found another passion.
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
          Motorcycles.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I belonged to three riding clubs and absolutely loved my bike. Her name was Mercury—a silver Yamaha 650 V-Star with purple LED running lights and red, yellow and blue lights that flickered like flames whenever I rode at night.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One summer evening, I was leading a group ride through the countryside. The air smelled of fresh-cut hay, horses and clover. We were about ten kilometres from our planned stop at Tim Hortons when everything changed.
      </motion.p>

      {/* ============================================================
          THE ACCIDENT — Standalone Dramatic Beats
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
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          A car ran a stop sign.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          It struck me broadside.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The next thing I remember was lying on the gravel at the side of the road.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Electric shocks seemed to race through my body. I searched for Mercury and saw what looked like a cartoon-shaped cutout in the windshield where my body had flown through. My helmet had saved my head.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had no idea how badly I was hurt, but I remember joking with the first responders, &ldquo;Make sure you bring my left leg with us.&rdquo;
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I knew it wasn&rsquo;t where it was supposed to be.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        By the time the ambulance, firefighters and police arrived, darkness had settled over the highway. As they loaded me into the ambulance, I looked up at the stars and wondered a question no one is ever prepared to ask.
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
          Was I going to live&hellip; or die?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The two men I had been riding with were devastated. I could see the fear in their faces—not only for me, but for the ride home they would now have to make without knowing whether their friend would survive. There was anger too. The driver who hit me had run a stop sign, and beside him his wife was holding a baby in her arms without a car seat.
      </motion.p>

      {/* ============================================================
          THE DIAGNOSIS — Trauma Centre
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was taken first to a local hospital to stabilize my injuries before being transferred to one of Toronto&rsquo;s major trauma centres.
      </motion.p>

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
          The diagnosis was staggering.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Two broken femurs. A broken hip. A fractured pelvis. A dislocated thumb.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The surgeons repaired both femurs that first night, but my hip and pelvis would have to wait until the swelling subsided. When I was finally taken into surgery several weeks later, I woke expecting to hear how everything had gone.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Instead, I learned the surgery had been cancelled. A severe yeast infection had developed on my skin while I lay immobilized in bed, and the operation had to be postponed once again.
      </motion.p>

      {/* ============================================================
          DEPENDENCE — The Hardest Lesson
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
          }}
        >
          For the first time in my life, I couldn&rsquo;t do anything for myself.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          The nurses bathed me, fed me and cared for my every need.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        For someone who had built businesses, organized events and prided herself on being fiercely independent, learning to depend entirely on other people was one of the hardest lessons of my life.
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
          Then came the news I never expected to hear.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          I would likely spend six months in hospital.
        </p>
      </motion.div>

      {/* ============================================================
          EVERYTHING DISAPPEARING
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Only then did the full weight of what had happened begin to sink in.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The life I had been building was disappearing before my eyes.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Within weeks my position at work had been reorganized. My bandmates came to my house and quietly collected their equipment from my basement. I was no longer a drummer.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Eight days after the accident, I was supposed to be on a plane to Shanghai as a member of the Canadian National Dragon Boat Team.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Instead, I lay in a hospital bed, wondering what my future would look like.
      </motion.p>

      {/* ============================================================
          REHABILITATION — Learning to Live It Again
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        After three months, I was transferred to a rehabilitation hospital.
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
          Everything changed.
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
          The trauma hospital had saved my life.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          The rehab hospital taught me how to live it again.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There, they didn&rsquo;t care if it took ten people to get me to the bathroom. They simply did whatever it took, always with patience, encouragement and a smile. Their kindness became part of my recovery.
      </motion.p>

      {/* ============================================================
          DARK NIGHT OF THE SOUL — Level 1 Emotional Peak
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One night, after everyone had gone home and the rehabilitation hospital had grown quiet, I realized something that terrified me.
      </motion.p>

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
          Everything I had thought defined me was gone.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          My marriage.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          My career.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          My band.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          Dragon boating.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          My independence.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          My plans.
        </p>
      </motion.div>

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
          Who was I now?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Some people call it the &ldquo;Dark Night of the Soul.&rdquo; Looking back, I suppose that&rsquo;s what it was.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        That night I realized something I had never considered before. We spend so much of our lives believing we are what we do. But when everything I did was stripped away, I was forced to discover who I was without any of it.
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
          The answer didn&rsquo;t come that night.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          But the question changed me forever.
        </p>
      </motion.div>

      {/* ============================================================
          ENCOURAGING OTHERS — The Coach Emerges
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        About a month after I arrived, something unexpected happened.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The nurses asked if I would visit other patients and encourage them to do their therapy.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I remember thinking how ironic that was.
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
          I couldn&rsquo;t walk.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          I couldn&rsquo;t even move my legs.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Yet somehow they saw something in me that I couldn&rsquo;t yet see in myself.
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
          Many of the patients had given up hope.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          I hadn&rsquo;t.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Curiosity has always been one of my greatest teachers. As I watched some patients fight for every inch of progress while others quietly gave up, I couldn&rsquo;t help wondering what made the difference. So I began talking to people about their lives, their outlook and the homes they had grown up in. I wasn&rsquo;t conducting scientific research—I was simply trying to understand hope.
      </motion.p>

      {/* ============================================================
          GRATITUDE — Thanking the Staff
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Before I left the hospital, I asked if I could speak to the CEO.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I wanted to thank the staff—not just the doctors and nurses, but everyone who had played a part in my recovery. I wanted them to know how much their attitudes had mattered. Their encouragement had carried me through some of the darkest days of my life.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The hospital arranged a formal gathering, and I had the opportunity to speak.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Afterwards, many of the staff came up to me with tears in their eyes. They told me that hearing my perspective had reminded them why they had chosen healthcare in the first place. Too often, they said, all they ever heard were complaints. Very few patients ever stopped to say thank you.
      </motion.p>

      {/* ============================================================
          TRYING IS LYING — The Final Lesson
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
          There was one more lesson rehabilitation gave me.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          One day during physiotherapy, my therapist asked me to move my left leg.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
            opacity: 0.75,
          }}
        >
          &ldquo;I am trying,&rdquo; I insisted.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          &ldquo;No,&rdquo; he replied. &ldquo;You&rsquo;re not.&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        At first, I was frustrated. Of course I was trying.
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
          Then I realized something profound.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          In coaching we have a saying: Trying is lying.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        In my conscious mind, I believed I was trying. But my subconscious already knew it was going to hurt, so it had quietly decided not to move.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          The moment I understood that&hellip;
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
          my leg moved.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        That lesson has stayed with me ever since. How often do we tell ourselves we&rsquo;re trying, when what we&rsquo;re really doing is protecting ourselves from pain?
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
        Looking back, I think that&rsquo;s where the coach inside me truly began to emerge.
      </motion.p>

      {/* ─ Frankie'ism — recurring visual signature ─ */}
      <div className="pt-2 md:pt-4">
        <Frankieism
          label="Frankie'ism"
          text="Sometimes losing everything you thought defined you is how you discover who you really are."
          accentColor="#DF3CB5"
          textColor="#A81D86"
        />
      </div>
    </motion.div>
  )
}
