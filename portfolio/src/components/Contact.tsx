import { motion } from 'framer-motion'
import { Linkedin, Github, Globe, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@AQUACY',
      url: 'https://github.com/AQUACY',
      color: '#00FF00',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Godwin Boadi',
      url: 'https://www.linkedin.com/in/godwin-boadi-2b2128114/',
      color: '#00FF00',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'aquacy.github.io',
      url: 'https://aquacy.github.io',
      color: '#00FF00',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghana 🇬🇭',
      url: null,
      color: '#00FF00',
    },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-primary-400/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Send className="w-8 h-8 text-accent-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-50">
              Get In <span className="text-accent-green text-glow-green">Touch</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-accent-green rounded-full mx-auto mb-6" />
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Let's build something amazing together. Feel free to reach out for collaborations, 
            opportunities, or just a friendly chat about technology.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link, idx) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {link.url ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block panel-dark p-6 rounded-lg hover:border-accent-green/50 transition-all duration-300 group h-full"
                >
                  <div className="p-3 bg-accent-green/10 rounded-lg w-fit mb-4 group-hover:bg-accent-green/20 transition-colors">
                    <link.icon className="w-6 h-6 text-accent-green" />
                  </div>
                  <div className="text-xs text-primary-300 uppercase mb-2">{link.label}</div>
                  <div className="text-primary-50 font-medium group-hover:text-accent-green transition-colors">
                    {link.value}
                  </div>
                </a>
              ) : (
                <div className="panel-dark p-6 rounded-lg h-full">
                  <div className="p-3 bg-accent-green/10 rounded-lg w-fit mb-4">
                    <link.icon className="w-6 h-6 text-accent-green" />
                  </div>
                  <div className="text-xs text-primary-300 uppercase mb-2">{link.label}</div>
                  <div className="text-primary-50 font-medium">{link.value}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-glass p-8 rounded-lg max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5 mb-6">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-accent-green text-sm font-mono">OPEN TO OPPORTUNITIES</span>
            </div>
            <p className="text-2xl md:text-3xl text-primary-50 font-bold mb-4">
              "Building systems that make impact, <br />
              <span className="text-accent-green text-glow-green">one line of code at a time.</span>"
            </p>
            <p className="text-primary-200">
              Whether you need a full-stack developer, AI integration specialist, or database architect — 
              I'm here to help bring your vision to life.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary-400/20 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="https://github.com/AQUACY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-primary-100 group-hover:text-accent-green transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/godwin-boadi-2b2128114/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary-100 group-hover:text-accent-green transition-colors" />
            </a>
            <a
              href="https://aquacy.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 panel-glass rounded-lg hover:bg-accent-green/10 hover:border-accent-green/50 transition-all duration-300 group"
            >
              <Globe className="w-5 h-5 text-primary-100 group-hover:text-accent-green transition-colors" />
            </a>
          </div>
          <p className="text-primary-300 text-sm">
            © 2024 Godwin Boadi. Built with React, TypeScript, Framer Motion & Tailwind CSS
          </p>
          <p className="text-primary-400 text-xs mt-2 font-mono">
            MODEL-GB-2024 | VERSION 1.0.0
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
