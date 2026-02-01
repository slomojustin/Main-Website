import { motion } from 'framer-motion'
import { useAudio } from '../hooks/useAudio'

const SoundButton = ({ 
  children, 
  onClick, 
  className = '', 
  whileHover,
  whileTap,
  href,
  ...props 
}) => {
  const { playSound } = useAudio()

  const handleMouseEnter = () => {
    playSound('hover')
  }

  const handleClick = (e) => {
    playSound('click')
    if (onClick) onClick(e)
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      whileHover={whileHover || { scale: 1.05 }}
      whileTap={whileTap || { scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SoundButton
