import { MainNav } from './components/site-header'
import './globals.css'

import clsx from 'clsx'
import { Poppins } from 'next/font/google'
import { Providers } from './components/providers'

export const metadata = {
  title: 'ActivityStreak App',
  description: 'Something every day.',
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '400', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(poppins.variable)}>
        <Providers>
          <MainNav title={metadata.title} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
