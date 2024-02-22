import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './animate.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dickson Dolphons Jr Pro',
  description: 'Dickson Dolphins Jr Pro Football Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
