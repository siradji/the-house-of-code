import './globals.css'
import { Numans } from 'next/font/google'
import {Metadata} from "next";

const inter = Numans({ subsets: ['latin'], weight: '400'})

export const metadata:Metadata = {
  title: 'The House Of Code - Complete software engineering solution.',
  description: 'Welcome to The House Of Code, a leading nearshore web development and brand identity agency serving governments and government-related projects. We provide innovative and secure digital solutions, collaborating closely with clients to drive growth and establish strong brand identities. Contact us to shape the future of exceptional digital experiences for governments and unlock your organization\'s full potential.',
  keywords: 'web design, software developer, software consultant, nearshore web development, brand identity agency, government projects, innovative digital solutions, secure websites and applications, collaboration, strong brand identities, exceptional digital experiences, unlock organization\'s potential',
  robots: 'follow,index',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white'}>{children}</body>
    </html>
  )
}
