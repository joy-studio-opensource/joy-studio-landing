'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormSelectProps } from './types'

// Components
import { StyledSelect } from './components'

const BaseSelect = memo((props: TBaseFormSelectProps) => {
  return (
    <StyledSelect
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      {...props}
    />
  )
})

BaseSelect.displayName = 'BaseSelect'

export default BaseSelect
