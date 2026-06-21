'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, Heart, GitBranch, Star } from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  color?: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Abhijit-byte/',
    icon: <GitBranch className="w-5 h-5" />,
    color: 'hover:text-white hover:bg-[#333333]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dashabhijit',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <Star className="w-5 h-5" />,
  },
  {
    name: 'Email',
    url: 'mailto:abhijit.dash@email.com',
    icon: <Mail className="w-5 h-5" />,
  },
]

export function Contact() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto">
            Open to internship opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* Email CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-center items-center text-center p-8">
              <CardContent className="flex flex-col items-center gap-4 w-full">
                <div className="p-3 bg-[#1f2937] rounded-lg text-[#3b82f6]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:abhijit.dash@email.com"
                    className="text-[#3b82f6] hover:text-[#2563eb] transition-colors break-all"
                  >
                    abhijit.dash@email.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Response Time */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-center items-center text-center p-8">
              <CardContent className="flex flex-col items-center gap-4 w-full">
                <div className="p-3 bg-[#1f2937] rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-[#a3a3a3] text-sm">Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-center items-center text-center p-8 border-[#3b82f6]">
              <CardContent className="flex flex-col items-center gap-4 w-full">
                <div className="p-3 bg-[#1f2937] rounded-lg text-[#3b82f6]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                  <p className="text-green-400 text-sm font-medium">Open for internships</p>
                  <p className="text-[#a3a3a3] text-xs mt-1">Summer 2026</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="no-underline"
            >
              <Button
                variant="secondary"
                size="md"
                className="flex items-center gap-2"
                title={link.name}
              >
                {link.icon}
                {link.name}
              </Button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
