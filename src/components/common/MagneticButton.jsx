import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
  }

  const variantClasses = {
    primary:
      'bg-[var(--color-accent,#FFB400)] text-[var(--color-deep-navy,#1a1a2e)] hover:brightness-110',
    secondary:
      'border-2 border-current bg-transparent hover:bg-current/10',
    ghost:
      'bg-transparent hover:bg-black/5',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`
          inline-flex items-center justify-center gap-2
          font-sans font-medium tracking-wide
          rounded-full cursor-pointer
          transition-all duration-300
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
    </motion.span>
  )
}
