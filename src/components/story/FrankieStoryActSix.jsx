import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActSix — "Coming Home and Finding My Voice"
 * Act VI spans the return from hospital, the lipstick ritual, pain management,
 * the psychologist confrontation, ICA coaching, Jack & Liz, teaching,
 * the "Unstoppable" name, radio career, The Good Radio Network, art,
 * philanthropy, and ongoing recovery.
 *
 * Text is verbatim from the client's "Frankie_Picasso_Act_6.docx" extraction.
 *
 * Typography hierarchy (mirrors FrankieStoryActFive.jsx):
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActSix() {
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
        Coming home from the hospital did not mean my recovery was over.
      </motion.p>

      {/* ============================================================
          THE REVOLVING DOOR — Doctors, Lawyers, Pain
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My life became a revolving door of lawyers&rsquo; requests, doctors&rsquo; appointments, insurance claims, schooling and pain. I was home with my family, but there was still an enormous amount of healing ahead.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was taking powerful narcotic painkillers, yet the relief never seemed to match the doses. I remember being told I was taking enough to fell a horse. Apparently, nobody had explained that to my pain. I had always had a high pain tolerance, and I became very good at compartmentalizing what I was feeling so I could get through my days and nights.
      </motion.p>

      {/* ============================================================
          THE LIPSTICK RITUAL
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
          One thing I refused to give up was looking like myself.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I know that, in those circumstances, appearance would be the last thing on many people&rsquo;s minds. For me, it mattered. My motto had always been that your face doesn&rsquo;t need to announce how your day is going. Even in the hospital, hooked up to a morphine pump, I combed my hair and put on lipstick every day.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Years earlier, I had passed that philosophy on to my best friend. Recently, after taking a terrible fall, she told me she could still hear my voice telling her to fix her hair and put some lipstick on. Forty years later, apparently I was still giving instructions.
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
          There was a reason for that little ritual, and one psychologist was about to hear it.
        </p>
      </motion.div>

      {/* ============================================================
          THE PAIN SPECIALISTS
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The lawyers sent me to specialist after specialist. Some assessed me for my own case; others worked for the opposing insurance company. I often felt that those appointments were about finding reasons to minimize what had happened to me.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        But one of the first doctors I saw surprised me. After putting me through a series of tests, he slipped me a name and a telephone number and told me to call.
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
          &ldquo;Why?&rdquo; I asked.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          &ldquo;Because I don&rsquo;t know how you are getting through your days in so much pain.&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        He could see it, despite my efforts to carry on. Although he had been hired by the other side, he referred me to a pain specialist who helped me understand why managing my pain mattered to my recovery. I needed relief. My body needed a chance to rest instead of fighting pain around the clock.
      </motion.p>

      {/* ============================================================
          THE PSYCHOLOGIST — Level 1 Emotional Peak
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
          Then came the psychologist.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          He took one look at me and decided there was no way I could be in as much pain as I said. He accused me of lying.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was flabbergasted. &ldquo;How did you come to that conclusion?&rdquo;
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
          Because I was wearing makeup.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I asked him whether he had got his degree out of a Cracker Jack box.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then I explained the psychology of makeup to the psychologist.
      </motion.p>

      {/* ============================================================
          THE PSYCHOLOGY OF MAKEUP — Level 1 Emotional Peak
          ============================================================ */}
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
          If I looked in the mirror and saw every bit of the pain and despair I was feeling reflected back at me, I told him, I wouldn&rsquo;t be sitting in front of him. I would be six feet under.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I meant it. At that point in my life, those ordinary routines helped me hold on when I was in a very dark place.
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
          Getting dressed, doing my hair and putting on my makeup meant I was still here.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Still fighting for my life. Still in the game.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I needed to recognize the woman in the mirror. She had a life to get back to.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        By the end of our appointment, I believe he understood. I think he got some pretty good coaching that day.
      </motion.p>

      {/* ============================================================
          ICA & COACHING — The New Path
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Before leaving the hospital, I had enrolled at the International Coach Academy in Australia and started my courses. Once I was home, the lessons gave my days a purpose I was profoundly grateful for.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had always been an excellent student. The medication slowed me down a little, but it did nothing to dampen my appetite for learning. I worked through the course material, completed the written and practical exams, and graduated with honours.
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
          Naturally, one certification was never going to be enough.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          I signed up for every coaching certification I could take: personal, business, executive, spiritual and everything else available to me. Eventually, I completed my training as a Master Coach Trainer.
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
          If I was going to do this, I was going to do all of it.
        </p>
      </motion.div>

      {/* ============================================================
          JACK & LIZ — The Support System
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        For much of the following year, my world was centred in my upstairs bedroom. It served as my office as well as my bedroom, with an ensuite nearby. My leg was still broken, and there were far too many stairs to make going up and down a casual undertaking. I spent most of my days up there, studying and beginning to build a new working life.
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
          Thankfully, I had help.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Before I left rehabilitation, arrangements had been made for a driver and a housekeeper. Jack, my driver, became my best friend, my strength and my protector. He took me to appointments with doctors and lawyers, and he understood that sometimes I needed something other than another waiting room. He would often take me out to lunch just to brighten my day.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Liz, my housekeeper, was another godsend. She shopped, cooked and cleaned for me and my children. Those practical acts of kindness made an enormous difference to our lives. I will always be grateful to both of them.
      </motion.p>

      {/* ============================================================
          TEACHING AT ICA
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        After graduating, I set up my coaching practice and created my first website. I was so proud of it. Clients began to find me, and I discovered how much I loved the work. Coaching seemed to love me right back.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then ICA offered me a teaching position, and I accepted.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Suddenly, I was meeting fascinating people from all over the world. I remember wondering what would lead a brain surgeon to become a coach. People from so many professions were choosing this new direction, and I was endlessly curious about their reasons.
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
          What I loved about coaching was the power of a well-timed question.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          The belief behind our work was that coaches bring good questions and clients bring their own answers. We helped people discover those answers, examine what was holding them back and decide what to do next.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Sometimes, a shift in perspective happened so quickly you could almost see the moment a possibility opened up. I loved being part of that.
      </motion.p>

      {/* ============================================================
          THE UNSTOPPABLE NAME — Level 1 Emotional Peak
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One day, I was telling a fellow instructor about my accident and the pain I was still living with. She stopped me.
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
          &ldquo;Oh my God. You are unstoppable.&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        And there it was: The Unstoppable Frankie Picasso.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The name became a mantra that helped carry me through the next twenty years. More recently, I let it go. It had served me well, but I no longer needed it in quite the same way.
      </motion.p>

      {/* ============================================================
          RADIO — Finding Her Voice
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        One New Year, I made my list of things I wanted to do. Right at the top was this: I would be on the radio.
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
          Two weeks later, one of my students asked whether I wanted to be on the radio.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          Heck, yes!
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We created Coach of the Airwaves and began signing up coaches to host shows on our station. There was plenty of enthusiasm. The technology, however, was another story. It was such a complicated, convoluted system that my partner, Robert, had to get into the back end of every host&rsquo;s computer to connect them.
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
          Out of twenty-five coaches, I was the only one who actually made it on air.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then I heard about BlogTalkRadio. You could essentially pick up the telephone and broadcast. It also had an online studio where you could take callers and manage your show. To me, it was wonderful.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I negotiated a deal to bring our twenty-five hosts across. Once again, the others didn&rsquo;t get started. I did.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I believe that was 2007, and I have been on the air ever since.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Mission Unstoppable became my flagship show. Over time, I also created The Babe and the Bachelor, a dating show; Psycho Babble, with a psychiatrist as my co-host; Marketing Magic; Midlife Mojo; Frankie &amp; Johnny, a music show; and several others. Radio gave my curiosity somewhere to go, and it gave me the chance to meet people whose lives and ideas I wanted to share.
      </motion.p>

      {/* ============================================================
          THE GOOD RADIO NETWORK — A Mission
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
          In 2014, I founded The Good Radio Network.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          I continued Mission Unstoppable and created FrankieSense &amp; More. The idea behind the network was simple: radio could do a world of good.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had spent a month meditating and asking what was next for me. Then I had what I can only describe as a download from Spirit: go and find ONE person who was changing the world.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        That person could be anywhere. The change could be big or small. My job was to find them and help tell their story.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        When I later encountered the United Nations Global Goals, I was captivated. Here were causes I cared about, brought together in a vision of a better world. I wanted to help wherever I could.
      </motion.p>

      {/* ============================================================
          ART & GIVING BACK
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Around this period, I also began painting. Through my radio work and my art, I supported cleft palate surgery for children and fistula surgery for women. I sponsored four children through World Vision, supported donkeys at the Donkey Sanctuary and contributed to guide dog training for people who are blind.
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
          Creativity gave me another way to contribute, even while my own recovery continued.
        </p>
      </motion.div>

      {/* ============================================================
          ONGOING RECOVERY
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        And it did continue. Throughout all of this, I was still seeing doctors and undergoing surgery. My legal case eventually settled, and my injuries were formally designated catastrophic. That word described the extent of the damage to my body. Alongside it, I was building a life filled with students, clients, listeners and new interests.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My curiosity also took me further into spiritual study. I had long loved reading cards and had collected at least twenty different divination decks. I began studying with a woman I regarded as my spiritual master, an accomplished reader and psychic.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I also became interested in hypnosis, especially past-life regression, and enrolled at the Ontario Hypnosis Centre.
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
          And yes, I took everything they offered. You may be noticing a pattern.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My studies included medical and dental hypnosis, and I went on to earn my teaching qualification through the National Guild of Hypnotists.
      </motion.p>

      {/* ============================================================
          CLOSING — The Lipstick Refrain
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
          When I think back to that upstairs bedroom, I remember how much of my life happened there while I was still trying to heal.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          I studied, built a practice and began teaching. Eventually, I found my way onto the airwaves. I was still in pain, but I had people to meet, questions to ask and work I wanted to do.
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
          And every morning, I put on my lipstick.
        </p>
      </motion.div>

      {/* ─ Frankie'ism — recurring visual signature ─ */}
      <div className="pt-2 md:pt-4">
        <Frankieism
          label="Frankie'ism"
          text="Getting dressed, doing my hair and putting on my makeup meant I was still here. Still fighting for my life. Still in the game."
          accentColor="#C4922A"
          textColor="#8B6914"
        />
      </div>
    </motion.div>
  )
}