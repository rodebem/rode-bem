import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Input,
  SearchButton
} from './styles';

const Content = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Preencha as informações!</Title>

      <Input
        icon="map-pin"
        placeholder="Saída"
      />

      <Input
        icon="map-pin"
        placeholder="Chegada"
      />

      <SearchButton onPress={() => navigation.navigate('Map')}>Buscar</SearchButton>
    </Container>
  );
}

export default Content;