import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'
import ProfilePic from '@/components/ProfilePic'
export const metadata = {
  title: 'Zim Blog',
  description: 'Created by Steven Zimmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${inter.className}`}>
        <Navbar />
        <main className="min-h-screen ">
          <div className='max-w-xl mx-auto'>
        <ProfilePic />
        {children}
        </div>
        </main>
        </body>
    </html>
  )
}
