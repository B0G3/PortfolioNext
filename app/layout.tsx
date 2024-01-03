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
        <div id="preloader" className="z-[999] fixed bottom-0 right-0 bg-neutral-950 w-full max-w-full h-full flex justify-center items-center pointer-events-none transition-all overflow-hidden">
          <div className="absolute text-white text-2xl w-[100vw]">
            <div className="flex w-fit mx-auto justify-center items-center">
              <div className="w-4 h-4 mr-8 bg-white mx-auto pulse-waves"></div>
              <div className="w-4 h-4 mr-8 bg-white mx-auto pulse-waves"></div>
              <div className="w-4 h-4 bg-white mx-auto pulse-waves"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
