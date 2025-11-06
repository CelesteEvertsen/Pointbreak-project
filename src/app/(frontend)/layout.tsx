import React from 'react'
import './styles.css'
import Navigation from "@/app/components/Navigation/Navigation"
import Footer from "@/app/components/Footer/Footer"

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navigation/>
        <main>{children}</main>

        <footer>
           <Footer/>
        </footer>
      </body>
    </html>
  )
}
