import React, {FC} from 'react';
import styled from 'styled-components/native';

const Logo: FC = ({children}) => {
  return (
    <LogoArea>
      <LogoName>{children}</LogoName>
      <DirectButton />
    </LogoArea>
  );
};

export default Logo;

const LogoArea = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const LogoName = styled.Text`
  font-size: 40px;
  margin-right: 180px;
  font-weight: 300;
  font-family: 'cursive';
`;
const DirectButton = styled.Image.attrs({
  source: {
    width: 100,
    height: 100,
    uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png',
  },
})`
  width: 40px;
  height: 40px;
`;
