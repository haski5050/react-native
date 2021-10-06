import { FontWeight, Text } from './types'

export const fontWeight: Record<FontWeight, string> = {
  regular: '400',
  medium: '500',
  bold: '800',
  italic: '400',
}

export const primaryFont: Record<FontWeight, string> = {
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
  italic: 'cursive',
}

export const typeScale: Record<Text, string> = {
  small: '15px',
  normal: '21px',
  large: '29px',
}

export const lineHeight: Record<Text, string> = {
  small: '17px',
  normal: '23px',
  large: '31px',
}
