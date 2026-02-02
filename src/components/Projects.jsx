import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code2, Network, Server, Database, X } from 'lucide-react'
import { useAudio } from '../hooks/useAudio'

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { playSound } = useAudio()
  const [activeFilter, setActiveFilter] = useState('Featured')
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoveringButton, setHoveringButton] = useState(false)

  const projects = [
    {
      id: 1,
      title: '3-Stage Pipelined RISC-V CPU',
      category: 'Hardware',
      description: '32-bit RISC-V CPU on PYNQ-Z1 FPGA achieving 100 MHz timing with pipeline balancing and critical-path optimization.',
      fullDescription: `• Designed and implemented a fully functional 3-stage pipelined 32-bit RISC-V CPU (RV32I + CSR) on the PYNQ-Z1 FPGA, featuring UART interface for communication.

• Achieved 100 MHz timing through careful pipeline balancing, hazard detection, register file design, and critical-path optimization.

• Implemented Verilog modules for ALU, register file, hazard detection, and synchronous RAM, ensuring correct instruction execution and data forwarding.`,
      tech: ['Verilog', 'FPGA', 'Digital Logic'],
      image: '/fpga_image.webp',
      github: 'https://github.com/slomojustin/FPGA-Project',
      demo: '#',
      icon: Server,
      featured: true
    },
    {
      id: 2,
      title: 'Voice-Controlled Car',
      category: 'Hardware',
      description: 'Microcontroller vehicle using analog circuits and PCA-based ML for voice command classification with closed-loop motor control.',
      fullDescription: `• Built a microcontroller-driven vehicle that responds to voice commands using analog circuits for audio amplification and PCA-based machine learning for voice classification.

• Implemented closed-loop motor control for precise movement and real-time response to user commands.

• Designed custom PCB for audio processing and motor driver circuits.`,
      tech: ['Arduino', 'C++', 'PCA/ML', 'Circuits'],
      image: '/robot_car.jpg',
      github: '#',
      demo: '#',
      icon: Code2,
      featured: false
    },
    {
      id: 3,
      title: 'Secure File-Sharing System',
      category: 'Security',
      description: 'Encrypted file-sharing platform with authentication, storage, and revocation using AES-GCM, RSA, and HMAC for multi-user collaboration on encrypted files.',
      fullDescription: `• Designed and implemented an encrypted multi-user file-sharing service with robust authentication, secure storage, and revocation capabilities.

• Utilized AES-GCM for file encryption, RSA for key exchange, and HMAC for integrity verification to ensure end-to-end security.

• Translated complex cryptographic workflows into intuitive explanations that mirrored real-world customer-facing architectural discussions, ensuring both technical accuracy and accessibility.`,
      tech: ['Go', 'Cryptography', 'Systems'],
      image: '/file_sharing.png',
      github: 'https://github.com/slomojustin/Secure-File-Sharing-Project',
      demo: '#',
      icon: Database,
      featured: true
    },
    {
      id: 4,
      title: 'UnicornBox Vulnerability Hunt',
      category: 'Security',
      description: 'Exploited 8 vulnerabilities (SQL injection, CSRF, XSS, path traversal) in mock web service, demonstrating full account compromise and proposing security mitigations.',
      fullDescription: `• Discovered and exploited eight critical security vulnerabilities including SQL injection, CSRF, session forgery, path traversal, XSS, and AppSec flaws in a mock web service.

• Produced clear, written analyses and mitigation recommendations that demonstrated the ability to convey technical risks to stakeholders of varying expertise.

• Presented findings in a structured report format, mirroring customer enablement and solution validation workflows.

• <span style="color: #FFFFFF; background-color: rgba(212, 175, 55, 0.15); padding: 4px 8px; border-radius: 4px; font-weight: 500; border-left: 3px solid #D4AF37;">Note: GitHub repository unavailable as this was a university course project with academic integrity policies.</span>`,
      tech: ['Web Security', 'SQL Injection', 'XSS'],
      image: '/unicorn.png',
      github: '#',
      demo: '#',
      icon: Server,
      featured: false
    },
    {
      id: 5,
      title: 'Transport-Layer Protocol (TCP)',
      category: 'Networks',
      description: 'TCP-like protocol with 3-way handshake, reliable in-order delivery, sliding-window flow control, and RTT-based retransmission timeout.',
      fullDescription: `• Implemented core TCP features including 3-way handshake, reliable in-order delivery, sliding-window flow control, and dynamic RTT-based retransmission timeout.

• Analyzed protocol performance under packet loss scenarios, quantifying throughput degradation and recovery characteristics.

• Created user-friendly documentation describing output and common failure modes, mirroring the troubleshooting guides used in customer support and pre-sales engineering workflows.`,
      tech: ['Python', 'Networking', 'TCP/IP'],
      image: 'TCP.png',
      github: '#',
      demo: '#',
      icon: Network,
      featured: false
    },
    {
      id: 6,
      title: 'Dynamic Distance-Vector Router',
      category: 'Networks',
      description: 'RIP-style distance-vector router with split horizon, poison reverse, triggered updates, and route expiration for loop prevention and fast convergence.',
      fullDescription: `• Built a RIP-style distance-vector router implementing split horizon, poison reverse, triggered updates, and route expiration to prevent routing loops and ensure fast convergence.

• Implemented robust error handling for dropped, duplicated, and malformed packets to map multi-hop network paths reliably.

• Created clear documentation and common failure modes, closely mirroring the structured troubleshooting guides used in customer support and pre-sales engineering workflows.`,
      tech: ['Python', 'Networking', 'Algorithms'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
      icon: Network,
      featured: false
    },
    {
      id: 7,
      title: 'Phishing Detection Tool Using Machine Learning',
      category: 'Security',
      description: 'Cloud-integrated ML tool analyzing Gmail messages using heuristic rules and sentiment analysis to detect phishing emails with 65% accuracy.',
      fullDescription: `• Built an end-to-end Python/Flask pipeline that uses the Gmail API and Google Cloud Natural Language API to analyze emails and flag likely phishing attempts.

• Implemented OAuth 2.0 and cloud integration, designing a sentiment- and intensity-based scoring algorithm to compute phishing likelihood up to 100%.

• Evaluated the prototype on a 20‑email dataset (10 phishing / 10 legitimate), achieving 65% accuracy, 70% precision, and 70% recall while identifying directions for future ML and UX improvements.`,
      tech: ['Python', 'Flask', 'Google Cloud', 'NLP'],
      image: '/phishing-detector.png',
      github: 'https://github.com/slomojustin/Phishing-Detection-Tool',
      demo: '#',
      icon: Database,
      featured: false
    },
    {
      id: 8,
      title: 'Remote-Controlled Door Lock',
      category: 'Hardware',
      description: 'IoT door lock system using Arduino and ESP8266 with web interface for remote control of physical sliding lock mechanism via HTTP requests.',
      fullDescription: `• Built an IoT door lock system using Arduino and ESP8266 WiFi module with a web interface that sends HTTP requests to remotely control a physical sliding lock mechanism.

• Developed a RESTful web server on ESP8266 NodeMCU that processes lock/unlock commands and communicates with Arduino to drive an L298N motor controller and linear actuator.

• Created a full-stack solution combining an HTML/JavaScript frontend with embedded C++ code to wirelessly translate button clicks into motor control signals for the door lock hardware.`,
      tech: ['Arduino', 'ESP8266', 'HTML/JS', 'IoT'],
      image: '/Door Lock Actuator.jpg',
      github: 'https://github.com/slomojustin/Remote-Control-Doorlock',
      demo: '#',
      icon: Server,
      featured: true
    },
    {
      id: 9,
      title: 'Memory Safety Vulnerability Exploitation',
      category: 'Security',
      description: 'Exploited memory safety vulnerabilities in C programs including buffer overflows, format string attacks, and return-oriented programming (ROP).',
      fullDescription: `• Exploited seven memory safety vulnerabilities in vulnerable C programs using techniques including buffer overflow attacks, return-to-libc, and format string vulnerabilities.

• Crafted shellcode and ROP chains to bypass security mechanisms like stack canaries and ASLR, achieving arbitrary code execution on target systems.

• Analyzed x86-64 assembly code and GDB debugging to identify vulnerability points and construct precise exploits for decommissioned satellite control systems.

• <span style="color: #FFFFFF; background-color: rgba(212, 175, 55, 0.15); padding: 4px 8px; border-radius: 4px; font-weight: 500; border-left: 3px solid #D4AF37;">Note: GitHub repository unavailable as this was a university course project with academic integrity policies.</span>`,
      tech: ['C', 'Assembly', 'GDB', 'Exploitation'],
      image: 'memory_safety.png',
      github: '#',
      demo: '#',
      icon: Server,
      featured: false
    },
  ]

  const filters = ['Featured', 'Hardware', 'Security', 'Networks', 'All']
  
  const getFilteredProjects = () => {
    if (activeFilter === 'Featured') {
      return projects.filter(p => p.featured)
    } else if (activeFilter === 'All') {
      return projects
    } else {
      return projects.filter(p => p.category === activeFilter)
    }
  }
  
  const filteredProjects = getFilteredProjects()

  return (
    <section 
      id="projects" 
      className="pt-24 pb-20 md:pt-32 md:pb-32 relative"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Chapter Number */}
          <motion.div
            className="text-[#D4AF37] font-mono text-sm md:text-base tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            II.
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] mx-auto rounded-full mb-3"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <motion.p
            className={`text-base md:text-lg font-mono ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Click on each to learn more
          </motion.p>
        </motion.div>

        {/* Filter Tabs + Projects Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filter Tabs */}
          <motion.div
            className="lg:w-48 flex lg:flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => {
                  playSound('click')
                  setActiveFilter(filter)
                }}
                onMouseEnter={() => playSound('hover')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all text-left ${
                  activeFilter === filter
                    ? filter === 'Featured'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8960F] text-black shadow-lg'
                      : 'bg-gradient-to-r from-neon-red to-neon-crimson text-white shadow-lg'
                    : darkMode
                      ? 'glass-dark hover:bg-white/10'
                      : 'bg-white border border-gray-300 hover:border-neon-red'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'Featured' && '★ '}
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* Projects Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: hoveredCard === project.id ? -10 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedProject(project)}
                  className={`${!hoveringButton ? 'group' : ''} rounded-2xl overflow-hidden cursor-pointer ${
                    project.featured 
                      ? (darkMode ? 'glass-dark border border-[#D4AF37]/30 hover:border-[#D4AF37]/60' : 'bg-white shadow-xl border-2 border-[#D4AF37]/50 hover:border-[#D4AF37]')
                      : (darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200')
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neon-red/20 to-neon-crimson/20">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] px-3 py-1 rounded font-mono text-xs tracking-wider text-black font-bold shadow-lg">
                        ★ FEATURED
                      </div>
                    )}
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 p-3 rounded-lg ${
                      project.featured 
                        ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8960F]' 
                        : 'bg-gradient-to-br from-neon-red to-neon-crimson'
                    }`}>
                      <Icon size={20} className={project.featured ? 'text-black' : 'text-white'} />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        darkMode ? 'bg-white/10' : 'bg-gray-100'
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    <p className={`text-sm mb-4 line-clamp-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 rounded font-mono uppercase tracking-wider border ${
                            darkMode 
                              ? 'bg-neon-red/10 text-neon-red border-neon-red/30' 
                              : 'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          [{tech}]
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => setHoveringButton(true)}
                          onMouseLeave={() => setHoveringButton(false)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all justify-center ${
                            project.demo === '#' ? 'w-full' : 'flex-1'
                          } ${
                            darkMode
                              ? 'bg-white/10 hover:bg-white/20'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}
                      
                      {project.demo !== '#' && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => setHoveringButton(true)}
                          onMouseLeave={() => setHoveringButton(false)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-red to-neon-crimson text-white font-medium flex-1 justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-red/10 to-neon-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                  />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl pointer-events-auto ${
                  darkMode ? 'glass-dark' : 'bg-white'
                }`}
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                    darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  <X size={24} />
                </button>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {selectedProject.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] px-3 py-1 rounded font-mono text-xs tracking-wider text-black font-bold shadow-lg">
                      ★ FEATURED
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                      <span className={`inline-block text-sm px-3 py-1 rounded-full ${
                        darkMode ? 'bg-white/10' : 'bg-gray-100'
                      }`}>
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">About This Project</h3>
                    <div className={`text-base leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {(selectedProject.fullDescription || selectedProject.description).split('•').filter(item => item.trim()).map((bullet, index) => (
                        <p key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: `• ${bullet.trim()}` }} />
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`text-sm px-4 py-2 rounded-lg font-mono uppercase tracking-wider border ${
                            darkMode
                              ? 'bg-neon-red/10 text-neon-red border-neon-red/30'
                              : 'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          [{tech}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    {selectedProject.github !== '#' && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all justify-center ${
                          selectedProject.demo === '#' ? 'w-full max-w-md' : 'flex-1'
                        } ${
                          darkMode
                            ? 'bg-white/10 hover:bg-white/20'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    )}

                    {selectedProject.demo !== '#' && (
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-red to-neon-crimson hover:from-[#D4AF37] hover:to-[#B8960F] text-white hover:text-black font-semibold flex-1 justify-center transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
