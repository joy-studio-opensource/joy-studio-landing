// React
import { ReactNode } from 'react'

// Store
import ReduxProvider from '@/store/ReduxProvider'

// Next
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Components
import {
  BaseStyleProvider,
  BaseConfigProvider,
  BaseStyledThemeProvider
} from '@/components/base'

// Constants
import { E_APP_STYLED_THEME } from '@/constants'

// Styles
import '@/assets/styles/globals.scss'

// Headers
export const metadata: Metadata = {
  title: 'Joy Studio',
  description: 'Welcome to Joy Studio, ease your life'
}

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ReduxProvider>
          <BaseStyledThemeProvider theme={E_APP_STYLED_THEME}>
            <BaseStyleProvider>
              <BaseConfigProvider>{children}</BaseConfigProvider>
            </BaseStyleProvider>
          </BaseStyledThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
