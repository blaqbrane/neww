import Navbar from './components/Navbar'
import Providerss from './components/Providerss'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whopme',
  description: 'Everything everywhere about Ai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providerss>
        <Navbar />
        {children}
        </Providerss>
      </body>
    </html>
  )
}
