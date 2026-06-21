import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Abhijit Dash - Full Stack Developer & AI/ML Enthusiast',
  description: 'B.Tech Computer Science student. Full Stack Developer with expertise in React, Node.js, Python, and AI/ML. Internship ready for Summer 2026.',
  keywords: ['Full Stack Developer', 'B.Tech CSE', 'React', 'Node.js', 'Python', 'AI/ML', 'FAANG Internship'],
  authors: [{ name: 'Abhijit Dash' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Abhijit Dash - Full Stack Developer',
    description: 'B.Tech CSE student preparing for FAANG internships. Full Stack Developer with AI/ML expertise.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijit Dash - Full Stack Developer',
    description: 'B.Tech CSE student. Full Stack Developer & AI/ML Enthusiast. Open to summer 2026 internships.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} style={{ scrollBehavior: 'smooth' }}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
