// Styles
import '@/assets/styles/globals.scss'

// React
import { ReactNode } from 'react'

// Next
import { Metadata } from 'next'

// Components
import { PublicLayout as CustomPublicLayout } from '@/components/pages/public'

// Headers
export const metadata: Metadata = {
  title: 'Joy Studio',
  description: 'Joy Studio - Ease your life with us'
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <CustomPublicLayout>{children}</CustomPublicLayout>
}
