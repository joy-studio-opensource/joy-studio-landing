'use client'

// React
import { memo } from 'react'

// Components
import { StyledButton } from './components'

// Types
import { TBaseButtonProps } from './types'

const BaseButton = memo((props: TBaseButtonProps) => {
  return <StyledButton {...props} />
})

BaseButton.displayName = 'BaseButton'

export default BaseButton
