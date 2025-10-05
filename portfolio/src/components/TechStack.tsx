import { motion } from 'framer-motion'
import { Code, Server, Palette, Brain, Wrench } from 'lucide-react'

const TechStack = () => {
  const categories = [
    {
      title: 'Backend',
      icon: Server,
      color: '#00FF00',
      techs: [
        { name: 'Laravel', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MySQL', level: 92 },
        { name: 'PostgreSQL', level: 88 },
      ],
    },
    {
      title: 'Frontend',
      icon: Palette,
      color: '#00FF00',
      techs: [
        { name: 'Vue.js', level: 93 },
        { name: 'Quasar', level: 90 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Axios', level: 92 },
      ],
    },
    {
      title: 'AI & Data',
      icon: Brain,
      color: '#00FF00',
      techs: [
        { name: 'Python', level: 88 },
        { name: 'Cohere AI', level: 85 },
        { name: 'Scikit-learn', level: 82 },
        { name: 'NumPy', level: 80 },
        { name: 'Pandas', level: 83 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: '#00FF00',
      techs: [
        { name: 'Jenkins', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Apache', level: 88 },
        { name: 'Nginx', level: 87 },
        { name: 'Git', level: 95 },
      ],
    },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Code className="w-8 h-8 text-accent-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-50">
              Tech <span className="text-accent-green text-glow-green">Stack</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-accent-green rounded-full" />
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="panel-dark p-6 rounded-lg hover:border-accent-green/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-green/10 rounded-lg group-hover:bg-accent-green/20 transition-colors">
                  <category.icon className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-2xl font-bold text-primary-50">{category.title}</h3>
              </div>

              {/* Tech List with Progress Bars */}
              <div className="space-y-4">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary-100 font-mono text-sm">{tech.name}</span>
                      <span className="text-accent-green text-xs font-mono">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-400/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-green to-accent-green/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 + techIdx * 0.05 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Widget Corner */}
              <div className="mt-6 flex justify-end">
                <div className="panel-glass px-3 py-1 rounded">
                  <span className="text-xs text-primary-300 font-mono">
                    CAT-{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 panel-glass p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-primary-50 mb-6 flex items-center gap-3">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            Current Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Machine Learning & Data Engineering',
              'Building FastAPI Microservices',
              'Exploring Web3 Technologies',
              'Healthcare Tech Solutions',
            ].map((focus, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="panel-dark p-4 rounded-lg border-l-2 border-accent-green"
              >
                <p className="text-primary-100 text-sm">{focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
