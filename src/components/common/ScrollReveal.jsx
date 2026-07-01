import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className = '',
  staggerChildren = 0,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount, margin: '0px 0px -50px 0px' })
  const selected = variants[variant] || variants.fadeUp

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selected}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: staggerChildren,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
