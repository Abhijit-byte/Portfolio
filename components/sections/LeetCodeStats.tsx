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
    { label: 'Total Solved', value: '450', color: 'text-[#3b82f6]' },
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

        {/* LeetCode-Style Stats Display */}
        <motion.div
          className="bg-[#111111] border border-[#262626] rounded-lg p-8 md:p-12 mb-12"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Total Problems */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#3b82f6] mb-2">450</div>
                <p className="text-[#a3a3a3] text-sm">Questions Solved</p>
              </div>

              {/* Easy */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#10b981] to-[#059669] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">180</div>
                      <div className="text-xs text-white/80">Easy</div>
                    </div>
                  </div>
                </div>
                <p className="text-[#10b981] text-xs font-semibold">Easy</p>
              </div>

              {/* Medium */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">200</div>
                      <div className="text-xs text-white/80">Medium</div>
                    </div>
                  </div>
                </div>
                <p className="text-[#f59e0b] text-xs font-semibold">Medium</p>
              </div>

              {/* Hard */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#ef4444] to-[#dc2626] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">70</div>
                      <div className="text-xs text-white/80">Hard</div>
                    </div>
                  </div>
                </div>
                <p className="text-[#ef4444] text-xs font-semibold">Hard</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-8 border-t border-[#262626]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#a3a3a3] text-sm">Progress</span>
                <span className="text-white font-semibold text-sm">450 / 3000</span>
              </div>
              <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                <div className="bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#ef4444] h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <p className="text-[#6b7280] text-xs mt-2">15% of all LeetCode problems</p>
            </div>
          </div>
        </motion.div>

        {/* Profile CTA */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 px-8">
              View Full Profile
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
