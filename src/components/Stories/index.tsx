import React from 'react'
import { NewsContainer, UserImage } from './styles'

const Stories = () => {
  const photos = [
    'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
    'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg',
    'http://www.volynpost.com/img/modules/news/a/2d/89c6db59bcc5faedda072e84c6e432da/cb-yz2dikefvsy.jpg',
    'https://sun9-75.userapi.com/impg/U8wajrd-06zLq6HAIQIp898xJXwia25G00OhsQ/64c4l9t-EAo.jpg?size=442x604&quality=96&sign=bd604db4c3455238b55d7628b807f3e7&type=album',
    'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg',
    'https://i.pinimg.com/originals/9f/be/cd/9fbecdf2cac1f586ba45e81c55cf54a1.jpg',
    'https://vesti.kz/userdata/news/news_94327/crop_b/photo_3169.jpg',
  ]
  return (
    <NewsContainer horizontal showsHorizontalScrollIndicator={false}>
      {photos.map((photo, index) => {
        return (
          <UserImage
            key={index}
            source={{
              width: 100,
              height: 100,
              uri: photo,
            }}
          />
        )
      })}
    </NewsContainer>
  )
}

export default Stories
