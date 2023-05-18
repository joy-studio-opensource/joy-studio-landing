'use client'

// React
import { memo, useState } from 'react'

// Next
import { useServerInsertedHTML } from 'next/navigation'

// Styled
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider
} from 'styled-components'

// Interfaces
import { IBaseStyledThemeProviderProps } from './types'

const BaseStyledThemeProvider = memo(
  ({ children, ...rest }: IBaseStyledThemeProviderProps) => {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
      const styles = styledComponentsStyleSheet.getStyleElement()
      styledComponentsStyleSheet.instance.clearTag()
      return <>{styles}</>
    })

    if (typeof window !== 'undefined')
      return <ThemeProvider {...rest}>{children}</ThemeProvider>

    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <ThemeProvider {...rest}>{children}</ThemeProvider>
      </StyleSheetManager>
    )
  }
)

BaseStyledThemeProvider.displayName = 'BaseStyledThemeProvider'

export default BaseStyledThemeProvider
