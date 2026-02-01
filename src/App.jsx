import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import { AudioProvider } from './hooks/useAudio'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }

    // Show loading screen initially
    const timer = setTimeout(() => {
      setIsLoading(false) // Stop the loading animation after 2 seconds
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  return (
    <AudioProvider>
      <AnimatePresence>
        {!showContent && <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {showContent && (
        <div className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-black via-[#1a0000] to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}>
        {/* Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="relative">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-crimson/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      )}
    </AudioProvider>
  )
}

export default App
