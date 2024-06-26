import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'
import Footer from '@/components/footer'
import { AnalyticsProvider } from '@/providers/AnalyticsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://regulationwebsite.com'),
  title: 'Regulation Website',
  description:
    'The Regulation Podcast is a show about friendship and embracing absurdity.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider />
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
