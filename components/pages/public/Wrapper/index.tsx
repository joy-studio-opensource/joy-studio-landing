'use client'

// React
import { memo } from 'react'

// Components
import { StyledWrapper } from './components'

// Types
import { TPublicWrapperProps } from './types'

const PublicWrapper = memo(({ children }: TPublicWrapperProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
})

PublicWrapper.displayName = 'PublicWrapper'

export default PublicWrapper
