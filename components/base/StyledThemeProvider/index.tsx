'use client'

// React
import { memo } from 'react'

// Styled
import { ThemeProvider } from 'styled-components'

// Interfaces
import { IBaseStyledThemeProviderProps } from './types'

const BaseStyledThemeProvider = memo(
  ({ children, ...rest }: IBaseStyledThemeProviderProps) => {
    return <ThemeProvider {...rest}>{children}</ThemeProvider>
  }
)

BaseStyledThemeProvider.displayName = 'BaseStyledThemeProvider'

export default BaseStyledThemeProvider
