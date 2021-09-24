import React, {FC} from 'react';
import styled from 'styled-components/native';
import {UserImage} from './Stories';

const Post: FC = ({children}) => {
  return (
    <PostArea>
      <UserPost>
        <UserImage other />
        <Name>{children}</Name>
        <MoreButton />
      </UserPost>
      <PostImage />
      <PostMenu>
        <LikeButton />
        <CommentButton />
        <ShareButton />
        <SaveButton />
      </PostMenu>
    </PostArea>
  );
};

export default Post;

const PostArea = styled.View`
  flex-direction: column;
`;
const UserPost = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Name = styled.Text`
  font-size: 25px;
  margin-left: 5px;
`;
const MoreButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/ios-filled/50/000000/more.png',
  },
})`
  width: 55px;
  height: 55px;
  margin: 0 5px 0 auto;
`;
const PostImage = styled.Image.attrs({
  source: {
    with: 100,
    height: 400,
    uri: 'https://m.day.kyiv.ua/sites/default/files/main/articles/24022017/30gordon.jpg',
  },
})`
  margin: 0px 5px 0 5px;
`;
const PostMenu = styled.View.attrs({})`
  flex-direction: row;
`;
const LikeButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',
  },
})`
  width: 55px;
  height: 55px;
  margin: 0 5px 0 5px;
`;
const CommentButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/ios/50/000000/chat-message--v2.png',
  },
})`
  width: 55px;
  height: 55px;
  margin: 0 5px 0 5px;
`;
const ShareButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
  },
})`
  width: 55px;
  height: 55px;
`;
const SaveButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png',
  },
})`
  width: 55px;
  height: 55px;
  margin-left: auto;
`;
