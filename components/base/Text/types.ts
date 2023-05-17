// React
import { ComponentProps } from 'react'

// Antd
import { Typography } from 'antd'

// Constants
import { E_APP_STYLE_TYPOGRAPHY, E_APP_STYLE_COLORS } from '@/constants'

const { Text } = Typography

export interface IBaseTextProps extends ComponentProps<typeof Text> {
  fontSize?: E_APP_STYLE_TYPOGRAPHY
  // TODO: Remote '#888888' after design system updated
  fontColor?: E_APP_STYLE_COLORS | '#888888'
  fontWeight?: E_APP_STYLE_TYPOGRAPHY
  lineHeight?: string
  letterSpacing?: string
}
