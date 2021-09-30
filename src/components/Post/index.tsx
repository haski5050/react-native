import React from 'react'
import { Image } from 'react-native'
import { UserImage } from 'components/Stories/styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {
  Button,
  MoreButton,
  Name,
  MenuContainer,
  SaveButton,
  PostContainer,
  Container,
} from './styles'

interface PostProps {
  name: string
  avatar: string
  photo: string
}

const Post = ({ name, avatar, photo }: PostProps) => {
  return (
    <Container>
      <PostContainer>
        <UserImage
          other
          source={{
            uri: avatar,
          }}
        />
        <Name>{name}</Name>
        <MoreButton
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/more.png',
          }}
        />
      </PostContainer>
      <Image
        source={{
          width: wp(100),
          height: 400,
          uri: photo,
        }}
      />
      <MenuContainer>
        <Button
          source={{
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',
          }}
        />
        <Button
          source={{
            uri: 'https://img.icons8.com/ios/50/000000/chat-message--v2.png',
          }}
        />
        <Button
          source={{
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
          }}
        />
        <SaveButton
          source={{
            uri: 'https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png',
          }}
        />
      </MenuContainer>
    </Container>
  )
}

export default Post
