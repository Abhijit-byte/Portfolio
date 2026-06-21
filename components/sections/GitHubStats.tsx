'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { GitBranch, Star, GitFork, Eye } from 'lucide-react'



interface Stat {
  label: string
  value: string
  icon: React.ReactNode
}

const stats: Stat[] = [
  {
    label: 'Repositories',
    value: '28',
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    label: 'Contributions',
    value: '420+',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    label: 'Total Stars',
    value: '755',
    icon: <Star className="w-5 h-5" />,
  },
  {
    label: 'Followers',
    value: '142',
    icon: <GitFork className="w-5 h-5" />,
  },
]

export function GitHubStats() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <GitBranch className="w-8 h-8" />
            GitHub Activity
          </h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
            Real-time contributions and open-source projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center">
                <CardContent className="flex flex-col items-center gap-2 py-6">
                  <div className="text-[#3b82f6]">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#a3a3a3]">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/Abhijit-byte/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
          >
            View Full GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
