import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const Container = styled.SafeAreaView``

export const ScreenImage = styled.Image`
  width: ${wp(100)}px;
  height: ${hp(100)}px;
`
