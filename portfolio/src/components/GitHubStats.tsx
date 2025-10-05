import { motion } from 'framer-motion'
import { Github, Star, GitFork, Eye } from 'lucide-react'

const GitHubStats = () => {
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
            <Github className="w-8 h-8 text-accent-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-50">
              GitHub <span className="text-accent-green text-glow-green">Activity</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-accent-green rounded-full" />
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Eye, label: 'Profile Views', value: '4', color: '#00FF00' },
            { icon: Star, label: 'Total Stars', value: '3', color: '#00FF00' },
            { icon: GitFork, label: 'Repositories', value: '30+', color: '#00FF00' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="panel-dark p-6 rounded-lg hover:border-accent-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-green/10 rounded-lg group-hover:bg-accent-green/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent-green" />
                </div>
                <div className="text-sm text-primary-300 uppercase">{stat.label}</div>
              </div>
              <div className="text-4xl font-bold text-accent-green">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Images */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel-glass p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-primary-50 mb-4">GitHub Statistics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-primary-400/20 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=AQUACY&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1A1A1A&title_color=00FF00&icon_color=00FF00&text_color=F5F5F5"
                  alt="GitHub Stats"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="bg-primary-400/20 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=AQUACY&layout=compact&theme=tokyonight&hide_border=true&bg_color=1A1A1A&title_color=00FF00&text_color=F5F5F5"
                  alt="Top Languages"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel-glass p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-primary-50 mb-4">Contribution Streak</h3>
            <div className="bg-primary-400/20 rounded-lg p-4 flex items-center justify-center">
              <img
                src="https://streak-stats.demolab.com?user=AQUACY&theme=tokyonight&hide_border=true&background=1A1A1A&ring=00FF00&fire=00FF00&currStreakLabel=00FF00&sideLabels=F5F5F5&currStreakNum=F5F5F5&dates=F5F5F5&sideNums=00FF00"
                alt="GitHub Streak"
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 panel-dark p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold text-primary-50 mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing ideas, contributing to open-source projects, 
            and mentoring others in web and AI development.
          </p>
          <motion.a
            href="https://github.com/AQUACY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-green text-primary-500 font-bold rounded-lg hover:shadow-glow-green transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats
