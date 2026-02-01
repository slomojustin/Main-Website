import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react'

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/justinwilliams55',
      icon: Github,
      color: 'hover:text-gray-600 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/justinwilliams55',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Slomojustin',
      icon: Twitter,
      color: 'hover:text-sky-500'
    },
    {
      name: 'Substack',
      url: 'https://slomojustin.substack.com',
      icon: BookOpen,
      color: 'hover:text-orange-500'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'justinwilliams@berkeley.edu',
      color: 'from-neon-red to-neon-crimson'
    },
    {
      icon: Mail,
      text: 'SIC PARVIS MAGNA Newsletter',
      color: 'from-orange-500 to-yellow-500',
      isSubstack: true,
      url: 'https://slomojustin.substack.com'
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 relative"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
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
            III.
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isEmail = info.text.includes('@berkeley.edu')
              const isSubstack = info.isSubstack
              const isClickable = isEmail || isSubstack
              const href = isSubstack ? info.url : isEmail ? `mailto:${info.text}` : null
              
              return (
                <motion.a
                  key={index}
                  href={href}
                  target={isSubstack ? '_blank' : undefined}
                  rel={isSubstack ? 'noopener noreferrer' : undefined}
                  className={`rounded-xl p-6 flex items-center gap-4 ${
                    darkMode ? 'glass-dark hover:bg-white/5' : 'bg-white shadow-lg border border-gray-200 hover:border-neon-red'
                  } ${isClickable ? 'cursor-pointer' : ''} transition-all`}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {info.text}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={`rounded-xl p-8 ${
              darkMode ? 'glass-dark' : 'bg-white shadow-lg border border-gray-200'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg transition-all ${
                      darkMode 
                        ? 'bg-white/5 hover:bg-white/10' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Icon size={28} className={`${social.color} transition-colors`} />
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
