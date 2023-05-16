'use client'

// React
import { memo } from 'react'

// Components
import { StyledText } from './components'

// Types
import { TBaseTextProps } from './types'

const BaseText = memo((props: TBaseTextProps) => {
  return <StyledText {...props} />
})

BaseText.displayName = 'BaseText'

export default BaseText
