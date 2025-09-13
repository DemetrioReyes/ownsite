import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demetrio Reyes Martinez',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
