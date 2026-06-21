'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Award, Code2, Trophy, Zap, GitBranch, Briefcase } from 'lucide-react'

interface Stat {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  color: string
}

const stats: Stat[] = [
  {
    title: 'CGPA',
    value: '9.4+',
    description: 'Out of 10',
    icon: <Award className="w-8 h-8" />,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Core Technologies',
    value: '10+',
    description: 'Proficient stack',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Projects',
    value: '15+',
    description: 'Built & deployed',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Hackathons',
    value: '3',
    description: '2 wins',
    icon: <Trophy className="w-8 h-8" />,
    color: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'GitHub',
    value: '420+',
    description: 'Contributions',
    icon: <GitBranch className="w-8 h-8" />,
    color: 'from-indigo-400 to-blue-500',
  },
  {
    title: 'Availability',
    value: 'Open',
    description: 'Summer 2026 roles',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'from-rose-400 to-red-500',
  },
]

function CounterComponent({ target, gradientClass }: { target: string, gradientClass: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const numericTarget = parseInt(target)
    if (isNaN(numericTarget)) {
      setCount(NaN)
      return
    }

    const duration = 2000
    const increment = numericTarget / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, target])

  if (isNaN(parseInt(target))) {
    return (
      <motion.div
        onViewportEnter={() => setHasStarted(true)}
        className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}
      >
        {target}
      </motion.div>
    )
  }

  return (
    <motion.div
      onViewportEnter={() => setHasStarted(true)}
      className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradientClass} drop-shadow-md`}
    >
      {count}
      {!target.match(/^\d+$/) && target.slice(String(parseInt(target)).length)}
    </motion.div>
  )
}

export function QuickSnapshot() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="snapshot" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6 shadow-xl backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 tracking-widest uppercase">System Status</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white mb-4 tracking-tight drop-shadow-xl">
            <span className="text-pink-500">~</span>/snapshot
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-mono">
            Key metrics and performance highlights.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative perspective-1000">
              {/* Glowing Background effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`} />
              
              <Card className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden group-hover:-translate-y-2 group-hover:rotate-x-2 transition-all duration-500 ease-out">
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                
                <CardContent className="flex flex-col gap-6 p-8 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 shadow-lg shadow-black/50`}>
                      <div className="text-white drop-shadow-md">
                        {stat.icon}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-black/50 px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
                      {stat.title}
                    </span>
                  </div>
                  
                  <div>
                    <CounterComponent target={stat.value} gradientClass={stat.color} />
                  </div>
                  
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                  
                  <p className="text-sm font-medium text-slate-400 tracking-wide">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
