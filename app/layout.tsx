import './globals.css'
import './globals.scss'
import Sidebar from './components/layout/sidebar'
import Waves from './components/layout/waves'

// const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
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
