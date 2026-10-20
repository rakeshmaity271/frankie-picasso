import { useRef } from 'react'
import { useScroll, useTransform, useInView as useFramerInView } from 'framer-motion'

/**
 * useScrollFade — fade element in/out based on scroll position
 */
export function useScrollFade(offset = 0.2) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(
    scrollYProgress,
    [0, offset, 1 - offset, 1],
    [0, 1, 1, 0]
  )
  return { ref, opacity, scrollYProgress }
}

/**
 * useScrollSlideUp — slide element up as it enters viewport
 */
export function useScrollSlideUp(distance = 60) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 0.4], [distance, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  return { ref, y, opacity, scrollYProgress }
}

/**
 * useScrollSlideLeft — slide element from left
 */
export function useScrollSlideLeft(distance = 80) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 0.4], [-distance, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  return { ref, x, opacity, scrollYProgress }
}

/**
 * useScrollSlideRight — slide element from right
 */
export function useScrollSlideRight(distance = 80) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 0.4], [distance, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  return { ref, x, opacity, scrollYProgress }
}

/**
 * useParallax — parallax effect based on scroll
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed])
  return { ref, y, scrollYProgress }
}

/**
 * useScrollScale — scale element based on scroll
 */
export function useScrollScale(min = 0.85, max = 1) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.4], [min, max])
  return { ref, scale, scrollYProgress }
}

/**
 * useScrollBlur — blur to clear effect
 */
export function useScrollBlur(maxBlur = 10) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const filter = useTransform(
    scrollYProgress,
    [0, 0.3],
    [`blur(${maxBlur}px)`, 'blur(0px)']
  )
  return { ref, filter, scrollYProgress }
}

/**
 * useInView — simple in-view detection
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.2,
    margin: options.margin ?? '0px',
  })
  return { ref, isInView }
}
