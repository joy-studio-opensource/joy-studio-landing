'use client'

// React
import { memo } from 'react'

// Antd
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer
} from '@ant-design/cssinjs'

// Types
import { IBaseStyleProviderProps } from './types'

const BaseStyleProvider = memo(({ children }: IBaseStyleProviderProps) => {
  return (
    <StyleProvider
      hashPriority='high'
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      {children}
    </StyleProvider>
  )
})

BaseStyleProvider.displayName = 'BaseStyleProvider'

export default BaseStyleProvider
