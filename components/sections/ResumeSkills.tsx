'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Palette, Settings, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend',
    icon: <Palette className="w-8 h-8 text-[#ff8a65] drop-shadow-[0_0_8px_rgba(255,138,101,0.5)]" />,
    color: 'text-cyan-400',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: <Settings className="w-8 h-8 text-[#ce93d8] drop-shadow-[0_0_8px_rgba(206,147,216,0.5)]" />,
    color: 'text-emerald-400',
    skills: [
      { name: 'Node.js', level: 93 },
      { name: 'Python', level: 85 },
      { name: 'FastAPI', level: 90 },
      { name: 'PostgreSQL', level: 87 },
      { name: 'MongoDB', level: 85 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Cloud className="w-8 h-8 text-[#e0e0e0] drop-shadow-[0_0_8px_rgba(224,224,224,0.5)]" />,
    color: 'text-purple-400',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 92 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 88 },
      { name: 'Vercel', level: 80 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <Wrench className="w-8 h-8 text-[#bcaaa4] drop-shadow-[0_0_8px_rgba(188,170,164,0.5)]" />,
    color: 'text-orange-400',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 98 },
      { name: 'Figma', level: 82 },
      { name: 'GraphQL', level: 80 },
    ],
  },
]

const experiencedWith = [
  'Redis', 'Nginx', 'Jenkins', 'TensorFlow', 'PyTorch', 'LLMs', 'RAG', 'Microservices', 'Serverless', 'Supabase'
]

export function ResumeSkills() {
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      {/* Subtle background particles (simulated with CSS) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
            <span className="text-blue-500">$</span> ls -la skills/
          </h2>
          <p className="text-sm md:text-base text-slate-300 font-mono">
            Technologies I work with to build amazing solutions
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 bg-[#111111]/80 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors rounded-2xl flex flex-col items-center">
                
                {/* Card Header */}
                <div className="flex flex-col items-center mb-8">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${category.color} tracking-wide drop-shadow-md`}>
                    {category.category}
                  </h3>
                </div>

                {/* Progress Bars */}
                <div className="w-full space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between items-end mb-1.5 font-mono">
                        <span className="text-[13px] text-slate-200">{skill.name}</span>
                        <span className="text-[11px] text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Also Experienced With Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-mono font-bold text-cyan-400 mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {experiencedWith.map((item, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 text-xs font-mono font-semibold text-slate-200 bg-black border border-white/10 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
