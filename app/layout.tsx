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
        <Link href={'/'}><h1 className='flex justify-center fixed w-screen p-2 font-mono font-extrabold uppercase text-2xl text-blue-600 bg-sky-400'>Personal blog</h1></Link>
      </div>
    </header>
  )

  const footer = (
    <footer className='flex justify-center p-2 font-bold font-mono bg-sky-400'>
      <div>
        <p>Project 2023</p>
      </div>
    </footer>
  )

  return (
    <html lang="pt">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
