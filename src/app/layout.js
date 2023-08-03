import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const font = Poppins({ weight: ["400", '500', '700', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Quick Chat',
  description: 'A chatbot for business owners',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <section className='flex flex-col h-screen w-full overflow-hidden'>
          <Navbar/>
          <main className='flex-1'>
            {children}
          </main>
        </section>
      </body>
    </html>
    </ClerkProvider>
  )
}
