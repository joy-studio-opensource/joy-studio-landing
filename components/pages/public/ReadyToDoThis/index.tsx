'use client'

// React
import { memo } from 'react'

// Components
import { StyledReadyToDoThis, StyledButton } from './components'
import PublicWrapper from '@/components/pages/public/Wrapper'
import { BaseText } from '@/components/base'

// Constants
import { E_APP_STYLE_TYPOGRAPHY } from '@/constants'

const PublicReadyToDoThis = memo(() => {
  return (
    <PublicWrapper>
      <StyledReadyToDoThis>
        <div className='flex flex-col items-center justify-center gap-5 mb-4'>
          <BaseText
            fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_24}
            fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_500}
            lineHeight={'29.05px'}
          >
            Ready to do this?
          </BaseText>

          <BaseText
            fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_48}
            fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_700}
            lineHeight={'29.05px'}
          >
            {`Let's start a new project together!`}
          </BaseText>
        </div>

        <StyledButton>Request a Proposal</StyledButton>
      </StyledReadyToDoThis>
    </PublicWrapper>
  )
})

PublicReadyToDoThis.displayName = 'PublicReadyToDoThis'

export default PublicReadyToDoThis
