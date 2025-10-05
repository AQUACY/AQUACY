import { motion } from 'framer-motion'
import { Globe, ExternalLink } from 'lucide-react'

const Websites = () => {
  const websites = [
    {
      name: 'Tuger Properties',
      url: 'https://tugerproperties.com',
      category: 'Real Estate',
      description: 'Real estate and property management',
      icon: '🏠',
    },
    {
      name: 'Skybridge Pharmaceuticals',
      url: 'https://skybridgepharmaceuticals.com',
      category: 'Healthcare',
      description: 'Pharmaceutical company website',
      icon: '💊',
    },
    {
      name: 'Purple Hearts Homecare',
      url: 'https://purpleheartshomecare.com',
      category: 'Healthcare',
      description: 'Homecare service provider',
      icon: '💜',
    },
    {
      name: 'Manchester Homecare',
      url: 'https://manchesterhomecare.com',
      category: 'Healthcare',
      description: 'UK-based healthcare and home support service',
      icon: '🏥',
    },
    {
      name: 'American General Hospital',
      url: 'https://aghospital.org',
      category: 'Healthcare',
      description: 'Hospital and health service website',
      icon: '🏥',
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
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Globe className="w-8 h-8 text-accent-green" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-50">
              Live <span className="text-accent-green text-glow-green">Websites</span>
            </h2>
          </div>
          <div className="h-1 w-32 bg-accent-green rounded-full" />
          <p className="mt-4 text-primary-200 text-lg">
            WordPress websites I've built and currently manage for clients
          </p>
        </motion.div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((website, idx) => (
            <motion.a
              key={website.url}
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="panel-dark p-6 rounded-lg hover:border-accent-green/50 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon and Category */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{website.icon}</div>
                <div className="panel-glass px-3 py-1 rounded">
                  <span className="text-xs text-accent-green font-mono">{website.category}</span>
                </div>
              </div>

              {/* Website Name */}
              <h3 className="text-xl font-bold text-primary-50 mb-2 group-hover:text-accent-green transition-colors">
                {website.name}
              </h3>

              {/* Description */}
              <p className="text-primary-200 text-sm mb-4">{website.description}</p>

              {/* URL */}
              <div className="flex items-center gap-2 text-accent-green text-sm font-mono">
                <span className="truncate">{website.url.replace('https://', '')}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <span className="text-xs text-primary-300">Live & Maintained</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="panel-glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-accent-green mb-2">5+</div>
            <div className="text-primary-200">Active Websites</div>
          </div>
          <div className="panel-glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-accent-green mb-2">100%</div>
            <div className="text-primary-200">Uptime Record</div>
          </div>
          <div className="panel-glass p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-accent-green mb-2">24/7</div>
            <div className="text-primary-200">Maintenance Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Websites
