import type { TextProps as RNRTextProps, TextStyle } from 'react-native'
import colors from './colors'

export type Color = keyof typeof colors

export type FontWeight = 'regular' | 'medium' | 'bold' | 'italic'

export type Text = 'small' | 'normal' | 'large'

export interface TextProps extends Pick<RNRTextProps, 'numberOfLines'> {
  type: Text
  color?: Color
  weight?: FontWeight
  align?: TextStyle['textAlign']
  opacity?: number
}
