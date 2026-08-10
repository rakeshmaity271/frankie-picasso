import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

/**
 * FrankieStoryActThree — "The Builder"
 * Act III spans boxing, multiple businesses, kickboxing promotion, and the pivotal choice
 * to prioritize her children over ambition.
 *
 * Typography hierarchy:
 * - L1: clamp(1.15rem, 2.8vw, 2rem) — major emotional peaks
 * - L2: clamp(1.05rem, 2.3vw, 1.5rem) — standard emphasis
 * - L3: clamp(1rem, 2vw, 1.5rem) — supporting groups
 * - Body: clamp(1.1rem, 1.5vw, 1.4rem) — narrative paragraphs
 */

const EASE = [0.22, 1, 0.36, 1]

export default function FrankieStoryActThree() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-[760px] mx-auto px-6 md:px-0 py-0.5 md:py-2 text-[#2C2C2C]"
      variants={isInView ? {} : {}}
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
        I didn&rsquo;t set out to build businesses. I set out to build opportunities.
      </motion.p>

      {/* ============================================================
          THE BOXING BOYFRIEND — Scene Setting
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My introduction to boxing came through a boyfriend who worked as a cut man. He was Black Irish, with dark hair and dark eyes, originally from Sligo, who had come to Canada by way of England. By day he worked as a sandblaster. By night he trained fighters and worked professional boxing events.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        A mutual friend—a pianist who played in the hotel lounge where I bartended—introduced us. It was one of those instant connections that changes the direction of your life.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Through him I was introduced to an entirely different world. The boxing gym was unlike anything I had ever experienced. It was filled with colourful characters who seemed as though they&rsquo;d stepped straight out of a movie. Mafia types played cards in one corner while Teddy, part trainer, part janitor and full-time storyteller, entertained anyone who would listen.
      </motion.p>

      {/* ============================================================
          KEY RELATIONSHIPS — George & Don King
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Most importantly, I met Canadian heavyweight legend George Chuvalo. George and I became friends, and years later that friendship would prove invaluable in a way neither of us could have imagined.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Years later I would also meet Don King, who was surprisingly gracious. But long before that, I was learning lessons that had nothing to do with throwing punches. Boxing introduced me to negotiation, promotion, relationships and the business behind the spectacle.
      </motion.p>

      {/* ============================================================
          FIRST VENTURE — The Furlano–Pryor Fight (Age 22)
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
          At just twenty-two years old, I helped promote the Furlano–Pryor World Title fight.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          I negotiated ten complimentary suites at Toronto&rsquo;s Four Seasons Hotel for Nicky Furlano, Sylvester Stallone and their entourage, who were expected to attend the event. I even arranged for Aaron Pryor to train for two weeks in a regulation-sized boxing ring we built in the lobby of the Howard Johnson Hotel.
        </p>
        <p className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6, opacity: 0.85 }}>
          Looking back, I didn&rsquo;t realize it then, but I was learning how to solve problems, bring people together and make impossible ideas happen.
        </p>
      </motion.div>

      {/* ============================================================
          PARALLEL VENTURES — Private Investigator, Construction, Esthetics
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Around the same time I earned my private investigator&rsquo;s licence. Detective work sounded much more glamorous than it turned out to be, but it satisfied my curiosity and sharpened my observation skills.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I also started my first construction company, Connalin Development, specializing in insulation and sandblasting. Looking back now, I smile at how naturally entrepreneurship found me. If I saw an opportunity, I wanted to build it.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Life was moving quickly.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I married, had three children and opened an esthetics business. It was successful and gave me the flexibility I wanted while raising a young family. Yet no matter which salon I rented space in, I was often treated as though I were an employee rather than an independent business owner. Being asked to sweep floors or clean bathrooms wasn&rsquo;t really about the work—it reflected an attitude I encountered more than once in those years. It quietly reinforced my determination to create businesses where I answered to myself.
      </motion.p>

      {/* ============================================================
          CONDOM SENSE — Creative & Meaningful Business
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
          After my divorce and remarriage, another idea took shape.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          I launched Condom Sense, a customized condom company that combined marketing with public health education. Each condom was packaged in a matchbook-style folder that could be personalized with messages, university branding, advertising or promotional campaigns. What began as a university initiative expanded into partnerships with public health organizations, the AIDS Committee of Toronto, Pride celebrations, businesses and movie premieres.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          Our products appeared in university orientation packages and the business pages of both the Toronto Sun and the Toronto Star.
        </p>
        <p className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6, opacity: 0.85 }}>
          The business was fun, creative and socially meaningful. We even converted an old ice cream bicycle into the &ldquo;Dickie Delight Condom Cart&rdquo; for promotional events. But every package was assembled by hand because I refused to risk compromising a product designed to protect people&rsquo;s health. Eventually the workload became too great, and I knew it was time to let it go.
        </p>
      </motion.div>

      {/* ============================================================
          THE KICKBOXING PIVOT — Paul Biafore, Nine Months, Challenge Begins
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Then boxing found me again.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        My old Irish boyfriend called and asked whether I&rsquo;d like to join a new company called Traffic Marketing, which promoted monthly boxing cards in Toronto. Through that opportunity I met Paul Biafore—a gifted classical guitarist and an eleven-time World Welterweight Kickboxing Champion.
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
          Paul had one simple question.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
            opacity: 0.75,
          }}
        >
          &ldquo;Will you promote my world title fight?&rdquo;
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I had never attended a kickboxing event before, so I asked him to take me to one.
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
            fontStyle: 'italic',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)',
          }}
        >
          I loved it immediately.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          The energy was electric. The athletes brought a different spirit, and I saw possibilities everywhere.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        When my partners declined to become involved because they considered themselves boxing purists, I made a decision that would change everything.
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
          &ldquo;I&rsquo;ll do it.&rdquo;
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          I agreed to manage Paul and promote the event myself.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        What followed became one of the biggest challenges of my entrepreneurial life.
      </motion.p>

      {/* ============================================================
          THE NINE-MONTH CHALLENGE — Problem-Solving Montage
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
          We had just nine months to turn an idea into a world-class sporting event.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          The International Sport Karate Association in Europe agreed to sanction the title. Varsity Stadium became our venue, and we set our sights on filling between five and ten thousand seats. I negotiated a live broadcast agreement with ESPN and somehow convinced the legendary Michael Buffer—the unmistakable voice of championship boxing—to announce the event.
        </p>
      </motion.div>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        Every day seemed to present a new problem to solve.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I travelled to martial arts schools throughout Toronto and the surrounding area, inviting clubs to perform demonstrations during the intermission. Muay Thai, Brazilian Jiu-Jitsu, Taekwondo, Karate—every discipline brought something unique to the event. It wasn&rsquo;t just entertainment; it was also a way to unite the martial arts community and encourage each school to help fill the arena.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Slowly, what had started as one fighter&rsquo;s dream became something much bigger.
      </motion.p>

      {/* ============================================================
          THE THREAT — Confrontation, Tension
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
            color: '#722F37',
          }}
        >
          Then everything almost fell apart.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          As media coverage grew, particularly through my friend Spider Jones on Toronto&rsquo;s FAN Radio, we attracted attention from people who weren&rsquo;t happy about our success. One day I was confronted by men connected to Paul&rsquo;s former manager. Their message was unmistakable: walk away from the event, stop managing Paul, or there would be consequences.
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
          For the first time, this wasn&rsquo;t simply business.
        </p>
        <p
          className="font-serif italic"
          style={{
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            opacity: 0.75,
          }}
        >
          It was personal.
        </p>
      </motion.div>

      {/* ============================================================
          GEORGE'S HELP — Loyalty, Resolution
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        I called my friend George Chuvalo.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        George listened quietly as I explained what had happened. Then, in typical George fashion, he simply said, &ldquo;I&rsquo;ll take care of it.&rdquo;
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.75rem, 3vh, 2.5rem)', lineHeight: 1.6 }}>
        He did.
      </motion.p>

      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        I never heard from those men again.
      </motion.p>

      {/* ============================================================
          FIGHT NIGHT — Success
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
          Fight night finally arrived.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          Nine months of planning, negotiating, promoting and problem-solving had led to this one moment. The lights came up. The crowd filled the arena. Michael Buffer stepped into the ring. ESPN cameras rolled. Every fighter I had matched made their walk to the ring.
        </p>
        <p className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6, opacity: 0.85 }}>
          And Paul won his twelfth World Welterweight Kickboxing Championship.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 0, lineHeight: 1.6 }}>
          From every perspective, the event was a tremendous success.
        </p>
      </motion.div>

      {/* ============================================================
          THE SACRIFICE — Children's Plea (Level 1 Emotional Peak)
          ============================================================ */}
      <motion.div
        variants={fadeInUp}
        style={{
          marginBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingY: 'clamp(1.75rem, 3.5vh, 2.5rem)',
        }}
      >
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          At home, however, my children—nine-year-old twins and their older sibling—had experienced those same nine months very differently. They had watched their mother pour every spare moment into making someone else&rsquo;s dream come true.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          When it was over, they hugged me and asked me not to do it again.
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
          That was all I needed to hear.
        </p>
      </motion.div>

      {/* ============================================================
          THE CHOICE — Wisdom Moment
          ============================================================ */}
      <motion.p variants={fadeInUp} className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)', lineHeight: 1.6, opacity: 0.85 }}>
        Some victories come with sacrifices, and I understood that my children needed more of me than another championship event ever could.
      </motion.p>

      {/* ============================================================
          THE CLIFFHANGER — Solicitor General Call
          ============================================================ */}
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
            fontSize: 'clamp(1.05rem, 2.3vw, 1.5rem)',
            marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Two days later, my phone rang.
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)', lineHeight: 1.6 }}>
          It was the Office of the Solicitor General for the Government of Ontario.
        </p>
        <p className="font-sans italic" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', lineHeight: 1.6, opacity: 0.85 }}>
          I had no idea that another completely unexpected chapter of my life was about to begin.
        </p>
      </motion.div>
    </motion.div>
  )
}
