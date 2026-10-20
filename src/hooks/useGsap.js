import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({
  ease: 'power2.out',
  duration: 1
})

export { gsap, ScrollTrigger, useGSAP }
