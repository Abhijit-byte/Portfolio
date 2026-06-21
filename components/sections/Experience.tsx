'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Briefcase, Code2, Terminal } from 'lucide-react'

const experiences = [
  {
    role: 'Project Developer',
    company: 'Relberry',
    date: 'Recent',
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    iconBg: 'bg-emerald-400/10 border-emerald-400/20',
    color: 'emerald',
    highlights: [
      'Architected and developed custom web solutions tailored to specific business requirements.',
      'Collaborated to design intuitive user interfaces and optimize overall frontend performance.',
      'Ensured high code quality through rigorous testing and modern development practices.',
    ]
  },
  {
    role: 'Project Developer',
    company: 'Halftask Pvt Limited',
    date: 'Recent',
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    iconBg: 'bg-purple-400/10 border-purple-400/20',
    color: 'purple',
    highlights: [
      'Built scalable application features to streamline internal business operations.',
      'Integrated third-party APIs and maintained clean, well-documented codebases.',
      'Delivered projects on schedule while adapting to evolving technical requirements.',
    ]
  }
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      {/* Subtle dotted background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            <span className="font-mono text-blue-500">$ </span>
            <span className="font-serif text-cyan-400">systemctl status experience</span>
          </h2>
          <p className="font-serif text-slate-300 text-sm md:text-base">
            Freelance & project-based technical roles
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:space-y-12 space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline dot */}
              <div className={`absolute left-[-11px] top-6 w-5 h-5 rounded-full border-4 border-[#0A0A0A] ${exp.iconBg.split(' ')[0]} flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_currentColor] text-${exp.color}-400`} />

              <Card className="p-6 md:p-8 bg-[#111111]/80 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors rounded-2xl relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-${exp.color}-400/0 group-hover:bg-${exp.color}-400/5 transition-colors duration-500 pointer-events-none`} />
                
                <CardContent className="p-0 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${exp.iconBg}`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="font-mono text-cyan-400 font-semibold flex items-center gap-2">
                          <span>@</span> {exp.company}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
                      <Terminal className="w-3 h-3 mr-2 text-slate-400" />
                      {exp.date}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-${exp.color}-400 shadow-[0_0_8px_currentColor]`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
