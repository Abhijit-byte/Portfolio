'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GitBranch, Star, GitFork, Eye } from 'lucide-react'

interface Repository {
  name: string
  description: string
  url: string
  stars: number
  language: string
  fork: boolean
}

// Mock data - in production, would fetch from GitHub API
const repositories: Repository[] = [
  {
    name: 'full-stack-starter',
    description: 'Production-ready Next.js + Node.js + PostgreSQL template',
    url: 'https://github.com',
    stars: 342,
    language: 'TypeScript',
    fork: false,
  },
  {
    name: 'ai-chat-sdk',
    description: 'TypeScript SDK for building AI-powered chat applications',
    url: 'https://github.com',
    stars: 215,
    language: 'Python',
    fork: false,
  },
  {
    name: 'react-data-table',
    description: 'Extensible, performant data table component for React',
    url: 'https://github.com',
    stars: 198,
    language: 'TypeScript',
    fork: false,
  },
]

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

        {/* Popular Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Popular Repositories</h3>
          <div className="space-y-4">
            {repositories.map((repo, index) => (
              <motion.a
                key={index}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="hover:border-[#3b82f6] transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/10 cursor-pointer">
                  <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-white">{repo.name}</h4>
                        {repo.fork && (
                          <Badge variant="secondary" className="text-xs">
                            Fork
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-[#a3a3a3]">{repo.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="default" className="text-xs">
                        {repo.language}
                      </Badge>
                      <div className="flex items-center gap-1 text-[#a3a3a3]">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{repo.stars}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#3b82f6] hover:text-[#2563eb] font-medium transition-colors"
            >
              View Full GitHub Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
