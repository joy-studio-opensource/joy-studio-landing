'use client'

// React
import { memo } from 'react'

// Types
import { TBaseRowProps } from './types'

// Components
import { StyledRow } from './components'

const BaseRow = memo((props: TBaseRowProps) => {
  return <StyledRow {...props} />
})

BaseRow.displayName = 'BaseRow'

export default BaseRow
