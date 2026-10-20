import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * TextReveal — animates text in by character, word, or line.
 *
 * Props:
 *   text     — the string to animate
 *   mode     — 'char' | 'word' | 'line'
 *   staggerDelay — delay between each unit (default 0.03)
 *   duration — animation duration per unit (default 0.5)
 *   className — wrapper class
 *   once     — only animate once (default true)
 *   as       — HTML tag for wrapper (default 'h2')
 *   style    — inline styles
 */
export default function TextReveal({
  text,
  mode = 'word',
  staggerDelay = 0.03,
  duration = 0.5,
  className = '',
  once = true,
  amount = 0.3,
  as: Tag = 'span',
  style = {},
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount, margin: '0px 0px -80px 0px' })

  // Split text into units
  let units = []
  if (mode === 'char') {
    units = text.split('')
  } else if (mode === 'word') {
    units = text.split(/(\s+)/) // preserve whitespace
  } else if (mode === 'line') {
    units = text.split('\n')
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: mode === 'line' ? 30 : mode === 'char' ? 10 : 20,
      filter: mode === 'char' ? 'blur(4px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: 'inline', ...style }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {units.map((unit, i) => {
        // Don't wrap whitespace in motion spans for word mode
        if (mode === 'word' && /^\s+$/.test(unit)) {
          return <span key={i}>{unit}</span>
        }
        return (
          <motion.span
            key={i}
            variants={child}
            style={{
              display: 'inline-block',
              whiteSpace: mode === 'line' ? 'normal' : 'pre',
            }}
          >
            {unit}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
