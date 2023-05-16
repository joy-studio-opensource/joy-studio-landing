// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PRIMARY: string
      PRIMARY_DARKEST: string
      SECONDARY: string
      SECONDARY_LIGHTEST: string
      GREY_LIGHT: string
      GREY: string
      DARK: string
      WHITE: string
      BLACK: string
    }
    typography: {
      FONT_48: string
      FONT_38: string
      FONT_24: string
      FONT_18: string
      FONT_15: string
      FONT_WEIGHT_800: string
    }
  }
}
