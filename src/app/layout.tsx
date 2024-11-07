import './globals.css'
import { Bebas_Neue, Nunito_Sans } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/assets/PageThread.png" />
        <link rel="preload" as="video" href="/assets/CrdxFinalAnimVideo.mp4" />
      </head>
      <body className={`${nunitoSans.className} safari-fix`}>{children}</body>
    </html>
  )
}
