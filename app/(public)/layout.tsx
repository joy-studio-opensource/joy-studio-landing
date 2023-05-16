// Styles
import '@/assets/styles/globals.scss'

// React
import { ReactNode } from 'react'

// Next
import { Metadata } from 'next'

// Headers
export const metadata: Metadata = {
  title: 'Joy Studio',
  description: 'Joy Studio - Ease your life with us'
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Public Here</h1>
      {children}
    </>
  )
}
