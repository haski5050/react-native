import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Container, ScreenImage } from './styles'
import { DirectScreenRouteProp } from 'screens/routes'

const DirectScreen = () => {
  const {
    params: { name },
  } = useRoute<DirectScreenRouteProp>()
  console.log(name)
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
