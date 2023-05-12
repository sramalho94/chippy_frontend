import NavBar from '../components/NavBar'
import './globals.css'

export const metadata = {
  title: 'The Magnificent Chippy',
  description: 'The Greatest Snack Finder App out there'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
