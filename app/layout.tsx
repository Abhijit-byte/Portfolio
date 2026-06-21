import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
