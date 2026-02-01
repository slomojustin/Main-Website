import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GoldCoin from './GoldCoin'

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    'Verilog', 'FPGA (PYNQ-Z1)', 'Digital Logic', 
    'Python', 'C/C++', 'Go', 'Arduino', 'Embedded Systems',
    'Networking (TCP/IP)', 'Cryptography', 
    'Web Security', 'Secure Systems', 'Vulnerability Analysis',
    'Routing Protocols'
  ]

  const education = {
    degree: 'B.S. Electrical Engineering & Computer Science',
    school: 'University of California, Berkeley',
    period: 'August 2021 - August 2025',
    gpa: 'N/A',
    coursework: ['Digital Design & Integrated Circuits', 'Machine Structures', 'Computer Security', 'Communication Networks']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 relative"
      ref={ref}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            {/* Chapter Number */}
            <motion.div
              className="text-[#D4AF37] font-mono text-sm md:text-base tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              I.
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Bio Content */}
          <motion.div
            className={`rounded-2xl p-8 md:p-12 mb-12 ${
              darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-neon-red font-semibold">Electrical Engineering:</span> I design and implement 
              digital systems from the ground up, including{' '}
              <span className="text-neon-crimson font-semibold">pipelined RISC-V CPUs on FPGAs</span>,{' '}
              <span className="text-neon-red font-semibold">embedded systems</span> with Arduino and analog circuits, 
              and hardware optimized to meet{' '}
              <span className="text-neon-crimson font-semibold">100 MHz timing constraints</span>.
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-neon-red font-semibold">Software Engineering:</span> I build secure, 
              scalable systems—from implementing{' '}
              <span className="text-neon-crimson font-semibold">TCP protocols</span> and{' '}
              <span className="text-neon-red font-semibold">distance-vector routing algorithms</span>, 
              to developing{' '}
              <span className="text-neon-crimson font-semibold">encrypted file-sharing platforms</span> with 
              cryptographic protocols. I excel in Python, Go, Java, and C++, with expertise in networking, 
              security, and systems programming.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mt-6 text-neon-red font-bold">
              I'm particularly interested in systems, infrastructure, embedded, and security-focused engineering roles.
            </p>
          </motion.div>

          {/* Skills & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Skills Section */}
            <motion.div
              className={`rounded-2xl p-6 md:p-8 ${
                darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Skills
              </h3>
              
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2 py-1 rounded font-mono text-sm font-medium cursor-pointer bullet-item ${
                      darkMode 
                        ? 'bg-neon-red/20 text-neon-red border border-neon-red/30 hover:bg-neon-red/30' 
                        : 'bg-red-100 text-red-700 border border-red-200 hover:bg-red-200'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className={`rounded-2xl p-6 md:p-8 ${
                darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
              }`}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1">
                  <img 
                    src="/berkeley-seal.png" 
                    alt="UC Berkeley Seal" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    Education
                  </h3>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {education.period}
                  </span>
                </div>
              </div>

              <h4 className={`text-lg font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {education.degree}
              </h4>
              
              <p className={`font-semibold ${
                darkMode ? 'text-neon-red' : 'text-red-600'
              }`}>
                {education.school}
              </p>
            </motion.div>
          </div>

          {/* Continental Coin Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: 'Projects', value: '10', coins: 10 },
              { label: 'Technologies', value: '14', coins: 14 },
              { label: 'Coffees', value: '∞', coins: 100 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`text-center p-6 rounded-xl relative overflow-hidden ${
                  darkMode ? 'glass-dark hover:bg-[#D4AF37]/5' : 'bg-white shadow-lg border border-gray-200 hover:border-[#D4AF37]'
                }`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Gold coin */}
                <div className="flex justify-center mb-3">
                  <GoldCoin size={50} />
                </div>
                
                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className={`text-sm md:text-base font-mono ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>

                {/* Subtle gold glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
