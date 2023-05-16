'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormTextAreaProps } from './types'

// Components
import { StyledTextArea } from './components'

const BaseTextArea = memo((props: TBaseFormTextAreaProps) => {
  return <StyledTextArea {...props} />
})

BaseTextArea.displayName = 'BaseTextArea'

export default BaseTextArea
