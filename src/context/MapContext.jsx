import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { mapOfLife } from '../data/content'

const STORAGE_KEY = 'frankie-map-progress'
const TOTAL_LESSONS = mapOfLife.lessons.length

const MapContext = createContext(null)

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return new Set(JSON.parse(raw))
  } catch { /* ignore corrupt data */ }
  return new Set()
}

export function MapProvider({ children }) {
  const [unlockedLessons, setUnlockedLessons] = useState(loadProgress)
  const [mapOpen, setMapOpen] = useState(false)
  const [revealTriggered, setRevealTriggered] = useState(false)

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...unlockedLessons]))
    } catch { /* storage full or unavailable */ }
  }, [unlockedLessons])

  const unlockLesson = useCallback((id) => {
    setUnlockedLessons((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const isComplete = unlockedLessons.size === TOTAL_LESSONS
  const count = unlockedLessons.size

  const openMap = useCallback(() => setMapOpen(true), [])
  const closeMap = useCallback(() => setMapOpen(false), [])

  const triggerReveal = useCallback(() => setRevealTriggered(true), [])
  const dismissReveal = useCallback(() => setRevealTriggered(false), [])

  return (
    <MapContext.Provider
      value={{
        unlockedLessons,
        unlockLesson,
        isComplete,
        count,
        total: TOTAL_LESSONS,
        mapOpen,
        openMap,
        closeMap,
        revealTriggered,
        triggerReveal,
        dismissReveal,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export function useMap() {
  const ctx = useContext(MapContext)
  if (!ctx) throw new Error('useMap must be used within MapProvider')
  return ctx
}
