import styled from 'styled-components/native';
import React from 'react';

const Navbar = () => {
  return (
    <Area>
      <Button
        source={{
          width: 100,
          height: 100,
          uri: 'https://img.icons8.com/ios/50/000000/home--v1.png',
        }}
      />
      <Button
        source={{
          width: 100,
          height: 100,
          uri: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png',
        }}
      />
      <Button
        source={{
          width: 100,
          height: 100,
          uri: 'https://img.icons8.com/ios/50/000000/add--v1.png',
        }}
      />
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
          uri: 'https://img.icons8.com/ios/50/000000/user-male-circle.png',
        }}
      />
    </Area>
  );
};

export default Navbar;

const Area = styled.View`
  flex-direction: row;
  margin-top: auto;
  justify-content: space-between;
  border-top-color: black;
  border-top-width: 1px;
`;
const Button = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 5px 0 5px;
`;
