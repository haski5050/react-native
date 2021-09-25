import styled from 'styled-components/native'

export const NewsContainer = styled.ScrollView`
  margin: 7px;
  border-bottom-color: black;
  border-bottom-width: 1px;
`

export const UserImage = styled.Image<{ other?: boolean }>`
  width: ${({ other }) => (other ? 55 : 80)}px;
  height: ${({ other }) => (other ? 55 : 80)}px;
  border-radius: 50px;
  background-color: gray;
  margin: 0px 4px 4px 10px;
`
