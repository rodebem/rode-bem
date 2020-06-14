import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import {
  Container,
  DrawerBotton
} from './styles';

import Map from './components/Map';
import Details from './components/Details';
import RestaurantDetails from './components/RestaurantDetails';
import NavBar from './components/NavBar';
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

      <NavBar />

      <Details />
      <RestaurantDetails />
    </Container>
  );
}

export default MapPage;