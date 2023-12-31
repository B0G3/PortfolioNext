import './globals.css'
import './globals.scss'
import Sidebar from './components/layout/sidebar'
import Waves from './components/layout/waves'
import { VT323 } from 'next/font/google'

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: `Portfolio - B0G3`,
  description: `Marcin Kostrzemski aka B0G3 portfolio`, 
  icons: {
    icon: '/icon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={vt323.className} lang="en">
      <body>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Waves></Waves>
        <Sidebar></Sidebar>
        <div className='w-full h-full text-primary uppercase snap-container'>
          {children}
        </div>
      </body>
    </html>
  )
}
