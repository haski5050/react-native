import styled from 'styled-components/native'
import { Text } from 'uikit/atoms'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #f2f3f4;
`

export const LogoName = styled(Text).attrs({
  type: 'large',
  weight: 'italic',
})``

export const DirectButton = styled.Image`
  margin-left: auto;
  width: 40px;
  height: 40px;
`
