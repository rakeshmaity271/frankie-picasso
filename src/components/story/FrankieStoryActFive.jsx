import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActFive — "The Survivor"
 * Act V spans the motorcycle accident, the trauma hospital, rehabilitation,
 * the "Dark Night of the Soul," and the emergence of the coach within.
 *
 * Text follows the client's "Act V – The Survivor" rewritten document.
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
        Sometimes life doesn&rsquo;t ask whether you&rsquo;re ready.
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
          &ldquo;The trauma hospital had saved my life. The rehab hospital taught me how to live it again.&rdquo;
        </p>
      </motion.div>

      {/* ============================================================
          THE NIGHT EVERYTHING CHANGED
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
          The Night Everything Changed
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was really just getting started when everything changed.
      </motion.p>

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
        I belonged to three riding clubs and absolutely loved my bike. Her name was Mercury &mdash; a silver Yamaha 650 V-Star with purple LED running lights and red, yellow and blue lights that flickered like flames whenever I rode at night.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One summer evening, I was leading a group ride through the countryside. The air smelled of fresh-cut hay, horses and clover. We were about ten kilometres from our planned stop at Tim Hortons when everything changed.
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
        The next thing I remember was lying on the gravel at the side of the road. Electric shocks seemed to race through my body. I searched for Mercury and saw what looked like a cartoon-shaped cutout in the windshield where my body had flown through. My helmet had saved my head.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had no idea how badly I was hurt, but I remember joking with the first responders, &ldquo;Make sure you bring my left leg with us.&rdquo; I knew it was not where it was supposed to be.
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
          Was I going to live&hellip;or die?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The two men I had been riding with were devastated. I could see the fear in their faces &mdash; not only for me, but for the ride home they would now have to make without knowing whether their friend would survive. There was anger too. The driver who hit me had run a stop sign, and beside him his wife was holding a baby in her arms without a car seat.
      </motion.p>

      {/* ============================================================
          THE TRAUMA HOSPITAL
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
          The Trauma Hospital
        </p>
      </motion.div>

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
          For the first time in my life, I could not do anything for myself.
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

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The days blurred together. I was hooked up to a morphine pump, and much of that time became a haze of waiting for surgery, recovering from surgery and hoping for something as basic as being able to go to the bathroom.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        After fourteen days, I began vomiting. The nurses gave me enemas, stool softeners and every kind of medication they could think of, but between the morphine, the pain and barely eating, nothing worked. I was miserable.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The room itself seemed to operate like musical beds. Patients were constantly arriving, leaving or being moved. I never knew who would be beside me from one day to the next. Some nurses were kind, but others seemed thoroughly miserable and made no attempt to hide it.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then SARS hit the hospital. Visitors were restricted, and I was allowed only one. I desperately missed my family. My seventeen-year-old son had to drive his siblings the considerable distance from our home to the hospital, and I worried about him making that drive.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        As if that were not enough, the hospital lost power during the blackout. I had been moved onto a special air bed, but when the power went out, so did my mattress. The bed deflated beneath me until I was lying against metal with two broken femurs, a broken hip and a fractured pelvis.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The generator did not kick in, and no one seemed to know how to get the bed working again. I could not move myself or escape the metal pressing into my broken body. All I could do was wait.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The blackout also reduced the hospital menu to an apparently endless supply of egg-salad sandwiches. I found them disgusting and eventually stopped eating unless someone brought me fruit salad, which did not happen very often.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Even the lawyers who first came to see me added to the strain. They were rude and condescending, treated me as though I were not worth their time and told me not to expect much of a settlement. I let them go. Being injured did not mean I had forgotten how I deserved to be treated.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Only then did the full weight of what had happened begin to sink in. The life I had been building was disappearing before my eyes.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Within weeks, my position at work had been reorganized. My bandmates came to my house and quietly collected their equipment from my basement. I was no longer a drummer.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Eight days after the accident, I was supposed to be on a plane to Shanghai as a member of the Canadian National Dragon Boat Team.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Instead, I lay in a hospital bed, wondering what my future would look like.
      </motion.p>

      {/* ============================================================
          LEARNING TO LIVE AGAIN
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
          Learning to Live Again
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
        After three months, I was finally transferred by ambulance to St. John&rsquo;s Rehabilitation Hospital.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        That first day was monumental. For the first time, someone helped me sit up. I was carried into an actual bathroom &mdash; no more bedpans &mdash; and I had my first shower in three months.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        All right, I was lying on a special stretcher while they wheeled me into the shower room and hosed me down. But, oh my God, it was the best I had felt in months.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then I had my first fresh meal: a spinach salad that tasted like heaven. I had not eaten fresh food for months. I was also shocked to discover that I had lost forty pounds simply lying in bed.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The staff were amazing. They approached everything with a &ldquo;can-do&rdquo; attitude and a smile. Their kindness became part of my recovery.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My days now included occupational therapists, physiotherapists, a physiatrist, psychiatrists, nurses and doctors. I hoped that, together, they could get me home and help me begin the next chapter of my life.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I even invented an extender for shaving my legs using a baby&rsquo;s clothes hanger. The occupational therapist was blown away. I remember thinking, Really? Necessity truly is the mother of invention.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was busy in rehabilitation. Life took on a new rhythm. I learned to use a transfer board to move from the bed to a wheelchair, or from a wheelchair into a car. Because I could not use either leg, I had to pull myself up and lift my entire body using my arms.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Thank God I had trained my triceps like a maniac while preparing for the Dragon Boat Team. It had put me in the best possible shape for this exact situation.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I began to wonder whether any of this had been fated.
      </motion.p>

      {/* ============================================================
          WHO WAS I NOW?
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
          Who Was I Now?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was mostly upbeat, but I had my moments.
      </motion.p>

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
        Some people call it the &ldquo;Dark Night of the Soul.&rdquo; Looking back, I suppose that is what it was.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        That night, I realized something I had never considered before. We spend so much of our lives believing we are what we do. But when everything I did was stripped away, I was forced to discover who I was without any of it.
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
          The answer did not come that night.
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
          WHERE DOES HOPE COME FROM?
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
          Where Does Hope Come From?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        About a month after I arrived, something unexpected happened.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The nurses asked if I would visit other patients and encourage them to do their therapy.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I remember thinking how ironic that was. I could not walk. I could not even move my legs. Yet somehow, they saw me as a motivator &mdash; possibly because I was self-motivated and nearly always smiling.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There was a lesson I had learned from my father that I still carry today: regardless of what kind of day I am having, when someone asks how I am, my answer is always, &ldquo;Fantastic!&rdquo;
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
          I had not.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Curiosity has always been one of my greatest teachers. As I watched some patients fight for every inch of progress while others quietly gave up, I could not help wondering what made the difference.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        So I began a little survey. I asked patients whether they would describe their parents as positive or negative, which parent they most identified with, and whether they saw themselves as positive or negative.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was not conducting scientific research. I was simply trying to understand why some people kept trying while others did not.
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
          Where did hope come from?
        </p>
      </motion.div>

      {/* ============================================================
          REMEMBERING WHY
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
          Remembering Why
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Before I left the hospital, I asked if I could speak to the CEO.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I wanted to thank the staff &mdash; not just the doctors and nurses, but everyone who had played a part in my recovery. I wanted them to know how much their attitudes had mattered. Their encouragement had carried me through some of the darkest days of my life.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The hospital arranged a formal gathering, and I had the opportunity to speak.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Afterwards, many staff members came up to me with tears in their eyes. They told me that hearing my perspective had reminded them why they had chosen healthcare in the first place. Too often, all they heard were complaints. Very few patients ever stopped to say thank you.
      </motion.p>

      {/* ============================================================
          TRYING IS LYING
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
          Trying Is Lying
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There was one more lesson rehabilitation gave me.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One day during physiotherapy, my therapist asked me to move my left leg.
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
          &ldquo;I am trying,&rdquo; I insisted.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          &ldquo;No,&rdquo; he replied. &ldquo;You are not.&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        At first, I was frustrated. Of course I was trying.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then I realized something profound. In my conscious mind, I believed I was trying. But my subconscious already knew it was going to hurt, so it had quietly decided not to move.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          The moment I understood that, my leg moved.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Years later, as a coach, I would recognize a truth in that moment: &ldquo;Trying is lying.&rdquo; How often do we tell ourselves we are trying when what we are really doing is protecting ourselves from pain?
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
        Looking back, I think that is where the coach inside me truly began to emerge.
      </motion.p>

      {/* ============================================================
          GOING HOME WAS NOT THE END
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
          Going Home Was Not the End
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I came home just days before Christmas, but leaving the hospital did not mean the ordeal was over. Someone left the gate open, and my two dogs escaped. Sammy came home. Roxy never did.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then, only a few weeks after I returned home, the rod in my right femur broke. An operating room would not become available for almost a year. I had survived the crash and made it through six months of hospitals, only to face another long and painful chapter of recovery.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        But I was home. I was alive. And for the first time, I could begin deciding what the rest of my life might become.
      </motion.p>

      {/* ─ Frankie&rsquo;ism — recurring section divider ─ */}
      <div className="pt-2 md:pt-4">
        <Frankieism
          label="Frankie&rsquo;ism"
          text="Sometimes losing everything you thought defined you is how you discover who you really are."
          accentColor="#DF3CB5"
          textColor="#A81D86"
        />
      </div>
    </motion.div>
  )
}
