import styled from 'styled-components/native'
import {
  fontWeight,
  lineHeight,
  primaryFont,
  typeScale,
} from 'uikit/styles/text'
import { TextProps } from 'uikit/styles/types'

export const BaseText = styled.Text<TextProps>`
  color: ${({ theme, color }) => theme.colors[color || 'black']};
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ weight }) => primaryFont[weight || 'regular']};
  font-weight: ${({ weight }) => fontWeight[weight || 'regular']};
  font-size: ${({ type }) => typeScale[type]};
  line-height: ${({ type }) => lineHeight[type]};
  opacity: ${({ opacity }) => opacity || 1.0};
`
