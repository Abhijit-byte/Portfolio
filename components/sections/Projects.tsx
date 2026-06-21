'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GitBranch, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  keyFeatures: string[]
  impact: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'MannMitra',
    description: 'Community platform for mental health support and resource sharing',
    problem: 'College students lack accessible mental health resources and peer support communities',
    solution: 'Built a full-stack platform connecting students with counselors, resources, and peer support groups',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
    keyFeatures: [
      'Real-time messaging and support groups',
      'AI-powered resource recommendations',
      'Anonymous peer support',
      'Counselor verification system',
    ],
    impact: 'Used by 500+ students, 4.8★ rating, 50% increase in engagement after AI integration',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'SkillLink',
    description: 'Skill-based peer learning and mentorship marketplace',
    problem: 'Students want to learn from peers but lack a structured platform to find mentors and share knowledge',
    solution: 'Created a marketplace connecting learners with skilled mentors for targeted skill development',
    techStack: ['Next.js', 'Python', 'FastAPI', 'Stripe', 'PostgreSQL'],
    keyFeatures: [
      'Mentor discovery and rating system',
      'Integrated payment processing',
      'Structured learning tracks',
      'Real-time session scheduling',
    ],
    impact: '200+ active mentors, $50K+ in transactions, 92% mentor satisfaction rate',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Harvard HSIL Healthcare AI',
    description: 'AI-powered diagnostic assistant for healthcare professionals',
    problem: 'Healthcare providers need quick, accurate diagnostic support to improve patient outcomes',
    solution: 'Developed ML model and web interface for AI-assisted medical diagnosis using anonymized patient data',
    techStack: ['TensorFlow', 'Python', 'React', 'FastAPI', 'AWS SageMaker'],
    keyFeatures: [
      'Multi-condition disease detection (94% accuracy)',
      'Explainable AI with clinical evidence',
      'HIPAA-compliant data handling',
      'Real-time inference API',
    ],
    impact: 'Tested with 50+ doctors, 94% diagnostic accuracy, Published findings in medical journal',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'QR Attendance Management',
    description: 'Automated attendance system using QR codes for educational institutions',
    problem: 'Manual attendance is time-consuming and prone to errors in large classes',
    solution: 'Built QR-based attendance system with real-time analytics and reporting dashboard',
    techStack: ['React', 'Node.js', 'MongoDB', 'QR.js', 'Chart.js'],
    keyFeatures: [
      'Instant QR code generation and scanning',
      'Real-time attendance dashboard',
      'Automated reporting and analytics',
      'Mobile app integration',
    ],
    impact: 'Deployed in 3 institutions, 500+ daily users, 99.2% uptime',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
            Real-world projects demonstrating problem-solving, technical depth, and product thinking
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:border-[#3b82f6] transition-colors duration-300">
                <CardContent className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#a3a3a3]">{project.description}</p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#3b82f6] mb-2 uppercase tracking-wide">Problem</h4>
                      <p className="text-[#d1d5db]">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#3b82f6] mb-2 uppercase tracking-wide">Solution</h4>
                      <p className="text-[#d1d5db]">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#3b82f6] mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#3b82f6] mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-[#d1d5db]">
                          <span className="text-[#3b82f6] font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-[#1f2937] border border-[#3b82f6] rounded p-4">
                    <h4 className="text-sm font-semibold text-[#3b82f6] mb-2 uppercase tracking-wide">Impact</h4>
                    <p className="text-[#d1d5db]">{project.impact}</p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="md" className="flex items-center gap-2">
                          <GitBranch className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="md" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
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
