// React
import { memo } from 'react'

// Components
import { StyledHeroWrapper, StyledHeroButton } from './components'
import { BaseText } from '@/components/base'

// Constants
import { E_APP_STYLE_TYPOGRAPHY } from '@/constants'

const PublicHero = memo(() => {
  return (
    <StyledHeroWrapper>
      <div className='hero-container'>
        <div className='item'>
          {/* Introduction */}
          <BaseText
            fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_48}
            fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_700}
            lineHeight={'58.09px'}
          >
            Joy Studio. Custom Software <br />
            Development Based In Bandung
          </BaseText>

          {/* Descriptions */}
          <BaseText
            fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_18}
            lineHeight={'21.78px'}
          >
            Welcome to Joy Studio website, where we provide top-notch software
            solutions to businesses of all sizes. Our experienced team of
            software developers, designers, and project managers work together
            to provide custom software solutions tailored to your specific
            needs.
          </BaseText>

          {/* Buttons */}
          <div className='flex items-center justify-center gap-5'>
            <StyledHeroButton type='primary'>More About Us</StyledHeroButton>
            <StyledHeroButton ghost>Getting Started</StyledHeroButton>
          </div>
        </div>
      </div>
    </StyledHeroWrapper>
  )
})

PublicHero.displayName = 'PublicHero'

export default PublicHero
