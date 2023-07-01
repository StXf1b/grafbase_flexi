import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"


export const metadata = {
  title: 'Flexi',
  description: 'Showcase and discover creative work on the world\'s leading online platform for creative industries.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
