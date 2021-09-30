import React from 'react'
import { Container, Button } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Button
        source={{
          uri: 'https://img.icons8.com/ios/50/000000/home--v1.png',
        }}
      />
      <Button
        source={{
          uri: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png',
        }}
      />
      <Button
        source={{
          uri: 'https://img.icons8.com/ios/50/000000/add--v1.png',
        }}
      />
      <Button
        source={{
          uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',
        }}
      />
      <Button
        source={{
          uri: 'https://img.icons8.com/ios/50/000000/user-male-circle.png',
        }}
      />
    </Container>
  )
}

export default Navbar
