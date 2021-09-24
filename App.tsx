/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Logo from './app/components/Logo';
import Navbar from './app/components/Navbar';
import Post from './app/components/Post';
import Stories from './app/components/Stories';

const App = () => {
  return (
    <Container>
      <Logo>Instagram</Logo>
      <ScrollView>
        <Stories />
        <Post>gordonius</Post>
        <Post>ricardo</Post>
      </ScrollView>
      <Navbar />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex-direction: column;
`;

export default App;
