import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Siddharth Shankar Choudhary - Software Engineer III',
    template: '%s | Siddharth Shankar Choudhary',
  },
  description: 'Software Development Engineer III with 2.5+ years of experience building high-impact web and full-stack solutions. Specialized in React, TypeScript, Kotlin, and modern web tooling.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'TypeScript', 'Kotlin', 'Spring Boot', 'Portfolio'],
  authors: [{ name: 'Siddharth Shankar Choudhary' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siddharth-portfolio.vercel.app',
    siteName: 'Siddharth Shankar Choudhary',
    title: 'Siddharth Shankar Choudhary - Software Engineer III',
    description: 'Software Development Engineer III with expertise in React, TypeScript, Kotlin, and modern web tooling.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Siddharth Shankar Choudhary Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Shankar Choudhary - Software Engineer III',
    description: 'Software Development Engineer III with expertise in React, TypeScript, Kotlin, and modern web tooling.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
