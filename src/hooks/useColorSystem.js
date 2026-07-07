import { createContext, useContext, useRef, useMemo } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

const ColorContext = createContext(null)

/**
 * Color palette for each section — colors evolve continuously.
 * Each entry has: bg (background), text, accent, accentSecondary
 */
export const sectionPalettes = {
  hero: {
    bg: '#FFF8F0',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.6)',
    accent: '#FFB400',
    accentSecondary: '#FF7C15',
  },
  who: {
    bg: '#FFF3E8',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.6)',
    accent: '#FF7C15',
    accentSecondary: '#FFB400',
  },
  'where-belief-began': {
    bg: '#D8C8EE',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#8B5FB0',
    accentSecondary: '#FF7C15',
  },
  building: {
    bg: '#FFF0CC',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#EE5802',
    accentSecondary: '#FFB400',
  },
  amplifying: {
    bg: '#E0F4F4',
    text: '#1a2e2e',
    textMuted: 'rgba(26,46,46,0.55)',
    accent: '#01B2D4',
    accentSecondary: '#629E46',
  },
  creating: {
    bg: '#FDE8EF',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#DF3CB5',
    accentSecondary: '#ED4672',
  },
  giving: {
    bg: '#E8F0E0',
    text: '#1a2e1a',
    textMuted: 'rgba(26,46,26,0.55)',
    accent: '#629E46',
    accentSecondary: '#FFB400',
  },
  'still-becoming': {
    bg: '#FFF8F0',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.6)',
    accent: '#FFB400',
    accentSecondary: '#FF7C15',
  },
  impact: {
    bg: '#F5EFE6',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#FFB400',
    accentSecondary: '#EE5802',
  },
  media: {
    bg: '#E0F4F4',
    text: '#1a2e2e',
    textMuted: 'rgba(26,46,46,0.55)',
    accent: '#01B2D4',
    accentSecondary: '#FFB400',
  },
  books: {
    bg: '#FFF0CC',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#EE5802',
    accentSecondary: '#FF7C15',
  },
  art: {
    bg: '#FDE8EF',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#DF3CB5',
    accentSecondary: '#ED4672',
  },
  timeline: {
    bg: '#F5EFE6',
    text: '#2C2C2C',
    textMuted: 'rgba(44,44,44,0.55)',
    accent: '#FFB400',
    accentSecondary: '#629E46',
  },
  closing: {
    bg: '#1a1a2e',
    text: '#FFF8F0',
    textMuted: 'rgba(255,248,240,0.6)',
    accent: '#FFB400',
    accentSecondary: '#FF7C15',
  },
  contact: {
    bg: '#1a1a2e',
    text: '#FFF8F0',
    textMuted: 'rgba(255,248,240,0.6)',
    accent: '#FFB400',
    accentSecondary: '#FF7C15',
  },
}

/**
 * Helper: interpolate between two hex colors
 */
function lerpColor(a, b, t) {
  const ah = parseInt(a.replace('#', ''), 16)
  const bh = parseInt(b.replace('#', ''), 16)
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff
  const br = (bh >> 16) & 0xff, bg_ = (bh >> 8) & 0xff, bb = bh & 0xff
  const rr = Math.round(ar + (br - ar) * t)
  const rg = Math.round(ag + (bg_ - ag) * t)
  const rb = Math.round(ab + (bb - ab) * t)
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, '0')}`
}

export function ColorProvider({ children }) {
  const containerRef = useRef(null)
  const [currentColors, setCurrentColors] = useState(sectionPalettes.hero)

  const { scrollYProgress } = useScroll()

  // Track scroll and update CSS custom properties on document
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // This is handled at the section level via data-section attributes
    // We just expose scroll progress for child components
  })

  return (
    <ColorContext.Provider value={{ currentColors, scrollYProgress, sectionPalettes }}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </ColorContext.Provider>
  )
}

export function useColors() {
  const context = useContext(ColorContext)
  if (!context) return { currentColors: sectionPalettes.hero, scrollYProgress: null, sectionPalettes }
  return context
}

/**
 * Hook to get interpolated colors for a section based on scroll progress
 */
export function useSectionColors(sectionId) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const palette = sectionPalettes[sectionId] || sectionPalettes.hero

  // Update CSS custom properties when in view
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress > 0.1 && progress < 0.9 && ref.current) {
      const root = document.documentElement
      root.style.setProperty('--bg-primary', palette.bg)
      root.style.setProperty('--text-primary', palette.text)
      root.style.setProperty('--accent', palette.accent)
      root.style.setProperty('--accent-secondary', palette.accentSecondary)
    }
  })

  return { ref, palette }
}
