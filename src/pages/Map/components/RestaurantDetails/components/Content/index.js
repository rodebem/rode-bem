import React, { useState } from 'react';
import { Slider } from 'react-native';

import {
  Container,
  Image,
  Title,
  Label,
  SaveButton,
  Input,
} from './styles';
import Colors from '../../../../../../constants/Colors';
import restaurante from '../../../../../../../assets/restaurante.jpg';

const Content = ({ onClick }) => {
  const [street, setStreet] = useState(4);
  const [restaurant, setRestaurant] = useState(2);
  const [post, setPost] = useState(4);

  return (
    <Container>

      <Image source={restaurante} />

      <Title>Restaurante da Luzia</Title>
      <Title>Balsas - MA</Title>
      <Title>BR 230</Title>

      <Label>Avaliação - {street}</Label>
      <Slider
        style={{ height: 40, marginBottom: 10, marginTop: 10 }}
        step={1}
        minimumValue={0}
        maximumValue={5}
        thumbTintColor={Colors.backgroundColor}
        minimumTrackTintColor={Colors.backgroundColor}
        value={street}
        onValueChange={value => setStreet(value)}
        maximumTrackTintColor="#333"
      />
      
      <Input placeholder="Observações" icon="mic" />

      <SaveButton icon="star" textColor="#fff" onPress={() => onClick()}>Avaliar</SaveButton>
    </Container>
  );
}

export default Content;
