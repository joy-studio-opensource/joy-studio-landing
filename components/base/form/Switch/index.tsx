'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormSwitchProps } from './types'

// Components
import { StyledSwitch } from './components'

const BaseSwitch = memo((props: TBaseFormSwitchProps) => {
  return <StyledSwitch defaultChecked {...props} />
})

BaseSwitch.displayName = 'BaseSwitch'

export default BaseSwitch
