import { useState, useEffect, useRef, createContext, useContext } from 'react'

const AudioContext = createContext({
  isMuted: false,
  toggleMute: () => {},
  playSound: () => {},
  startBackgroundMusic: () => {},
  isPlaying: false,
  audioEnabled: false
})

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const backgroundMusic = useRef(null)
  const soundEffects = useRef({})

  useEffect(() => {
    let initialized = false
    const base = import.meta.env.BASE_URL

    // Initialize background music (use base URL so it works on GitHub Pages)
    try {
      const audio = new Audio()
      audio.src = `${base}audio/background.mp3`
      audio.loop = true
      audio.volume = 0.3

      audio.addEventListener('canplaythrough', () => {
        backgroundMusic.current = audio
        initialized = true
        setAudioEnabled(true)
      }, { once: true })

      audio.addEventListener('error', () => {
        console.log('Audio files not found - audio features disabled')
        setAudioEnabled(false)
      }, { once: true })

      audio.load()
    } catch (error) {
      console.log('Audio not supported')
      setAudioEnabled(false)
    }

    // Initialize sound effects (use base URL so they work on GitHub Pages)
    try {
      soundEffects.current = {
        hover: new Audio(`${base}audio/hover.mp3`),
        click: new Audio(`${base}audio/click.mp3`),
        transition: new Audio(`${base}audio/transition.mp3`),
      }
      Object.values(soundEffects.current).forEach(sound => {
        sound.volume = 0.7
      })
    } catch (error) {
      console.log('Sound effects could not be loaded')
    }

    return () => {
      // Cleanup
      if (backgroundMusic.current) {
        backgroundMusic.current.pause()
        backgroundMusic.current = null
      }
      Object.values(soundEffects.current).forEach(sound => {
        sound.pause()
      })
    }
  }, [])

  const startBackgroundMusic = () => {
    if (audioEnabled && backgroundMusic.current && !isPlaying && !isMuted) {
      backgroundMusic.current.play().catch(err => {
        console.log('Audio autoplay prevented:', err)
      })
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)

    // Only mute/unmute background music, not sound effects
    if (audioEnabled && backgroundMusic.current) {
      backgroundMusic.current.muted = newMutedState
      if (newMutedState) {
        backgroundMusic.current.pause()
        setIsPlaying(false)
      } else {
        backgroundMusic.current.play().catch(err => {
          console.log('Audio play prevented:', err)
        })
        setIsPlaying(true)
      }
    }
  }

  const playSound = (soundName) => {
    // Click/hover/transition always play when available, regardless of music on/off or mute
    if (!soundEffects.current[soundName]) return
    try {
      const sound = soundEffects.current[soundName]
      sound.currentTime = 0
      sound.play().catch(() => {})
    } catch (err) {}
  }

  return (
    <AudioContext.Provider 
      value={{ 
        isMuted, 
        toggleMute, 
        playSound, 
        startBackgroundMusic,
        isPlaying,
        audioEnabled
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
