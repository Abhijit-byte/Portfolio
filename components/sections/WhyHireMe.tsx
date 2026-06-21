'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Target, Cloud, Globe2, Zap } from 'lucide-react'

const reasons = [
  {
    title: 'Full Stack Versatility',
    description: 'From React frontends to Node.js backends, I handle the complete development lifecycle.',
    icon: <Target className="w-6 h-6 text-pink-500" />,
    iconBg: 'bg-pink-500/10'
  },
  {
    title: 'DevOps & Cloud Expertise',
    description: 'AWS, Docker, Kubernetes, CI/CD - I ensure your applications scale and deploy smoothly.',
    icon: <Cloud className="w-6 h-6 text-slate-200" />,
    iconBg: 'bg-slate-200/10'
  },
  {
    title: 'Global Availability',
    description: 'Available across all time zones with excellent communication and project management.',
    icon: <Globe2 className="w-6 h-6 text-blue-400" />,
    iconBg: 'bg-blue-400/10'
  },
  {
    title: 'Modern Practices',
    description: 'Clean code, testing, documentation, and agile methodologies are my standard approach.',
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    iconBg: 'bg-orange-400/10'
  }
]

export function WhyHireMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="why-hire-me" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505]">
      {/* Subtle background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="font-mono text-cyan-400">$ cat </span>
            <span className="font-serif text-blue-400">why_hire_me.md</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <Card className="h-full p-6 bg-[#0a0b10] border-white/5 group-hover:border-cyan-400/50 transition-colors duration-500 rounded-xl relative overflow-hidden">
                {/* Subtle glowing shadow on hover */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500 pointer-events-none" />
                
                <CardContent className="flex flex-col gap-4 p-0 relative z-10">
                  <div className={`w-12 h-12 rounded-full ${reason.iconBg} flex items-center justify-center mb-2`}>
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-cyan-400">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm md:text-base font-serif text-slate-300 leading-relaxed">
                    {reason.description}
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
