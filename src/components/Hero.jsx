import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Html, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as THREE from 'three'
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

// Typing Text Component using HTML overlay
function TypingText({ position, codeSnippet }) {
  const [displayText, setDisplayText] = useState('')
  const lines = codeSnippet.split('\n')
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= lines.length) {
      const timeout = setTimeout(() => {
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
      }, 50) // Faster typing
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, 300) // Shorter pause between lines
      return () => clearTimeout(timeout)
    }
  }, [currentChar, currentLine, lines])

  return (
    <Html
      position={position}
      transform
      occlude
      zIndexRange={[100, 0]}
      style={{
        width: '160px',
        height: '100px',
        pointerEvents: 'none',
        fontSize: '10px'
      }}
    >
      <div style={{
        fontFamily: 'monospace',
        fontSize: '5.5px',
        color: '#FF0000',
        whiteSpace: 'pre-wrap',
        textShadow: '0 0 8px rgba(255,0,0,0.8)',
        lineHeight: '1.15',
        letterSpacing: '0.2px'
      }}>
        {displayText}
        <span style={{ animation: 'blink 0.8s infinite' }}>_</span>
      </div>
    </Html>
  )
}

// 3D Laptop Model Component
function Laptop({ mousePosition, selectedCode }) {
  const meshRef = useRef()
  const autoRotateRef = useRef(0)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Temporarily disabled auto-rotation for positioning
      // autoRotateRef.current += 0.003
      
      // Mouse tracking only
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mousePosition.x * 0.5,
        0.05
      )
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.3,
        0.05
      )
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Laptop Base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[3, 0.15, 2]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Laptop Screen Frame */}
        <group position={[0, 0.5, -0.9]} rotation={[-0.3, 0, 0]}>
          <mesh>
            <boxGeometry args={[2.9, 1.8, 0.1]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Screen Background (Dark) */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[2.7, 1.6]} />
            <meshStandardMaterial 
              color="#000000"
              emissive="#0a0000"
              emissiveIntensity={0.3}
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>

          {/* Typing Text on Screen */}
          <TypingText 
            position={[0.3, -0.5, 0.062]}
            codeSnippet={selectedCode}
          />

          {/* Red Screen Glow */}
          <pointLight position={[0, 0, 0.5]} intensity={2} color="#FF0000" distance={2} />
        </group>

        {/* Accent Lights - Red theme */}
        <pointLight position={[0, 0, 1]} intensity={1.5} color="#FF0000" />
        <pointLight position={[-1, 0, -1]} intensity={0.8} color="#DC143C" />
        <pointLight position={[1, 0, -1]} intensity={0.5} color="#8B0000" />
      </group>
    </Float>
  )
}

const Hero = ({ darkMode }) => {
  const mousePosition = useRef({ x: 0, y: 0 })
  const tagline = "Building reliable hardware & secure systems — from digital circuits to encrypted networks"
  const typedText = useTypewriter(tagline, 30)

  // Code snippets for the laptop screen
  const codeSnippets = [
    // #7 - System Access
    `$ ssh berkeley.secure.net
> Authenticating...
> Access granted.
> Loading secure channel...
> Connection established.
> Welcome, JW.`,
    
    // #1 - Verilog CPU Pipeline
    `// RISC-V Pipeline
always @(posedge clk) begin
  if (stall) pc <= pc;
  else pc <= pc_next;
  
  instruction <= imem[pc];
  opcode <= instr[6:0];
  alu_out <= alu_op(rs1, rs2);
end`,
    
    // #9 - Code Compilation
    `$ make deploy
[BUILD] Compiling RISC-V...
[SYNTH] Synthesizing @ 100MHz
[SUCCESS] Timing met
[DEPLOY] Uploading to FPGA...
[DONE] System online.`
  ]

  // Randomly select a code snippet on mount
  const [selectedCode] = useState(() => {
    return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
  })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mousePosition.current = {
      x: (clientX / innerWidth) * 2 - 1,
      y: -(clientY / innerHeight) * 2 + 1
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          {/* 3D Interactive Element */}
          <motion.div
            className="h-[400px] lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Suspense fallback={null}>
                <Laptop mousePosition={mousePosition.current} selectedCode={selectedCode} />
              </Suspense>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
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
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
