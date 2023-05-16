'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormInputProps } from './types'

// Components
import { StyledInput } from './components'

const BaseInput = memo((props: TBaseFormInputProps) => {
  return <StyledInput {...props} />
})

BaseInput.displayName = 'BaseInput'

export default BaseInput
