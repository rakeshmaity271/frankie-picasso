import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, animation = 'fade-up', className = '', as: Component = 'div' }) {
  const ref = useRef(null)
  useScrollReveal(ref, { animation })

  const Tag = Component
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
