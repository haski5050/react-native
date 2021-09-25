/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Logo, Navbar, Post, Stories } from './src/components/index'

const App = () => {
  return (
    <SafeAreaView>
      <Logo>Instagram</Logo>
      <ScrollView>
        <Stories />
        <Post
          name="gordonius"
          avatar="https://gordonua.com/img/article/15526/86_tn.jpg?v1620816246"
          photo="https://m.day.kyiv.ua/sites/default/files/main/articles/24022017/30gordon.jpg"
        />
        <Post
          name="ricardo"
          avatar="http://images.shoutwiki.com/ytp/9/97/%D0%A0%D0%B8%D0%BA%D0%B0%D1%80%D0%B4%D0%BE_%D0%9C%D0%B8%D0%BB%D0%BE%D1%81.jpg"
          photo="https://i.uaportal.com/2019/4/16/22.jpg"
        />
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  )
}

export default App
