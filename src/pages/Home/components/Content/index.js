import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Input,
  SearchButton
} from './styles';

const Content = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState('São Paulo - SP');
  const [destination, setDestination] = useState('');

  return (
    <Container>
      <Title>Preencha as informações!</Title>

      <Input
        icon="map-pin"
        placeholder="Saída"
        value={origin}
        onChangeText={setOrigin}
      />

      <Input
        icon="map-pin"
        placeholder="Chegada"
        value={destination}
        onChangeText={setDestination}
      />

      <SearchButton onPress={() => navigation.navigate('Map')}>Buscar</SearchButton>
    </Container>
  );
}

export default Content;