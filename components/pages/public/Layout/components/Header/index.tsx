'use client'

// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Components
import {
  StyledHeader,
  StyledImageWrapper,
  StyledMenu,
  StyledButton
} from './components'
import { BaseText } from '@/components/base'

// Constants
import { E_APP_STYLE_TYPOGRAPHY, MENU_LIST } from '@/constants'

const PublicHeader = memo(() => {
  return (
    <StyledHeader>
      {/* Logo */}
      <StyledImageWrapper>
        <Image
          // eslint-disable-next-line
          src={require('@/assets/images/joy-studio.png').default}
          width={35.56}
          height={35.55}
          alt={'joy-studio'}
          priority
        />
        <BaseText
          fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_24}
          fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_800}
        >
          Joy Studio
        </BaseText>
      </StyledImageWrapper>

      {/* Menu */}
      <StyledMenu
        mode='horizontal'
        defaultSelectedKeys={['about']}
        items={MENU_LIST}
      />

      {/* Get In Touch Button */}
      <StyledButton type='primary'>Get In Touch</StyledButton>
    </StyledHeader>
  )
})

PublicHeader.displayName = 'PublicHeader'

export default PublicHeader
