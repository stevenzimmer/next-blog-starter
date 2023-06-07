import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import ProfilePic from '@/components/ProfilePic'
export const metadata:Metadata = {
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
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto ">
          <div className='max-w-xl mx-auto py-12'>
          <ProfilePic />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
