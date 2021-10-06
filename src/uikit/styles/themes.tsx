import { DefaultTheme } from 'styled-components'
import colors from './colors'
import { fontWeight, lineHeight, primaryFont, typeScale } from './text'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryFont: typeof primaryFont
    typeScale: typeof typeScale
    lineHeight: typeof lineHeight
    fontWeight: typeof fontWeight
    colors: typeof colors
  }
}

export const defaultTheme: DefaultTheme = {
  primaryFont,
  typeScale,
  lineHeight,
  fontWeight,
  colors,
}
