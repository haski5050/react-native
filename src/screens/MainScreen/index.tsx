import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Logo, Navbar, Post, Stories } from 'components'
import { Container, ContentContainer } from './styles'
import { HomeSceenNavigationProps } from 'screens/routes'

const MainScreen = () => {
  const navigation = useNavigation<HomeSceenNavigationProps>()

  const photos = [
    'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg',
    'http://www.volynpost.com/img/modules/news/a/2d/89c6db59bcc5faedda072e84c6e432da/cb-yz2dikefvsy.jpg',
    'https://sun9-75.userapi.com/impg/U8wajrd-06zLq6HAIQIp898xJXwia25G00OhsQ/64c4l9t-EAo.jpg?size=442x604&quality=96&sign=bd604db4c3455238b55d7628b807f3e7&type=album',
    'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg',
    'https://i.pinimg.com/originals/9f/be/cd/9fbecdf2cac1f586ba45e81c55cf54a1.jpg',
    'https://vesti.kz/userdata/news/news_94327/crop_b/photo_3169.jpg',
  ]

  const onLogoPress = () => navigation.navigate('Direct', { name: 'some text' })

  return (
    <Container>
      <Logo name="Instagram" onPress={onLogoPress} />
      <ContentContainer>
        <Stories {...{ photos }} />
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
      </ContentContainer>
      <Navbar />
    </Container>
  )
}

export default MainScreen
