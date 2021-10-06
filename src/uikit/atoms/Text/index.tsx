import React, { FC } from 'react'
import type { TextProps } from 'uikit/styles/types'
import { BaseText } from './styles'

const Text: FC<TextProps> = ({ children, ...props }) => {
  return <BaseText {...props}>{children}</BaseText>
}

export default Text
