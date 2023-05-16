'use client'

// React
import { memo } from 'react'

// Types
import { TBaseColProps } from './types'

// Components
import { StyledCol } from './components'

const BaseCol = memo((props: TBaseColProps) => {
  return <StyledCol {...props} />
})

BaseCol.displayName = 'BaseCol'

export default BaseCol
