import { useState, useEffect } from 'react'
import { journeyActs } from '../../data/journey'

export default function JourneyActBar() {
  const [activeAct, setActiveAct] = useState('where-belief-began')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (let i = journeyActs.length - 1; i >= 0; i--) {
        const el = document.getElementById(journeyActs[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveAct(journeyActs[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAct = (actId) => {
    const el = document.getElementById(actId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      aria-label="Acts jump navigation"
      className="sticky top-[64px] md:top-[76px] z-30 bg-[#FFF8F0]/95 backdrop-blur-md border-y border-[#E8DCC8] shadow-xs py-2 px-4 md:px-8 transition-all"
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
        <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-[#8B5FB0] flex-shrink-0 mr-1 sm:mr-2 flex items-center gap-1">
          <span>Acts I–VIII:</span>
        </span>
        {journeyActs.map((act) => {
          const isActive = activeAct === act.id
          const isStillBecoming = act.id === 'still-becoming'

          return (
            <button
              key={act.id}
              onClick={() => scrollToAct(act.id)}
              className={`
                flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer
                ${isActive
                  ? 'bg-[#2C2C2C] text-white shadow-xs scale-102 font-medium'
                  : isStillBecoming
                    ? 'bg-[#3B5998]/12 text-[#3B5998] border border-[#3B5998]/35 hover:bg-[#3B5998] hover:text-white'
                    : 'bg-white/80 text-[#2C2C2C] border border-[#E8DCC8] hover:bg-[#FAF3EA] hover:border-[#8B5FB0]'
                }
              `}
              title={`Jump to Act ${act.number}: ${act.title}`}
            >
              <span className="font-semibold">Act {act.number}</span>
              <span className="hidden lg:inline text-[11px] opacity-85">• {act.title}</span>
              {isStillBecoming && (
                <span className="text-[10px] font-bold text-[#3B5998] bg-[#3B5998]/10 px-1.5 py-0.2 rounded-full lg:hidden">
                  Latest
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
