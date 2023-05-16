'use client'

// React
import { memo } from 'react'

// Components
import { StyledTitle } from './components'

// Types
import { TBaseTitleProps } from './types'

const BaseTitle = memo((props: TBaseTitleProps) => {
  return <StyledTitle {...props} />
})

BaseTitle.displayName = 'BaseTitle'

export default BaseTitle
