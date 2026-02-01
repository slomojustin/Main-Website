import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as THREE from 'three'

// Simple 3D Laptop (no typing text for testing)
function SimpleLaptop({ mousePosition }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
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
          
          {/* Screen Background with red glow */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[2.7, 1.6]} />
            <meshStandardMaterial 
              color="#000000"
              emissive="#FF0000"
              emissiveIntensity={0.5}
            />
          </mesh>

          <pointLight position={[0, 0, 0.5]} intensity={2} color="#FF0000" distance={2} />
        </group>

        {/* Red Accent Lights */}
        <pointLight position={[0, 0, 1]} intensity={1.5} color="#FF0000" />
        <pointLight position={[-1, 0, -1]} intensity={0.8} color="#DC143C" />
        <pointLight position={[1, 0, -1]} intensity={0.5} color="#8B0000" />
      </group>
    </Float>
  )
}

const Hero = ({ darkMode }) => {
  const mousePosition = useRef({ x: 0, y: 0 })

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
              <span className="text-gradient">
                Your Name
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
              Computer Science Graduate
            </motion.p>

            <motion.p 
              className={`text-lg md:text-xl mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building efficient systems & networks, one line of code at a time
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-red to-neon-crimson text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.a
                href="#contact"
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  darkMode 
                    ? 'glass border-2 border-neon-red/50 hover:border-neon-red' 
                    : 'bg-white border-2 border-gray-300 hover:border-neon-red'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Interactive Element - SIMPLE TEST VERSION */}
          <motion.div
            className="h-[400px] lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Suspense fallback={null}>
                <SimpleLaptop mousePosition={mousePosition.current} />
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
