'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormInputPasswordProps } from './types'

// Components
import { StyledInputPassword } from './components'

const BaseInputPassword = memo((props: TBaseFormInputPasswordProps) => {
  return <StyledInputPassword {...props} />
})

BaseInputPassword.displayName = 'BaseInputPassword'

export default BaseInputPassword
