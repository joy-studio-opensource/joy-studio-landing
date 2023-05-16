// React
import { ReactNode } from 'react'

// Antd
import { ThemeConfig } from 'antd'

export interface IBaseConfigProviderProps {
  children: ReactNode
  theme?: ThemeConfig
}
