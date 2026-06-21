'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { Code2, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface LeetCodeStat {
  label: string
  value: string
  color: string
}

export function LeetCodeStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('leetcode-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats: LeetCodeStat[] = [
    { label: 'Problems Solved', value: '450+', color: 'text-[#3b82f6]' },
    { label: 'Easy', value: '180', color: 'text-[#10b981]' },
    { label: 'Medium', value: '200', color: 'text-[#f59e0b]' },
    { label: 'Hard', value: '70', color: 'text-[#ef4444]' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="leetcode-section" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-[#3b82f6]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">LeetCode Stats</h2>
          </div>
          <p className="text-[#a3a3a3] text-lg">Competitive Programming Excellence</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-[#262626] bg-[#111111] hover:bg-[#1a1a1a] transition-colors cursor-pointer group h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[#a3a3a3] text-sm font-medium">{stat.label}</p>
                    <TrendingUp className="w-4 h-4 text-[#3b82f6] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="bg-[#111111] border border-[#262626] rounded-lg p-8 md:p-12 text-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">LeetCode Profile</h3>
            <p className="text-[#a3a3a3] mb-6">
              Actively solving problems and improving algorithmic problem-solving skills. Focus on system design and advanced data structures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full sm:w-auto bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0"
                >
                  View LeetCode Profile
                </Button>
              </a>
              <a href="https://leetcode.com/submissions/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Recent Submissions
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
          <motion.div
            className="bg-[#111111] border border-[#262626] rounded-lg p-6"
            variants={itemVariants}
          >
            <h4 className="text-white font-semibold mb-3">Acceptance Rate</h4>
            <div className="text-3xl font-bold text-[#3b82f6] mb-2">52.3%</div>
            <p className="text-[#a3a3a3] text-sm">Consistent performance across difficulty levels</p>
          </motion.div>
          <motion.div
            className="bg-[#111111] border border-[#262626] rounded-lg p-6"
            variants={itemVariants}
          >
            <h4 className="text-white font-semibold mb-3">Rank</h4>
            <div className="text-3xl font-bold text-[#10b981] mb-2">Top 12%</div>
            <p className="text-[#a3a3a3] text-sm">Among all LeetCode users globally</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
