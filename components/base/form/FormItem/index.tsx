'use client'

// React
import { memo } from 'react'

// Types
import { TBaseFormItemProps } from './types'

// Components
import { StyledFormItem } from './components'

const BaseFormItem = memo((props: TBaseFormItemProps) => {
  return <StyledFormItem {...props} />
})

BaseFormItem.displayName = 'BaseFormItem'

export default BaseFormItem
