import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2021 - 2025',
      description: 'Focus on systems programming, networking, and distributed systems.',
      gpa: '3.8',
      coursework: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Database Systems', 'Software Engineering']
    }
  ]

  return (
    <section 
      id="experience" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-red to-neon-crimson mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`rounded-2xl p-8 md:p-10 ${
                darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Icon & Period */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-red to-neon-crimson flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  darkMode ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  {edu.period}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {edu.degree}
              </h3>

              {/* School */}
              <p className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-neon-red' : 'text-red-600'
              }`}>
                {edu.school}
              </p>

              {/* GPA */}
              <p className={`text-md mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className="font-semibold">GPA:</span> {edu.gpa}/4.0
              </p>

              {/* Description */}
              <p className={`text-md mb-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {edu.description}
              </p>

              {/* Relevant Coursework */}
              <div className="mb-2">
                <h4 className={`text-sm font-semibold mb-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className={`text-sm px-3 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-neon-red/20 text-neon-red' 
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
