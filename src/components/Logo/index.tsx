import React, { FC } from 'react'
import { DirectButton, LogoContainer, LogoName } from './styles'

const Logo: FC = ({ children }) => {
  return (
    <LogoContainer>
      <LogoName>{children}</LogoName>
      <DirectButton
        source={{
          width: 100,
          height: 100,
          uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
        }}
      />
    </LogoContainer>
  )
}

export default Logo
