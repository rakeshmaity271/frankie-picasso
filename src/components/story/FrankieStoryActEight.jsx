import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Frankieism from '../common/Frankieism'

/**
 * FrankieStoryActEight — "Still Becoming"
 * Act VIII spans G-Woman Media launch, Grow a Pair coaching, acting,
 * social impact through Rural to Action, and the evolving meaning of unstoppable.
 *
 * Text is verbatim from the client's Act 8 document.
 *
 * Typography hierarchy (mirrors FrankieStoryActSeven.jsx):
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActEight() {
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
        If the first seven acts of my life have taught me anything, it is that I am terrible at standing still.
      </motion.p>

      {/* ============================================================
          THE MANY VERSIONS
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Just when I think I have arrived somewhere, another idea appears. Another cause needs help. Another microphone turns on. Another door opens&mdash;or remains stubbornly closed until I decide to build my own.
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
          At this point in my life, I am no longer interested in becoming only one thing.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          I am a media entrepreneur, radio host, author, artist, social-impact advocate, board chair and, most recently, an actor.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Apparently, retirement has gone very badly.
      </motion.p>

      {/* ============================================================
          G-WOMAN MEDIA PUBLIC LAUNCH
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        When G-Woman Media officially began its public launch in March 2025, the vision that had lived in our heads for years started becoming real. We launched the G-Woman Magazine, followed by our global 24/7 radio station, the G-Woman Collective and G-Woman TV.
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
          What we were building was not simply another media company.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          We were creating an ecosystem where women could tell their own stories, share their expertise, build relationships, learn from one another and be recognized as the authorities, innovators and leaders they already were.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Our vision continues to grow. We have recently conceived our most ambitious, outrageous and extraordinary idea yet. I can&rsquo;t reveal the details&mdash;not because I don&rsquo;t want to, but because some ideas need time to grow before they are introduced to the world.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        What I can say is that G-Woman Media is not merely women-led; it is women-owned. Our IV League Partners believe women deserve more than visibility. We deserve a seat at the table, a voice in the decisions and a stake in the platforms carrying our stories.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We are still wondering where we will find the womanpower to pull off everything we are planning. But I have no doubt that we will pull it off&mdash;and do it spectacularly.
      </motion.p>

      {/* ============================================================
          EXPANDING THE COLLECTIVE
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Meanwhile, we have twenty-four hours a day, seven days a week, to fill across radio and television. We continue to develop original in-house programming while helping other women turn their own show ideas into reality.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        We are also expanding the G-Woman Collective and creating opportunities for women across countries, cultures, professions and generations&mdash;not only to meet, but to collaborate, expand their horizons and create new opportunities together.
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
          In March 2027, women from around the world will come together in person at the G-Woman Summit and Awards Gala at Turf Valley in Maryland.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          For years, many of us have known one another only through little squares on a screen. At the Summit, we will finally be able to sit together, laugh together, learn together and hug one another&mdash;assuming my knees and everyone else&rsquo;s luggage cooperate.
        </p>
      </motion.div>

      {/* ============================================================
          THE GOOD RADIO NETWORK
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Alongside G-Woman Media, I continue to operate The Good Radio Network, which I founded in 2014 with the promise of creating &ldquo;Radio That Does a World of Good.&rdquo;
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My shows, Mission Unstoppable and FrankieSense &amp; More, have allowed me to interview extraordinary people from around the world. Some were famous. Some were not. That distinction has never mattered much to me. I am interested in people who have survived something, created something, changed something or made life better for someone else.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I have always believed that everyone has a story, and very often the person who believes their life is ordinary has the most extraordinary story of all.
      </motion.p>

      {/* ============================================================
          NEW SHOWS
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        New shows are still taking shape. One is Monday Makeover, a program about current affairs, courage, mindset and doing one thing differently on purpose.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Another is the television concept Frankly Scarlett&mdash;I Don&rsquo;t Give a Damn, built around the boldness that emerges when women stop waiting for permission to become themselves.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        That idea has also grown into Grow a Pair&trade;, a seven-day coaching experience designed to move women from wishing to doing. It is based on the coaching principle of giving a client a Bold Request&mdash;something like a double dare with a purpose.
      </motion.p>

      {/* ============================================================
          THE BALLS FRAMEWORK — Level 1 Emotional Peak
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.25rem, 2.5vh, 2rem)',
        }}
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
          At its heart is the BALLS framework:
        </p>
        <p className="font-serif italic" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', marginBottom: 'clamp(0.5rem, 1vh, 1rem)', opacity: 0.75 }}>
          Be willing to look foolish.
        </p>
        <p className="font-serif italic" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', marginBottom: 'clamp(0.5rem, 1vh, 1rem)', opacity: 0.75 }}>
          Ask anyway.
        </p>
        <p className="font-serif italic" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', marginBottom: 'clamp(0.5rem, 1vh, 1rem)', opacity: 0.75 }}>
          Leap before you&rsquo;re ready.
        </p>
        <p className="font-serif italic" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', marginBottom: 'clamp(0.5rem, 1vh, 1rem)', opacity: 0.75 }}>
          Learn from the mess.
        </p>
        <p className="font-serif italic" style={{ fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 2rem)', opacity: 0.75 }}>
          Show up again.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        The second part of the program will help women &ldquo;grow&rdquo; a complete set. Then they will be invited to join the Ballroom.
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
          I know. It&rsquo;s great, right?
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        It may not be the most delicate philosophy in the world, but neither am I.
      </motion.p>

      {/* ============================================================
          "I DO STUFF LIKE THIS" — Level 1 Emotional Peak
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
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
          The mantra I want every woman in the program to adopt is:
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
          &ldquo;I do stuff like this.&rdquo;
        </p>
      </motion.div>

      {/* ============================================================
          OVER BEHAVING APPROPRIATELY
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        At this stage of life, I am less interested in behaving appropriately and more interested in living fully. Women are taught to be agreeable, accommodating and careful. We are told not to take up too much space, ask for too much or make anyone uncomfortable.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I think I am finally over that.
      </motion.p>

      {/* ============================================================
          ACTING — The Biggest Surprise
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Perhaps the biggest surprise of this latest act has been acting itself.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        In my late sixties, I walked into a community theatre class and discovered yet another version of myself waiting there. Acting frightened me in a completely different way from live radio. On radio, I could be Frankie. Onstage, I had to step into someone else&rsquo;s shoes, understand what she wanted and allow her to behave in ways I might never behave myself.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I began auditioning for plays, learning monologues, exploring characters and discovering how much work goes into making something look effortless.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I was cast in an outdoor production of A Christmas Carol with Penny &amp; Pound Theatre and landed a paid role in a dinner-theatre production. I continued auditioning, developing characters and practising for increasingly ambitious roles.
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
          Apparently, I enjoy frightening myself recreationally.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        So now I am learning lines, finding my light and trying to remember where I am supposed to stand.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Not bad for a retired woman.
      </motion.p>

      {/* ============================================================
          WE ARE NOT FINISHED BECOMING
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Acting has reminded me of something I have always believed: we are not finished becoming simply because we have reached a particular age. There are parts of ourselves we haven&rsquo;t met yet. Sometimes they are waiting inside a classroom, behind a microphone, on a stage or on the other side of a decision that scares us.
      </motion.p>

      {/* ============================================================
          SOCIAL IMPACT — Rural to Action
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My work in social impact continues as well. Through Girl Power USA, I met Joseph Were and became involved with Rural to Action, a Kenyan NGO grounded in community-led change. I later joined its board and now serve as Chair.
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
          The title matters far less to me than the work.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          Whether we are helping girls remain in school, addressing period poverty, supporting education or providing communities with the resources to build their own solutions, I am reminded that meaningful change does not come from arriving as a rescuer. It comes from listening, collaborating and supporting people who already understand what their communities need.
        </p>
      </motion.div>

      {/* ============================================================
          OTHER IDEAS CIRCLING
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There are still other ideas circling.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I remain hopeful about World Supply Tent and its potential to get vital supplies where they are needed most. I continue thinking about an emergency transportation service for injured animals&mdash;something that could help families when a pet needs urgent care but cannot be transported safely.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Some ideas will become businesses. Some will become social-impact projects. Others may remain scribbled on pieces of paper beside my bed. But I never want to stop imagining what might be possible.
      </motion.p>

      {/* ============================================================
          STILL PAINTING, WRITING, MAKING RADIO
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I still paint. I still write. I still make radio. I still find causes I cannot walk away from and people whose stories I believe deserve to be heard.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I also remain a wife, mother, stepmother and Glamma to thirteen grandchildren. My family is the thread running through every version of me. They are part of why I keep building, creating and trying&mdash;although, as previously mentioned, their birthdays are also why I can never afford to remain retired.
      </motion.p>

      {/* ============================================================
          BODY AND PAIN
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My body has occasionally tried to negotiate different terms. I live with chronic pain and the lasting effects of the motorcycle accident that nearly ended my life. Now my knees are demanding attention because, apparently, they did not receive enough drama the first time around.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I have learned to adapt.
      </motion.p>

      {/* ============================================================
          UNSTOPPABLE — Level 1 Emotional Peak
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
          Being unstoppable does not mean being unbreakable.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1rem, 2vh, 1.5rem)', lineHeight: 1.6 }}>
          I have been broken&mdash;physically, emotionally and sometimes financially&mdash;more than once.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1rem, 2vh, 1.5rem)', lineHeight: 1.6 }}>
          Unstoppable does not mean that nothing hurts, nothing frightens you or nothing knocks you down. It means that what happens to you does not get the final word.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        You rest. You grieve. You change direction. You ask for help. You find another route.
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
          And then you show up again.
        </p>
      </motion.div>

      {/* ============================================================
          NEW MEANING OF UNSTOPPABLE — Level 1 Emotional Peak
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1rem, 2vh, 1.5rem)', lineHeight: 1.6 }}>
          When a coach first called me &ldquo;unstoppable&rdquo; years ago, I thought it meant I could push through anything. Today, it means something different.
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
          It means remaining willing to begin again.
        </p>
      </motion.div>

      {/* ============================================================
          NEVER FOLLOWED A STRAIGHT LINE — Closing
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My life has never followed a straight line. It has been a collection of ideas, reinventions, catastrophes, causes, businesses, microphones, books, paintings, people and possibilities. Some ventures succeeded. Some failed spectacularly. Some changed other people&rsquo;s lives, and some changed mine.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I don&rsquo;t know exactly what comes next.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        There are shows waiting to be developed, characters waiting to be played, stories waiting to be told and communities waiting to be built. There are women whose voices have not yet been heard and ideas I have not yet dreamed.
      </motion.p>

      {/* ============================================================
          CLOSING — Level 1 Emotional Peak
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 2rem)',
            marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          Act 8 is not the end of my story.
        </p>
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 0,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          It is simply the point where the story has caught up with me.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2.5rem, 5vh, 4rem)', lineHeight: 1.6, opacity: 0.85 }}>
        For now.
      </motion.p>

      {/* ============================================================
          FRANKIE'ISM
          ============================================================ */}
      <Frankieism text="I do stuff like this." accent="#3B5998" />
    </motion.div>
  )
}
