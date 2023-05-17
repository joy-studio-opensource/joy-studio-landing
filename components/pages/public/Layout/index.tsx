'use client'

// React
import { memo } from 'react'

// Antd
import { Layout } from 'antd'

// Components
import { PublicHeader, PublicFooter, StyledContent } from './components'

// Types
import { TPublicLayoutProps } from './types'

const PublicLayout = memo(({ children }: TPublicLayoutProps) => {
  return (
    <Layout>
      {/*  Header */}
      <PublicHeader />

      {/* Content */}
      <StyledContent>{children}</StyledContent>

      {/* Footer */}
      <PublicFooter />
    </Layout>
  )
})

PublicLayout.displayName = 'PublicLayout'

export default PublicLayout
