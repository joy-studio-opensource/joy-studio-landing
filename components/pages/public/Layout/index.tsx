'use client'

// React
import { memo } from 'react'

// Antd
import { Layout } from 'antd'

// Components
import { Header, StyledContent, StyledFooter } from './components'

// Types
import { TPublicLayoutProps } from './types'

const PublicLayout = memo(({ children }: TPublicLayoutProps) => {
  return (
    <Layout>
      {/*  Header */}
      <Header />

      {/* Content */}
      <StyledContent>{children}</StyledContent>

      {/* Footer */}
      <StyledFooter>Ant Design ©2023 Created by Ant UED</StyledFooter>
    </Layout>
  )
})

PublicLayout.displayName = 'PublicLayout'

export default PublicLayout
