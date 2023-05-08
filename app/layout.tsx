import Navbar from '../components/Navbar'
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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
