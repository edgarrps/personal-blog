import Link from 'next/link'
import Image from 'next/image'
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
    <header className='grid grid-cols-2 pl-10 fixed w-screen mobile:w-screen p-2 font-mono font-extrabold uppercase desktop:text-2xl latop:text-2xl tablet:text-2xl mobile:text-lg text-blue-600 bg-sky-400 shadow-lg'>
      <Link href={'/'}><h1>Personal blog</h1></Link>
      <div className='flex justify-end pr-5 space-x-8'>
        <Link href={'https://instagram.com'}><p><Image src='/images/instagram.svg' width={25} height={25} alt='instagram' /></p></Link>
        <Link href={'https://twitter.com'}><p><Image src='/images/twitter.svg' width={25} height={25} alt='twitter' /></p></Link>
        <Link href={'https://facebook.com'}><p><Image src='/images/facebook.svg' width={25} height={25} alt='facebook' /></p></Link>
      </div>
    </header>
  )

  const footer = (
    <footer className='fixed w-screen p-2 font-bold font-mono text-center bg-sky-400 bottom-0 left-0'>
      <div>
        <p>Project 2023</p>
      </div>
    </footer>
  )

  return (
    <html className='m-0 p-0 h-full' lang='en'>
      <head />
      <body className='m-0 p-0 h-full bg-sky-600'>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
