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
              uri: photo,
            }}
          />
        )
      })}
    </Container>
  )
}

export default Stories
