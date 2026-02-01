import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useAudio } from '../hooks/useAudio'

const LoadingScreen = ({ isLoading, onComplete }) => {
  const { startBackgroundMusic } = useAudio()
  const [showEnterButton, setShowEnterButton] = useState(false)

  const handleEnter = () => {
    startBackgroundMusic()
    onComplete()
  }

  // Show enter button after 2 seconds
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowEnterButton(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!isLoading && !showEnterButton) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {!showEnterButton ? (
          <>
            {/* Tactical Loading Animation */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              {/* Outer ring */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#FF0000"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeDasharray="70 220"
                  opacity="0.8"
                />
              </svg>
              
              {/* Center crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <line x1="20" y1="0" x2="20" y2="12" stroke="#FF0000" strokeWidth="1" />
                  <line x1="20" y1="28" x2="20" y2="40" stroke="#FF0000" strokeWidth="1" />
                  <line x1="0" y1="20" x2="12" y2="20" stroke="#FF0000" strokeWidth="1" />
                  <line x1="28" y1="20" x2="40" y2="20" stroke="#FF0000" strokeWidth="1" />
                  <circle cx="20" cy="20" r="3" fill="#FF0000" />
                </svg>
              </div>
            </motion.div>

            {/* Preparing text with typewriter effect */}
            <motion.div
              className="text-neon-red text-xl font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>PREPARING</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            {/* System status */}
            <motion.div
              className="mt-4 text-gray-500 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              INITIALIZING SYSTEMS...
            </motion.div>
          </>
        ) : (
          /* Enter Button */
          <motion.button
            onClick={handleEnter}
            className="px-12 py-4 rounded-full bg-gradient-to-r from-neon-red to-neon-crimson hover:from-[#D4AF37] hover:to-[#B8960F] text-white hover:text-black font-bold text-xl font-mono tracking-wider shadow-2xl border-2 border-neon-red hover:border-[#D4AF37] transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            COMMENCE OPERATION?
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export default LoadingScreen
