'use client'

import { motion } from 'framer-motion'
import { GitBranch, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Hero() {
  const [time, setTime] = useState<Date | null>(null)
  const [masteryHours, setMasteryHours] = useState(2450.15)

  useEffect(() => {
    setTime(new Date())
    const timer = setInterval(() => setTime(new Date()), 1000)
    
    // Simulate active learning/coding hours ticking up
    const masteryTimer = setInterval(() => {
      setMasteryHours(prev => prev + 0.01)
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(masteryTimer)
    }
  }, [])
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
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-sm font-medium text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Summer 2026 Internships
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Hi, I'm <br/>
                <span className="text-gradient">Abhijit Dash</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xl sm:text-2xl text-slate-300 font-medium">
                Full Stack Developer & AI/ML Enthusiast
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                B.Tech Computer Science student building scalable applications with modern tech. 
                Passionate about backend engineering, full-stack development, and creating intelligent AI solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#projects" className="no-underline">
                <Button variant="primary" size="lg" className="h-12 px-8 text-base font-semibold group">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#resume" className="no-underline">
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="tertiary" size="icon-lg" aria-label="GitHub">
                  <GitBranch className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Graphic */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end hidden md:flex"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full animate-[spin_40s_linear_infinite]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path id="circlePath" d="M 100, 100 m -96, 0 a 96,96 0 1,1 192,0 a 96,96 0 1,1 -192,0" fill="none" />
                  <text className="text-[10px] font-mono fill-slate-500/50 tracking-wider">
                    <textPath href="#circlePath" startOffset="0%">
                      {'import { useState, useEffect } from "react"; • git commit -m "init" • const fetchData = async () => { await fetch("/api"); }; • export default App; • npm run build • interface User { id: string; } • function render() { return true; } • '}
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]" />

              {/* Core shape - 10,000 HOURS MASTERY TRACKER */}
              <div className="absolute inset-12 lg:inset-16 glass rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)] overflow-hidden group cursor-default flex items-center justify-center border border-white/5">
                
                {/* Mastery Progress Ring */}
                <svg className="absolute w-full h-full transform -rotate-90 scale-95" viewBox="0 0 100 100">
                  {/* Track Background */}
                  <circle cx="50" cy="50" r="46" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" fill="none" />
                  
                  {/* Active Progress */}
                  <circle 
                    cx="50" cy="50" r="46" 
                    stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" 
                    strokeDasharray="100" strokeDashoffset={100 - (masteryHours / 10000) * 100} 
                    pathLength="100" className="transition-all duration-1000 ease-linear drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                  />
                  
                  {/* Subtle pulsing glow ring inside */}
                  <circle 
                    cx="50" cy="50" r="40" 
                    stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5" fill="none" 
                    className="animate-ping" style={{ animationDuration: '3s' }}
                  />
                </svg>

                {/* Internal Text / Numbers */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center transform transition-transform duration-500 group-hover:scale-105">
                  <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-1 font-mono font-bold drop-shadow-md">
                    Mastery
                  </span>
                  
                  <div className="text-2xl lg:text-3xl font-mono font-bold text-white tracking-widest flex items-center shadow-black drop-shadow-md">
                    <span className="text-cyan-400">
                      {masteryHours.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="mt-1 text-[8px] lg:text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase flex items-center gap-1">
                    <span className="w-4 h-px bg-slate-600"></span>
                    <span>10K HRS</span>
                    <span className="w-4 h-px bg-slate-600"></span>
                  </div>
                </div>

                {/* Hover Reveal: Active Status */}
                <div className="absolute bottom-6 lg:bottom-8 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                    </span>
                    <span className="text-[8px] font-mono font-medium text-cyan-300 uppercase tracking-wider">
                      Deep Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
