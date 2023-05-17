'use client'

// React
import { memo, useMemo } from 'react'

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
import { E_APP_STYLE_TYPOGRAPHY } from '@/constants'

// Antd
import { MenuItemType } from 'antd/lib/menu/hooks/useItems'

const PublicHeader = memo(() => {
  // Menu Items
  const menuItems = useMemo((): MenuItemType[] => {
    return [
      { key: 'about', label: 'About' },
      { key: 'out-works', label: 'Our Works' },
      { key: 'services', label: 'Services' },
      { key: 'careers', label: 'Careers' },
      { key: 'blog', label: 'Blog' }
    ]
  }, [])

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
        items={menuItems}
      />

      {/* Get In Touch Button */}
      <StyledButton type='primary'>Get In Touch</StyledButton>
    </StyledHeader>
  )
})

PublicHeader.displayName = 'PublicHeader'

export default PublicHeader
