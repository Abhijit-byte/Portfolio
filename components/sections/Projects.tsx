'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/Badge'
import { GitBranch, ExternalLink, Code2 } from 'lucide-react'

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
    problem: 'College students lack accessible mental health resources and peer support communities.',
    solution: 'Built a full-stack platform connecting students with counselors, resources, and peer support groups.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
    keyFeatures: [
      'Real-time messaging & support groups',
      'AI-powered resource recommendations',
      'Anonymous peer support',
    ],
    impact: 'Used by 500+ students, 4.8★ rating, 50% increase in engagement after AI integration.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'SkillLink',
    description: 'Skill-based peer learning and mentorship marketplace',
    problem: 'Students want to learn from peers but lack a structured platform to find mentors.',
    solution: 'Created a marketplace connecting learners with skilled mentors for targeted skill development.',
    techStack: ['Next.js', 'Python', 'FastAPI', 'Stripe', 'PostgreSQL'],
    keyFeatures: [
      'Mentor discovery & rating system',
      'Integrated payment processing',
      'Real-time session scheduling',
    ],
    impact: '200+ active mentors, $50K+ in transactions, 92% mentor satisfaction rate.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Harvard HSIL Healthcare AI',
    description: 'AI-powered diagnostic assistant for healthcare professionals',
    problem: 'Healthcare providers need quick, accurate diagnostic support to improve patient outcomes.',
    solution: 'Developed ML model and web interface for AI-assisted medical diagnosis.',
    techStack: ['TensorFlow', 'Python', 'React', 'FastAPI', 'AWS SageMaker'],
    keyFeatures: [
      'Multi-condition disease detection',
      'Explainable AI with clinical evidence',
      'HIPAA-compliant data handling',
    ],
    impact: 'Tested with 50+ doctors, 94% diagnostic accuracy, Published findings.',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'QR Attendance Management',
    description: 'Automated attendance system using QR codes for educational institutions',
    problem: 'Manual attendance is time-consuming and prone to errors in large classes.',
    solution: 'Built QR-based attendance system with real-time analytics dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'QR.js', 'Chart.js'],
    keyFeatures: [
      'Instant QR code generation & scanning',
      'Real-time attendance dashboard',
      'Automated reporting & analytics',
    ],
    impact: 'Deployed in 3 institutions, 500+ daily users, 99.2% uptime.',
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            <Code2 className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-world projects demonstrating problem-solving, technical depth, and product thinking.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <Card className="h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 border-white/5 hover:border-blue-500/30 bg-slate-900/40 relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardContent className="flex-col flex h-full p-8 relative z-10 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-4 flex-grow">
                    <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5">
                      <h4 className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Problem</h4>
                      <p className="text-slate-300 text-sm">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                      <h4 className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wider">Solution</h4>
                      <p className="text-slate-300 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-800/80">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer - Impact & Links */}
                  <div className="pt-6 mt-auto border-t border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="text-sm">
                      <span className="text-emerald-400 font-semibold">Impact: </span>
                      <span className="text-slate-400">{project.impact}</span>
                    </div>
                    
                    <div className="flex gap-2 shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="icon" className="w-10 h-10 rounded-full" aria-label="View Source">
                            <GitBranch className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" size="icon" className="w-10 h-10 rounded-full" aria-label="View Live">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
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
