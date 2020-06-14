import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Input,
  SearchButton
} from './styles';

import Search from '../Search';

const Content = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Preencha as informações!</Title>

      <Input
        icon="map-pin"
        placeholder="Saída"
        value="São Paulo - SP"
      />

      <Input
        icon="map-pin"
        placeholder="Chegada"
        value="Fortaleza - CE"
      />

      <SearchButton onPress={() => navigation.navigate('Map')}>Buscar</SearchButton>
    </Container>
  );
}

export default Content;