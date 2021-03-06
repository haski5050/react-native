import styled from 'styled-components/native'
import { Text } from 'uikit/atoms'

export const Container = styled.View`
  margin-bottom: 10px;
`

export const PostContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled(Text).attrs({
  type: 'normal',
})`
  margin-left: 5px;
`

export const MoreButton = styled.Image`
  margin: 0 5px 0 auto;
  width: 40px;
  height: 40px;
`

export const MenuContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const Button = styled.Image`
  margin: 0 5px;
  width: 40px;
  height: 40px;
`

export const SaveButton = styled.Image`
  margin-left: auto;
  width: 40px;
  height: 40px;
`
