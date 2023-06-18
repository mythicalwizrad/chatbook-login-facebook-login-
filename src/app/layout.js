import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chatbook Login',
  description: 'chatbook yohohoho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon"
        href="https://th.bing.com/th/id/R.74d28e15bc49f7788190cc0b2168002f?rik=kUEcTPal7euQrw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-oql4Eft3uvQ%2fVg1PTynBY3I%2fAAAAAAAAIvY%2fI6p92rJfAks%2fs1600%2fchatbooks.png&ehk=vHf0BJOBnyreogdtcq%2b1NE4NNe1OQe8ASwe1yklF68w%3d&risl=&pid=ImgRaw&r=0"
        type="image/icon type"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
