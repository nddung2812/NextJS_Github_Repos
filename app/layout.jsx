import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Johnny first NextJS App',
  description: 'NextJS crash course',
  keyword: "web development, wedesign, javascript, react",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
