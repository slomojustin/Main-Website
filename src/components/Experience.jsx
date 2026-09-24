import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experience = [
    {
      id: 1,
      role: 'AI SWE Intern',
      company: 'Qidds',
      location: 'Fremont, CA',
      period: 'May 2026 - Present',
      bullets: [
        'Designed and implemented the Validation and Maintenance Agents in a four-agent LangGraph pipeline for a K-12 educational program discovery platform, building deterministic pipelines with field-shape translation, duplicate detection, and automated deadline rollover and drift detection.',
        'Owned the AWS deployment pipeline for all four agents end-to-end: ECS Fargate task definitions, ECR image repos, IAM/OIDC deploy roles, SSM Parameter Store secrets, CloudWatch logging, and RDS/security-group access — taking services from local Docker to running production containers.',
        'Diagnosed and fixed layered production failures spanning network, database, and application boundaries, then closed each bug class at its root instead of patching the instance.',
        'Built an admin-gated publishing workflow routing validated records through multi-step approval to a Spring Boot REST API, and shipped an AI-generated cover-image feature (LLM image API + admin review UI with prompt preview and before/after comparison).'
      ]
    },
    {
      id: 2,
      role: 'Co-Creator',
      company: 'PeerSweep',
      location: 'Antioch, CA',
      period: 'March 2026 - Present',
      bullets: [
        "Selected for TinyFish's incubator program (Round 2), co-building with a veteran banking executive to engineer his vision for democratizing C-suite decision intelligence using AI agents and live regulatory data.",
        'Orchestrated up to 25 parallel AI agents to scrape live deposit rates, news, and social signals across peer banks, compressing multi-day research into seconds, and built a multi-tab dashboard turning that data into actionable decision intelligence.'
      ]
    },
    {
      id: 3,
      role: 'Instructor for Electrical Engineering and Circuits 1',
      company: 'CSM Mentor',
      location: 'Berkeley, CA',
      period: 'Aug 2023 - May 2025',
      bullets: [
        "Taught and mentored each semester a group of students, simplifying complex circuit analysis concepts through explanations and reinforcing understanding by adapting teaching methods to each student's learning needs."
      ]
    }
  ]

  const education = {
    degree: 'B.S. Electrical Engineering & Computer Science',
    school: 'University of California, Berkeley',
    period: 'August 2021 - August 2025',
    coursework: ['Communication Networks', 'Computer Security', 'Data Structures', 'Machine Structures', 'Artificial Intelligence', 'Digital Design & Integrated Circuits Lab', 'Internet Architecture', 'Circuits', 'Physics for Engineers']
  }

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
            <span className="text-gradient">Experience</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-neon-red to-neon-crimson mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`rounded-2xl p-8 md:p-10 ${
                darkMode ? 'glass-dark' : 'bg-white shadow-xl border border-gray-200'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="md:flex md:gap-10">
                {/* Left: Icon, role, company, period */}
                <div className="md:w-72 flex-shrink-0 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-red to-neon-crimson flex items-center justify-center flex-shrink-0 mb-4">
                    <Briefcase className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {job.role}
                  </h3>

                  <p className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-neon-red' : 'text-red-600'
                  }`}>
                    {job.company} · {job.location}
                  </p>

                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    darkMode ? 'bg-white/10' : 'bg-gray-100'
                  }`}>
                    {job.period}
                  </span>
                </div>

                {/* Right: Bullets */}
                <ul className={`flex-1 space-y-3 text-md md:border-l md:pl-10 ${
                  darkMode ? 'text-gray-300 md:border-white/10' : 'text-gray-700 md:border-gray-200'
                }`}>
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-neon-red' : 'bg-red-600'
                      }`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Card */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
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
                {education.period}
              </span>
            </div>

            {/* Degree */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {education.degree}
            </h3>

            {/* School */}
            <p className={`text-lg font-semibold mb-6 ${
              darkMode ? 'text-neon-red' : 'text-red-600'
            }`}>
              {education.school}
            </p>

            {/* Relevant Coursework */}
            <div className="mb-2">
              <h4 className={`text-sm font-semibold mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
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
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
