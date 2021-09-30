import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, DirectButton, LogoName } from './styles'

interface LogoProps {
  name: string
  onPress?: () => void
}

const Logo = ({ name, onPress }: LogoProps) => {
  return (
    <Container>
      <LogoName>{name}</LogoName>
      <TouchableOpacity {...{ onPress }}>
        <DirectButton
          source={{
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
          }}
        />
      </TouchableOpacity>
    </Container>
  )
}

export default Logo
