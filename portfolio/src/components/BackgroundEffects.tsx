import { motion } from 'framer-motion'

interface BackgroundEffectsProps {
  mousePosition: { x: number; y: number }
}

const BackgroundEffects = ({ mousePosition }: BackgroundEffectsProps) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Wavy Background Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00FF00', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
              "M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150",
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300",
              "M0,250 Q250,300 500,250 T1000,250 T1500,250 T2000,250",
              "M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,500 Q250,450 500,500 T1000,500 T1500,500 T2000,500"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,500 Q250,450 500,500 T1000,500 T1500,500 T2000,500",
              "M0,550 Q250,500 500,550 T1000,550 T1500,550 T2000,550",
              "M0,500 Q250,450 500,500 T1000,500 T1500,500 T2000,500",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-green rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundEffects
