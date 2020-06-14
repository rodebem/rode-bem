import React, { useState } from 'react';
import { Slider } from 'react-native';

import {
  Container,
  Title,
  SaveButton
} from './styles';
import Colors from '../../../../../../constants/Colors';

const Content = () => {
  const [street, setStreet] = useState(4);
  const [restaurant, setRestaurant] = useState(2);
  const [post, setPost] = useState(4);

  return (
    <Container>
      <Title>Estradas - {street}</Title>
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

      <Title>Restaurantes - {restaurant}</Title>
      <Slider
        style={{ height: 40, marginBottom: 10, marginTop: 10 }}
        step={1}
        minimumValue={0}
        maximumValue={5}
        thumbTintColor={Colors.backgroundColor}
        minimumTrackTintColor={Colors.backgroundColor}
        value={restaurant}
        onValueChange={value => setRestaurant(value)}
        maximumTrackTintColor="#333"
      />

      <Title>Postos {post}</Title>
      <Slider
        style={{ height: 40, marginBottom: 10, marginTop: 10 }}
        step={1}
        minimumValue={0}
        maximumValue={5}
        thumbTintColor={Colors.backgroundColor}
        minimumTrackTintColor={Colors.backgroundColor}
        value={post}
        onValueChange={value => setPost(value)}
        maximumTrackTintColor="#333"
      />

      <SaveButton icon="sliders" textColor="#fff">Filtrar</SaveButton>
    </Container>
  );
}

export default Content;
