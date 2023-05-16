'use client'

// React
import { memo } from 'react'

// Antd
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'

// Types
import { IBaseConfigProviderProps } from './types'

// Constants
import { E_APP_STYLE_COLORS } from '@/constants'

const BaseStyleProvider = memo(
  ({ children, theme }: IBaseConfigProviderProps) => {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: E_APP_STYLE_COLORS.PRIMARY,
            ...theme?.token
          },
          ...theme
        }}
        locale={enUS}
      >
        {children}
      </ConfigProvider>
    )
  }
)

BaseStyleProvider.displayName = 'BaseStyleProvider'

export default BaseStyleProvider
