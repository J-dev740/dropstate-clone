import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DropState',
  description: 'Creativity Pays Dividends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <title>dropstate</title>
<meta name="description" content="Empowering Indian creators with dropstate: Artistic marketplace for unique designs"/>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://dropstate-clone.vercel.app/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="dropstate"/>
<meta property="og:description" content="Empowering Indian creators with dropstate: Artistic marketplace for unique designs"/>
<meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/90844fc5-a667-478b-a361-7c78eacf89e4.jpg?token=obYvzw2HBkYulgOhwD9ukFVV3tiBKjrDk0YvA2W32aY&height=703&width=564&expires=33243257123"/>

{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="dropstate-clone.vercel.app"/>
<meta property="twitter:url" content="https://dropstate-clone.vercel.app/"/>
<meta name="twitter:title" content="dropstate"/>
<meta name="twitter:description" content="Empowering Indian creators with dropstate: Artistic marketplace for unique designs"/>
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/90844fc5-a667-478b-a361-7c78eacf89e4.jpg?token=obYvzw2HBkYulgOhwD9ukFVV3tiBKjrDk0YvA2W32aY&height=703&width=564&expires=33243257123"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
