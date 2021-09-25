import React from 'react'
import { UserImage } from '../Stories/styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {
  Button,
  MoreButton,
  Name,
  PostImage,
  PostMenuContainer,
  SaveButton,
  UserPostContainer,
  PostContainer,
} from './styles'

interface PostProps {
  name: string
  avatar: string
  photo: string
}

const Post = ({ name, avatar, photo }: PostProps) => {
  return (
    <PostContainer>
      <UserPostContainer>
        <UserImage
          other
          source={{
            width: 100,
            height: 100,
            uri: avatar,
          }}
        />
        <Name>{name}</Name>
        <MoreButton
          source={{
            width: 100,
            height: 100,
            uri: 'https://img.icons8.com/ios-filled/50/000000/more.png',
          }}
        />
      </UserPostContainer>
      <PostImage
        source={{
          width: wp(100),
          height: 400,
          uri: photo,
        }}
      />
      <PostMenuContainer>
        <Button
          source={{
            width: 100,
            height: 100,
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',
          }}
        />
        <Button
          source={{
            width: 100,
            height: 100,
            uri: 'https://img.icons8.com/ios/50/000000/chat-message--v2.png',
          }}
        />
        <Button
          source={{
            width: 100,
            height: 100,
            uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
          }}
        />
        <SaveButton
          source={{
            width: 100,
            height: 100,
            uri: 'https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png',
          }}
        />
      </PostMenuContainer>
    </PostContainer>
  )
}

export default Post
