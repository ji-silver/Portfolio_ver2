import './globals.scss'
import type { Metadata } from 'next'
import Layout from '../components/layout/Layout'

export const metadata: Metadata = {
  title: 'JIEUN PORTFOLIO',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout />
        {children}
      </body>
    </html>
  )
}
