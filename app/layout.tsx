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
    icon: '/PortfolioNext/icon.png'
  },
  openGraph: {
    title: 'Portfolio - B0G3',
    description: 'Marcin Kostrzemski aka B0G3 portfolio',
    url: 'https://b0g3.github.io/PortfolioNext/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://b0g3.github.io/PortfolioNext/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
