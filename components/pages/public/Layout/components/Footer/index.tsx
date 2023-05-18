'use client'

// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Components
import { BaseText } from '@/components/base'
import {
  StyledFooter,
  StyledFooterCompany,
  StyledFooterContactUs,
  StyledFooterJoyStudio
} from './components'
import PublicWrapper from '@/components/pages/public/Wrapper'

// Constants
import {
  E_APP_STYLE_COLORS,
  E_APP_STYLE_TYPOGRAPHY,
  MENU_LIST
} from '@/constants'

// Antd
import { Divider } from 'antd'

const ABOUT_US_ITEMS = [
  {
    // eslint-disable-next-line
    image: require('@/assets/images/map-white.png').default,
    imageWidth: 24.64,
    imageHeight: 21.67,
    label:
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    // eslint-disable-next-line
    image: require('@/assets/images/phone-white.png').default,
    imageWidth: 24.96,
    imageHeight: 25,
    label: '0888-222-3333'
  },
  {
    // eslint-disable-next-line
    image: require('@/assets/images/chat-white.png').default,
    imageWidth: 25,
    imageHeight: 25,
    label: 'joy.studio@gmail.com'
  }
]

const SOCIAL_MEDIA_LIST = [
  {
    // eslint-disable-next-line
    image: require('@/assets/images/facebook.png').default,
    label: 'facebook'
  },
  {
    // eslint-disable-next-line
    image: require('@/assets/images/twitter.png').default,
    label: 'twitter'
  },
  {
    // eslint-disable-next-line
    image: require('@/assets/images/instagram.png').default,
    label: 'instagram.png'
  },
  {
    // eslint-disable-next-line
    image: require('@/assets/images/youtube.png').default,
    label: 'youtube'
  }
]

const PublicFooter = memo(() => {
  return (
    <StyledFooter>
      <PublicWrapper>
        <div className='footer-first'>
          {/* Joy Studio */}
          <StyledFooterJoyStudio>
            <div className='footer-joy-studio-image'>
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
            </div>

            <BaseText
              className='mt-4'
              fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_15}
              fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_400}
            >
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </BaseText>
          </StyledFooterJoyStudio>

          {/* Company */}
          <StyledFooterCompany>
            <BaseText
              fontColor={E_APP_STYLE_COLORS.PRIMARY_DARKEST}
              fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_600}
              fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_18}
              lineHeight={'22px'}
              letterSpacing={'.5px'}
            >
              Company
            </BaseText>

            <ul className='mt-8'>
              {MENU_LIST.map(menu => (
                <li key={menu.key}>{menu.label}</li>
              ))}
            </ul>
          </StyledFooterCompany>

          {/* Contact Us */}
          <StyledFooterContactUs>
            <BaseText
              fontColor={E_APP_STYLE_COLORS.PRIMARY_DARKEST}
              fontWeight={E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_600}
              fontSize={E_APP_STYLE_TYPOGRAPHY.FONT_18}
              lineHeight={'22px'}
              letterSpacing={'.5px'}
              className='mb-8'
            >
              Contact Us
            </BaseText>

            {/* Map */}
            {ABOUT_US_ITEMS.map((item, index) => (
              <div className='footer-contact-us-item' key={index}>
                <Image
                  src={item.image}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  alt={item.label}
                  priority
                />

                <BaseText>{item.label}</BaseText>
              </div>
            ))}
          </StyledFooterContactUs>
        </div>

        <div className='footer-second'>
          <Divider style={{ backgroundColor: '#191D1F' }} />

          <div className='flex justify-between'>
            <BaseText fontColor={'#888888'}>
              © {new Date().getFullYear()} Joy Studio All Rights Reserved.
            </BaseText>

            {/* Icon List */}
            <ul>
              {SOCIAL_MEDIA_LIST.map((socialMedia, index) => (
                <li key={index}>
                  <Image
                    src={socialMedia.image}
                    width={31}
                    height={31}
                    alt={socialMedia.label}
                    priority
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PublicWrapper>
    </StyledFooter>
  )
})

PublicFooter.displayName = 'PublicFooter'

export default PublicFooter
