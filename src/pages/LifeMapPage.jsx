import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MapSection from '../components/map/MapSection'
import LessonGrid from '../components/map/LessonGrid'
import TimelineSection from '../components/timeline/TimelineSection'
import { mapOfLife } from '../data/content'
import { journeyActs } from '../data/journey'

export default function LifeMapPage() {
  const lessons = mapOfLife?.lessons || []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Visual hierarchy heading for accessibility */}
      <h1 className="sr-only">Frankie Picasso — The Map of a Life &amp; Milestones</h1>

      {/* Top Breadcrumb Header */}
      <div className="bg-[#FAF3EA] border-b border-[#E8DCC8] px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-4">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#2C2C2C]/70 hover:text-[#EE5802] transition-colors"
          >
            <span>←</span>
            <span>Back to the Main Journey</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-sans text-[#4A4A4A]/60">
            <Link to="/" className="hover:text-[#EE5802] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#8B5FB0] font-semibold">Life Map &amp; Milestones</span>
          </div>
        </div>
      </div>

      {/* Hero Banner for The Map of a Life */}
      <section className="relative py-12 md:py-16 px-6 md:px-10 lg:px-16 border-b border-[#E8DCC8]/60 bg-gradient-to-b from-[#FAF3EA] to-[#FFF8F0]">
        <div className="max-w-[960px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#EE5802] mb-3"
          >
            The Map of a Life
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[clamp(2.4rem,5vw,4.2rem)] text-[#2C2C2C] leading-[1.1] mb-5"
          >
            Every Piece Fit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-lg md:text-xl text-[#4A4A4A] max-w-[720px] mx-auto leading-relaxed mb-8"
          >
            &ldquo;A life is not a straight line. It is a collection of lessons, choices, risks, and breakthroughs that only make complete sense when we step back and see the whole picture.&rdquo;
          </motion.p>

          {/* Quick Jump Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="#timeline"
              className="px-5 py-2.5 rounded-full bg-[#8B5FB0] text-white text-xs font-sans font-semibold tracking-wide hover:bg-[#724B94] transition-colors shadow-sm"
            >
              Explore Milestones Timeline ↓
            </a>
            <a
              href="#lessons"
              className="px-5 py-2.5 rounded-full bg-white border border-[#E8DCC8] text-[#2C2C2C] text-xs font-sans font-semibold tracking-wide hover:border-[#EE5802] hover:text-[#EE5802] transition-colors shadow-sm"
            >
              The Nine Life Lessons ↓
            </a>
            <a
              href="#illustrated-map"
              className="px-5 py-2.5 rounded-full bg-[#FFB400]/20 border border-[#FFB400]/40 text-[#9E6500] text-xs font-sans font-semibold tracking-wide hover:bg-[#FFB400]/30 transition-colors"
            >
              The Eight Acts Cartography ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Illustrated Life Map Showcase Canvas */}
      <MapSection id="illustrated-map" showDedicatedPageLink={false} />

      {/* The Nine Life Lessons Grid */}
      <LessonGrid lessons={lessons} />

      {/* The Winding Milestones Timeline — A Life in Chapters */}
      <TimelineSection />

      {/* The Eight Acts Quick Access Bar */}
      <section className="py-12 md:py-16 px-6 md:px-10 lg:px-16 bg-[#FAF3EA] border-t border-[#E8DCC8]">
        <div className="max-w-[1080px] mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#EE5802] font-semibold mb-2">
            The Complete Story
          </p>
          <h3 className="font-serif font-light text-2xl md:text-3xl text-[#2C2C2C] mb-8">
            Explore All Eight Acts
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[880px] mx-auto mb-10">
            {journeyActs.map((act) => (
              <Link
                key={act.id}
                to={`/act/${act.id}`}
                className="p-3.5 rounded-xl bg-white border border-[#E8DCC8] hover:border-[#8B5FB0] hover:shadow-md transition-all text-left group"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8B5FB0] mb-1">
                  Act {act.number}
                </span>
                <span className="block text-xs font-medium text-[#2C2C2C] group-hover:text-[#EE5802] transition-colors line-clamp-1">
                  {act.title}
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2C2C] text-white text-xs font-sans font-semibold tracking-wide hover:bg-[#EE5802] transition-colors shadow-sm"
          >
            <span>Return to Homepage</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
