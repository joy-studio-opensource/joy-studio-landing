'use client'

// Styled
import styled from 'styled-components'

// Antd
import { Typography } from 'antd'

// Types
import { IBaseTextProps } from '../../types'

// Constants
import { E_APP_STYLE_TYPOGRAPHY } from '@/constants'

// Lodash
import omit from 'lodash.omit'

// Text
const { Text } = Typography

export const StyledText = styled((props: IBaseTextProps) => (
  <Text {...omit(props, ['fontSize', 'fontColor', 'fontWeight'])} />
))<IBaseTextProps>`
  color: ${props => props?.fontColor || 'white'} !important;
  font-size: ${props =>
    props?.fontSize || E_APP_STYLE_TYPOGRAPHY.FONT_15} !important;
  font-weight: ${props => props?.fontWeight || 400} !important;
`
