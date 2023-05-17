// React
import { ComponentProps } from 'react'

// Antd
import { Typography } from 'antd'

// Constants
import { E_APP_STYLE_TYPOGRAPHY, E_APP_STYLE_COLORS } from '@/constants'

const { Text } = Typography

export interface IBaseTextProps extends ComponentProps<typeof Text> {
  fontSize?: E_APP_STYLE_TYPOGRAPHY
  fontColor?: E_APP_STYLE_COLORS
  fontWeight?: E_APP_STYLE_TYPOGRAPHY
}
