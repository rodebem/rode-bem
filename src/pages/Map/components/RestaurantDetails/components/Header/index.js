import React from 'react';
import { View } from 'react-native';

import {
  Container,
  CloseButton,
  CloseButtonIcon,
  Title,
  TitleIcon,
  TitleText,
  End
} from './styles';

const Header = ({ onClick }) => {
  return (
    <Container>
      <CloseButton onPress={() => onClick()}>
        <CloseButtonIcon />
      </CloseButton>
      <Title>
        <TitleText>Avaliação</TitleText>
      </Title>
      <End />
    </Container>
  );
}

export default Header;
