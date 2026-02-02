import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SoundButton from './SoundButton'

// Typewriter Hook
function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return displayText
}

// Terminal typing effect - picks a new random snippet each time the cycle restarts
function TerminalTypingText({ snippets }) {
  const [displayText, setDisplayText] = useState('')
  const [lines, setLines] = useState(() => {
    const s = snippets[Math.floor(Math.random() * snippets.length)]
    return s.split('\n')
  })
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= lines.length) {
      const timeout = setTimeout(() => {
        const nextSnippet = snippets[Math.floor(Math.random() * snippets.length)]
        setLines(nextSnippet.split('\n'))
        setCurrentLine(0)
        setCurrentChar(0)
        setDisplayText('')
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (currentChar <= lines[currentLine].length) {
      const timeout = setTimeout(() => {
        const previousLines = lines.slice(0, currentLine).join('\n')
        const currentLineText = lines[currentLine].slice(0, currentChar)
        setDisplayText(previousLines + (previousLines ? '\n' : '') + currentLineText)
        setCurrentChar(currentChar + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [currentChar, currentLine, lines, snippets])

  return (
    <pre className="font-mono text-sm sm:text-base lg:text-lg text-neon-red whitespace-pre-wrap break-all leading-relaxed text-left w-full">
      {displayText}
      <span className="animate-pulse">_</span>
    </pre>
  )
}

const Hero = ({ darkMode }) => {
  const tagline = "Building reliable hardware & secure systems — from digital circuits to encrypted networks"
  const typedText = useTypewriter(tagline, 30)

  const terminalSnippets = [
    `$ ssh berkeley.secure.net
> Authenticating...
> Access granted.
> Loading secure channel...
> Connection established.
> Welcome, JW.`,
    `$ go bears
> Loading school spirit...
> Oski detected.
> Go Bears.`,
    `$ fix_bug
> Searching Stack Overflow...
> Copying accepted solution...
> Bug "fixed". (Do not ask how.)`
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient neon-flicker">
                Justin Williams
              </span>
            </motion.h1>

            <motion.p
              className={`text-xl md:text-2xl lg:text-3xl mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              EECS Graduate @ UC Berkeley
            </motion.p>

            <motion.p
              className={`text-lg md:text-xl mb-8 font-mono ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <SoundButton
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-red to-neon-crimson hover:from-[#D4AF37] hover:to-[#B8960F] text-white hover:text-black font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </SoundButton>

              <SoundButton
                href="#contact"
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  darkMode
                    ? 'glass border-2 border-neon-red/50 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                    : 'bg-white border-2 border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </SoundButton>
            </motion.div>
          </motion.div>

          {/* Flat terminal / code block */}
          <motion.div
            className="h-[380px] sm:h-[460px] lg:h-[520px] relative flex items-center justify-center lg:-mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className={`w-full max-w-lg lg:max-w-xl rounded-xl overflow-hidden border-2 ${
                darkMode
                  ? 'bg-[#0d0d0d] border-neon-red/50 shadow-[0_0_0_1px_rgba(220,38,38,0.2),0_0_40px_rgba(220,38,38,0.15)]'
                  : 'bg-[#1a1a1a] border-neon-red/40 shadow-[0_0_0_1px_rgba(185,28,28,0.3),0_0_30px_rgba(185,28,28,0.12)]'
              }`}
            >
              {/* Title bar */}
              <div
                className={`flex items-center gap-2 px-4 py-2.5 border-b ${
                  darkMode ? 'border-neon-red/30 bg-black/40' : 'border-red-900/40 bg-black/30'
                }`}
              >
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-wider">
                  terminal
                </span>
              </div>
              {/* Code area */}
              <div className="p-5 sm:p-6 h-[320px] sm:h-[390px] lg:h-[450px] overflow-hidden flex flex-col">
                <TerminalTypingText snippets={terminalSnippets} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`p-2 rounded-full ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}
        >
          <ChevronDown className={darkMode ? 'text-white' : 'text-gray-900'} />
        </motion.div>
      </motion.a>

      {/* Parallax Background Shapes */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border-2 border-neon-red/30 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 border-2 border-neon-crimson/30 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  )
}

export default Hero
