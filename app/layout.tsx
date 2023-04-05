import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Personal Blog',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <Link href={'/'}><h1>Personal blog</h1></Link>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <p>2023</p>
      </div>
    </footer>
  )

  return (
    <html lang="pt">
      <head/>
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
