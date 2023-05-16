'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormDatePickerProps } from './types'

// Components
import { StyledDatePicker } from './components'

const BaseFormDatePicker = memo((props: TBaseFormDatePickerProps) => {
  return <StyledDatePicker {...props} />
})

BaseFormDatePicker.displayName = 'BaseFormDatePicker'

export default BaseFormDatePicker
