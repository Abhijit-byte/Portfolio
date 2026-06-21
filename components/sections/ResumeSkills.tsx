'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Download, ExternalLink } from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI/ML',
    skills: ['TensorFlow', 'PyTorch', 'LLMs', 'RAG', 'LangChain'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Git', 'CI/CD', 'Vercel'],
  },
  {
    category: 'Tools',
    skills: ['VS Code', 'Figma', 'Postman', 'GitHub', 'Linux'],
  },
]

const interests = [
  'Backend Engineering',
  'Full Stack Development',
  'AI/ML Products',
  'System Design',
]

export function ResumeSkills() {
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
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume & Skills</h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
            Technical expertise and areas of interest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-center items-center text-center p-8">
              <CardContent className="flex flex-col items-center gap-6 w-full">
                <div className="text-5xl">📄</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Resume</h3>
                  <p className="text-sm text-[#a3a3a3] mb-6">
                    Updated June 2026
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <a href="/resume.pdf" download className="no-underline">
                    <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <Button variant="secondary" size="md" className="w-full flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Online
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8">
              <CardTitle className="mb-6">Areas of Interest</CardTitle>
              <CardContent className="flex flex-col gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                    <span className="text-[#d1d5db]">{interest}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-[#1f2937] to-[#111111] border border-[#3b82f6]">
              <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-green-400">Available</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Open to Internships</h3>
                  <p className="text-sm text-[#a3a3a3] mt-2">
                    Summer 2026
                  </p>
                  <p className="text-xs text-[#a3a3a3] mt-3">
                    Interested in Full Stack & Backend roles at FAANG & startups
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <h4 className="text-lg font-semibold text-[#3b82f6]">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="default" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
