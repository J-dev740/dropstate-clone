import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  openGraph: {
    title: 'dropstate',
    description: 'Empowering Indian creators with dropstate: Artistic marketplace for unique designs',
    url: 'https://dropstate-clone.vercel.app',
    siteName: 'dropstate',
    images: [
      {
        url: 'https://i.postimg.cc/BbPBZ8pH/Hero.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.postimg.cc/BbPBZ8pH/Hero.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
