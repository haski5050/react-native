import React from 'react'
import { Container, UserImage } from './styles'

interface StoriesProps {
  photos: string[]
}

const Stories = ({ photos }: StoriesProps) => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {photos.map((photo, index) => {
        return (
          <UserImage
            key={index}
            source={{
              width: 100,
              height: 100,
              uri: photo,
            }}
          />
        )
      })}
    </Container>
  )
}

export default Stories
