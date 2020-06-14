import React from 'react';

import { Container, Button, Icon } from './styles';
import Colors from '../../../../constants/Colors';

import { openModalFilter, openModalEvaluate } from '../../../../store/modules/map/actions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const handleFilterModalOpen = () => {
    dispatch(openModalFilter());
  }

  const alertAuthorities = () => {
    Alert.alert(
      'Alerte as autoridades',
      'Deseja realmente alertar as autoridades?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Sim, estou em perigo', onPress: () => Alert.alert('As autoridades e seus familiares foram alertados!') },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <Button color={Colors.tintColor} onPress={() => navigation.navigate('Home')}>
        <Icon name="search" color="#fff" />
      </Button>
      <Button color="#F00">
        <Icon name="alert-triangle" color="#fff" onPress={() => alertAuthorities()} />
      </Button>
      <Button color={Colors.tintColor} onPress={() => handleFilterModalOpen()}>
        <Icon name="sliders" color="#fff" />
      </Button>
    </Container>
  );
}

export default NavBar;