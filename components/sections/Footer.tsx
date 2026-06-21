'use client'

import Link from 'next/link'
import { GitBranch, Heart, Star, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Abhijit Dash</h3>
            <p className="text-[#a3a3a3] text-sm">
              Full Stack Developer & AI/ML Enthusiast
            </p>
            <p className="text-[#a3a3a3] text-xs mt-3">
              B.Tech Computer Science Student
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#snapshot" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors text-sm">
                  Snapshot
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abhijit-byte/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
                title="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dashabhijit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
                title="LinkedIn"
              >
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
                title="Twitter"
              >
                <Star className="w-5 h-5" />
              </a>
              <a
                href="mailto:abhijit.dash@email.com"
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#262626] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a3a3a3]">
            <p>© {currentYear} Abhijit Dash. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#3b82f6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
