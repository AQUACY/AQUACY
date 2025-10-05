import { motion } from 'framer-motion'
import { Brain, MessageSquare, Briefcase, Truck, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'AI-Powered Slide Assistant',
      description: 'A web tool that allows students and professionals to upload slides and interact with an AI model that answers questions strictly based on the uploaded content.',
      icon: Brain,
      stack: ['Laravel', 'Cohere API', 'Vue.js'],
      color: '#00FF00',
    },
    {
      id: '02',
      title: 'Group Chat System with AI',
      description: 'Real-time chat system with group functionality — members can upload slides, chat, and ask AI questions using a command keyword /askai:',
      icon: MessageSquare,
      stack: ['Laravel', 'Vue.js', 'Pusher', 'Cohere API'],
      color: '#00FF00',
    },
    {
      id: '03',
      title: 'Case Management System',
      description: 'A web-based case management solution with contract signing, client onboarding, and case manager assignment. Features admin-controlled registration and automated email invitations.',
      icon: Briefcase,
      stack: ['Laravel', 'MySQL', 'Vue.js'],
      color: '#00FF00',
    },
    {
      id: '04',
      title: 'Emisnest Logistics',
      description: 'A logistics and delivery management system designed to streamline order processing, fleet tracking, and customer communication.',
      icon: Truck,
      stack: ['Laravel', 'MySQL', 'Vue.js', 'Tailwind CSS'],
      color: '#00FF00',
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
            <Briefcase className="w-8 h-8 text-accent-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-50">
              Featured <span className="text-accent-green text-glow-green">Projects</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-accent-green rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="panel-dark p-8 rounded-lg hover:border-accent-green/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Left Side - Icon and ID */}
                  <div className="flex flex-col items-center gap-4 flex-shrink-0">
                    <div className="p-4 bg-accent-green/10 rounded-lg group-hover:bg-accent-green/20 transition-colors">
                      <project.icon className="w-8 h-8 text-accent-green" />
                    </div>
                    <div className="panel-glass px-4 py-2 rounded">
                      <span className="text-2xl font-bold text-accent-green font-mono">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-50 group-hover:text-accent-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-200 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-green/10 border border-accent-green/30 rounded text-accent-green text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting Line Decoration */}
                <motion.div
                  className="absolute -right-2 top-1/2 w-4 h-4 bg-accent-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Connecting Line to Next Project */}
              {idx < projects.length - 1 && (
                <div className="flex justify-center py-4">
                  <motion.div
                    className="w-0.5 h-8 bg-gradient-to-b from-accent-green to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: 32 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 panel-glass p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-primary-50 mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Built multiple enterprise-level Laravel APIs',
              'Integrated real-time systems using Pusher',
              'Set up Jenkins pipelines for CI/CD',
              'Worked with Cohere AI for context-aware assistants',
              'Panel member evaluating tech startups',
              'Managed hosting, SEO, and client projects',
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                <p className="text-primary-200 text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
