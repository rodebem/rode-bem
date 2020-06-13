import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import {
  Container,
  DrawerBotton,
  FilterButton
} from './styles';

import Map from './components/Map';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const MapPage = () => {
  const navigation = useNavigation();

  const handleToogleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Container>
      <Map />
      <DrawerBotton onPress={() => handleToogleDrawer()}>
        <Icon name="menu" color={Colors.backgroundColor} size={25} />
      </DrawerBotton>

      <FilterButton icon="sliders">Filtrar</FilterButton>
    </Container>
  );
}

export default MapPage;

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: 200,
    backgroundColor: '#fff'
  },
});