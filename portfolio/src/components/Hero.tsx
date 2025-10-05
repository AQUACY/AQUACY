import { motion } from 'framer-motion'
import { Github, Linkedin, Globe, Code2, Database, Brain } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        className="max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Special Edition Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5"
            >
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-accent-green text-sm font-mono">AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Name and Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-50 mb-4">
                <span className="text-glow-white">Godwin</span>
                <br />
                <span className="text-accent-green text-glow-green">Boadi</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-3 text-xl md:text-2xl text-primary-100">
                <Code2 className="w-6 h-6 text-accent-green" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 text-xl md:text-2xl text-primary-100">
                <Database className="w-6 h-6 text-accent-green" />
                <span>Database Administrator</span>
              </div>
              <div className="flex items-center gap-3 text-xl md:text-2xl text-primary-100">
                <Brain className="w-6 h-6 text-accent-green" />
                <span>AI & ML Enthusiast</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-200 max-w-2xl leading-relaxed"
            >
              Building efficient, scalable, and intelligent systems that solve real-world problems — 
              especially in <span className="text-accent-green font-semibold">healthcare</span>, 
              <span className="text-accent-green font-semibold"> education</span>, and 
              <span className="text-accent-green font-semibold"> community-driven technology</span>.
            </motion.p>

            {/* Location Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-primary-200">
              <Globe className="w-5 h-5 text-accent-green" />
              <span className="text-lg">Based in Ghana 🇬🇭</span>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="https://github.com/AQUACY"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-primary-100 group-hover:text-accent-green transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/godwin-boadi-2b2128114/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-primary-100 group-hover:text-accent-green transition-colors" />
              </a>
              <a
                href="https://aquacy.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
              >
                <Globe className="w-6 h-6 text-primary-100 group-hover:text-accent-green transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Data Panels */}
          <div className="lg:col-span-5 relative">
            <motion.div
              variants={itemVariants}
              className="relative h-[500px]"
            >
              {/* AI Model Badge */}
              <motion.div
                className="absolute top-0 right-0 panel-dark p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs text-primary-300 mb-1">MODEL</div>
                <div className="text-2xl font-bold text-accent-green font-mono">GB-2024</div>
              </motion.div>

              {/* Experience Counter */}
              <motion.div
                className="absolute top-32 left-0 panel-glass p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs text-primary-300 mb-2">EXPERIENCE</div>
                <div className="text-4xl font-bold text-primary-50 mb-1">5+</div>
                <div className="text-sm text-primary-200">Years Building</div>
              </motion.div>

              {/* Projects Counter */}
              <motion.div
                className="absolute bottom-32 right-4 panel-dark p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs text-primary-300 mb-2">PROJECTS</div>
                <div className="text-4xl font-bold text-accent-green mb-1">50+</div>
                <div className="text-sm text-primary-200">Completed</div>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                className="absolute bottom-0 left-0 panel-glass p-4 rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 255, 0, 0.2)',
                    '0 0 20px rgba(0, 255, 0, 0.4)',
                    '0 0 10px rgba(0, 255, 0, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                  <span className="text-sm text-primary-100">Active Developer</span>
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="20%"
                  y1="30%"
                  x2="80%"
                  y2="10%"
                  stroke="#00FF00"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                  x1="80%"
                  y1="70%"
                  x2="20%"
                  y2="90%"
                  stroke="#00FF00"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          variants={itemVariants}
          className="mt-16 panel-glass p-6 rounded-lg max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl text-accent-green">"</div>
            <div>
              <p className="text-lg text-primary-100 italic mb-2">
                Technology should not only automate, but also enlighten.
              </p>
              <p className="text-sm text-primary-300">
                Building systems that make impact, one line of code at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
