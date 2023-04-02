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
        <h1>Personal blog</h1>
        <p>Welcome!</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <p>Developed by Edgar Santos</p>
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
