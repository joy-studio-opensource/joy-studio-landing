'use client'

// React
import { memo } from 'react'

// Components
import { StyledCard } from './components'

// Types
import { TBaseCardProps } from './types'

const BaseCard = memo((props: TBaseCardProps) => {
  return <StyledCard {...props} />
})

BaseCard.displayName = 'BaseCard'

export default BaseCard
