import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`relative py-12 ${
      darkMode ? 'bg-black/40' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-6">
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-neon-red to-neon-crimson flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ArrowUp className="text-white" size={20} />
        </motion.button>

        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-3">
                {'<Portfolio />'}
              </h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building innovative solutions with clean code and modern technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm transition-colors ${
                        darkMode 
                          ? 'text-gray-400 hover:text-neon-blue' 
                          : 'text-gray-600 hover:text-neon-blue'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:your.email@example.com"
                    className={`text-sm transition-colors ${
                      darkMode 
                        ? 'text-gray-400 hover:text-neon-red' 
                        : 'text-gray-600 hover:text-neon-red'
                    }`}
                  >
                    your.email@example.com
                  </a>
                </li>
                <li className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t ${
            darkMode ? 'border-white/10' : 'border-gray-300'
          } pt-8`}>
            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>

              <motion.p 
                className={`text-sm flex items-center gap-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                Made with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} className="text-red-500 fill-red-500" />
                </motion.span>
                {' '}and React
              </motion.p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-neon-blue' 
                      : 'text-gray-600 hover:text-neon-blue'
                  }`}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-neon-blue' 
                      : 'text-gray-600 hover:text-neon-blue'
                  }`}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
