'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Award, Code2, Trophy, Zap, GitBranch, Briefcase } from 'lucide-react'

interface Stat {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}

const stats: Stat[] = [
  {
    title: 'CGPA',
    value: '9.4+',
    description: 'Out of 10',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Core Technologies',
    value: '10+',
    description: 'Proficient stack',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Projects',
    value: '15+',
    description: 'Built & deployed',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Hackathons',
    value: '3',
    description: '2 wins',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'GitHub',
    value: '420+',
    description: 'Contributions',
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    title: 'Availability',
    value: 'Open',
    description: 'Summer 2026 internships',
    icon: <Briefcase className="w-6 h-6" />,
  },
]

function CounterComponent({ target }: { target: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const numericTarget = parseInt(target)
    if (isNaN(numericTarget)) return

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

  return (
    <motion.div
      onViewportEnter={() => setHasStarted(true)}
      className="text-3xl md:text-4xl font-bold text-[#3b82f6]"
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
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="snapshot" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Quick Snapshot</h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
            Key metrics and highlights at a glance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:border-[#3b82f6] transition-colors duration-300">
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[#3b82f6]">{stat.icon}</div>
                    <span className="text-xs text-[#a3a3a3] bg-[#1f2937] px-2 py-1 rounded">
                      {stat.title}
                    </span>
                  </div>
                  <div>
                    <CounterComponent target={stat.value} />
                  </div>
                  <p className="text-sm text-[#a3a3a3]">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
