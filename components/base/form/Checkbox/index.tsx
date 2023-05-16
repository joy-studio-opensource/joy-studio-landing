'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormCheckboxProps } from './types'

// Components
import { StyledCheckbox } from './components'

const BaseCheckbox = memo((props: TBaseFormCheckboxProps) => {
  return <StyledCheckbox {...props} />
})

BaseCheckbox.displayName = 'BaseCheckbox'

export default BaseCheckbox
