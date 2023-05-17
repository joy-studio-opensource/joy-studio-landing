// Styled Components
import { DefaultTheme } from 'styled-components'

export enum E_APP_STYLE_TYPOGRAPHY {
  FONT_48 = '48px',
  FONT_38 = '38px',
  FONT_24 = '24px',
  FONT_18 = '18px',
  FONT_15 = '15px',
  FONT_WEIGHT_400 = '400',
  FONT_WEIGHT_500 = '500',
  FONT_WEIGHT_600 = '600',
  FONT_WEIGHT_700 = '700',
  FONT_WEIGHT_800 = '800'
}

export enum E_APP_STYLE_COLORS {
  PRIMARY = '#34E89E',
  PRIMARY_DARKEST = '#18D185',
  SECONDARY = '#0F3443',
  SECONDARY_LIGHTEST = '#18546D',
  GREY_LIGHT = '#f2f2f2',
  GREY = '#666666',
  DARK = '#111111',
  WHITE = '#FFFFFF',
  BLACK = '#000000'
}

export const E_APP_STYLED_THEME: DefaultTheme = {
  colors: {
    PRIMARY: E_APP_STYLE_COLORS.PRIMARY,
    PRIMARY_DARKEST: E_APP_STYLE_COLORS.PRIMARY_DARKEST,
    SECONDARY: E_APP_STYLE_COLORS.SECONDARY,
    SECONDARY_LIGHTEST: E_APP_STYLE_COLORS.SECONDARY_LIGHTEST,
    GREY_LIGHT: E_APP_STYLE_COLORS.GREY_LIGHT,
    GREY: E_APP_STYLE_COLORS.GREY,
    DARK: E_APP_STYLE_COLORS.DARK,
    WHITE: E_APP_STYLE_COLORS.WHITE,
    BLACK: E_APP_STYLE_COLORS.BLACK
  },
  typography: {
    FONT_48: E_APP_STYLE_TYPOGRAPHY.FONT_48,
    FONT_38: E_APP_STYLE_TYPOGRAPHY.FONT_38,
    FONT_24: E_APP_STYLE_TYPOGRAPHY.FONT_24,
    FONT_18: E_APP_STYLE_TYPOGRAPHY.FONT_18,
    FONT_15: E_APP_STYLE_TYPOGRAPHY.FONT_15,
    FONT_WEIGHT_400: E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_400,
    FONT_WEIGHT_500: E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_500,
    FONT_WEIGHT_600: E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_600,
    FONT_WEIGHT_700: E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_700,
    FONT_WEIGHT_800: E_APP_STYLE_TYPOGRAPHY.FONT_WEIGHT_800
  }
}
