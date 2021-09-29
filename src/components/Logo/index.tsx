import React from 'react'
import { Container, DirectButton,  LogoName } from './styles'

interface LogoProps {
  name: string
}

const Logo = ({ name }: LogoProps) => {
  return (
    <Container>
      <LogoName>{name}</LogoName>
      <DirectButton
        source={{
          width: 100,
          height: 100,
          uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
        }}
      />
    </Container>
  )
}

export default Logo
