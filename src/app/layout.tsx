import GlobalStyle from '../styles/global'

import Header from '@/components/Header'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle/>
      <body className={roboto.className}>
        <Header/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}