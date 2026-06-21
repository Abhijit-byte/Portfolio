'use client'

import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Abhijit Dash
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg text-[#a3a3a3]">B.Tech Computer Science Student</p>
              <p className="text-xl text-[#d1d5db] font-medium">
                Full Stack Developer & AI/ML Enthusiast
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base text-[#a3a3a3] leading-relaxed max-w-md"
            >
              Building scalable applications with modern tech. Passionate about backend engineering,
              full-stack development, and AI/ML. Open to internships starting Summer 2026.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#resume" className="no-underline">
                <Button variant="primary" size="lg">
                  Download Resume
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href="#projects" className="no-underline">
                <Button variant="tertiary" size="lg">
                  View Projects
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#1f2937] to-[#111111] rounded-2xl border border-[#262626] flex items-center justify-center">
              <div className="w-60 h-60 md:w-68 md:h-68 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#a3a3a3]">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
