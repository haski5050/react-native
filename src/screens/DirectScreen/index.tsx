import React from 'react'
import { Container, ScreenImage } from './styles'

const DirectScreen = () => {
  return (
    <Container>
      <ScreenImage
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg',
        }}
      />
    </Container>
  )
}

export default DirectScreen
