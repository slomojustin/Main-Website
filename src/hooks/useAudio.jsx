import { useState, useRef, createContext, useContext } from 'react'

const AudioContext = createContext({
  isMuted: false,
  toggleMute: () => {},
  playSound: () => {},
  audioEnabled: false
})

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false)
  const [audioEnabled] = useState(true)
  const soundEffects = useRef({})
  const base = import.meta.env.BASE_URL

  const getSound = (soundName) => {
    if (soundEffects.current[soundName]) return soundEffects.current[soundName]
    try {
      const sound = new Audio(`${base}audio/${soundName}.mp3`)
      sound.volume = 0.7
      soundEffects.current[soundName] = sound
      return sound
    } catch (error) {
      return null
    }
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  const playSound = (soundName) => {
    if (isMuted) return
    const sound = getSound(soundName)
    if (!sound) return
    try {
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
