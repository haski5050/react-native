import styled from 'styled-components/native';
import React from 'react';

const Stories = () => {
  return (
    <Area horizontal showsHorizontalScrollIndicator={false}>
      <UserImage />
      <UserImage />
      <UserImage />
      <UserImage />
      <UserImage />
      <UserImage />
    </Area>
  );
};

export default Stories;

const Area = styled.ScrollView`
  margin: 7px;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const UserImage = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/office/40/000000/user.png',
  },
})<{other?: boolean}>`
  width: ${({other}) => (other ? 55 : 80)}px;
  height: ${({other}) => (other ? 55 : 80)}px;
  border-radius: 50px;
  background-color: gray;
  margin: 0px 4px 4px 10px;
`;
