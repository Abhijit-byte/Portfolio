import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { QuickSnapshot } from '@/components/sections/QuickSnapshot'
import { ResumeSkills } from '@/components/sections/ResumeSkills'
import { WhyHireMe } from '@/components/sections/WhyHireMe'
import { Projects } from '@/components/sections/Projects'
import { LeetCodeStats } from '@/components/sections/LeetCodeStats'
import { GitHubStats } from '@/components/sections/GitHubStats'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <QuickSnapshot />
        <ResumeSkills />
        <Projects />
        <LeetCodeStats />
        <GitHubStats />
        <Experience />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
