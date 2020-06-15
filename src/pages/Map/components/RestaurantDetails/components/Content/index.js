import React, { useState } from 'react';
import { Slider, Alert } from 'react-native';

import {
  Container,
  Image,
  Title,
  Label,
  SaveButton,
  SaveButtonArea,
  Input,
} from './styles';

import { closeModalEvaluate } from '../../../../../../store/modules/map/actions';
import Colors from '../../../../../../constants/Colors';
import restaurante from '../../../../../../../assets/restaurante.jpg';
import { useDispatch } from 'react-redux';

const Content = () => {
  const dispatch = useDispatch();
  const [street, setStreet] = useState(4);

  const handleModalClose = () => {
    dispatch(closeModalEvaluate());
    Alert.alert('Obrigado por sua avaliação', 'Você ganhou 100 pontos');
  }

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

        <SaveButtonArea onPress={() => handleModalClose()}>
          <SaveButton
          icon="star"
          textColor="#fff"
        >
          Avaliar
        </SaveButton>
        </SaveButtonArea>
    </Container>
  );
}

export default Content;
