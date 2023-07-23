import Sidebar from './components/layout/sidebar'
import './globals.css'
import './globals.scss'
import WavesContainer from './components/layout/wavesContainer.jsx'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'React portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WavesContainer></WavesContainer>
        <Sidebar></Sidebar>
        <div className='w-full h-full text-primary uppercase snap-container'>
          {children}
        </div>
      </body>
    </html>
  )
}
