'use client'

// React
import { memo } from 'react'

// Components
import { StyledText } from './components'

// Types
import { IBaseTextProps } from './types'

const BaseText = memo((props: IBaseTextProps) => {
  return <StyledText {...props} />
})

BaseText.displayName = 'BaseText'

export default BaseText
