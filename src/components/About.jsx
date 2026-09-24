import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    'Python', 'Java', 'LangGraph', 'Multi-Agent Systems', 'Prompt Engineering',
    'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Docker'
  ]

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
          className="max-w-5xl mx-auto"
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
            className={`rounded-2xl p-8 md:p-12 mb-8 ${
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
              EECS graduate from UC Berkeley with hands-on experience building and orchestrating{' '}
              <span className="text-neon-crimson font-semibold">AI agent systems</span>. Fluent in{' '}
              <span className="text-neon-red font-semibold">LLM-augmented development workflows</span> using
              Claude and OpenAI APIs, agents, and Python/TypeScript full-stack environments.
            </p>

            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-neon-red font-semibold">AI Agent Systems:</span> At{' '}
              <span className="text-neon-crimson font-semibold">Qidds</span>, I design and ship{' '}
              <span className="text-neon-crimson font-semibold">LangGraph multi-agent pipelines</span> in
              production, own the{' '}
              <span className="text-neon-red font-semibold">AWS deployment pipeline</span> end-to-end (ECS
              Fargate, ECR, IAM/OIDC, SSM, CloudWatch, RDS), and build admin-gated approval workflows on top
              of a{' '}
              <span className="text-neon-crimson font-semibold">Spring Boot REST API</span>. At{' '}
              <span className="text-neon-crimson font-semibold">PeerSweep</span>, I orchestrate up to 25
              parallel agents to turn live market data into decision intelligence.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mt-6 text-neon-red font-bold">
              I'm particularly interested in AI agent, applied ML, and backend infrastructure engineering roles.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className={`rounded-2xl p-8 md:p-10 ${
              darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded font-mono text-sm font-medium bullet-item ${
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
        </motion.div>
      </div>
    </section>
  )
}

export default About
