import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import logo from '../../../../assets/profile.jpg';

import {
  Container,
  Image,
  User,
  Name,
  Points,
  Label,
  Value
} from './styles';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView style={{ flex: 1 }} {...props}>
      <Container>
        <User>
          <Image source={logo} />
          <Name>Antônio José</Name>
        </User>
        <Points>
          <Value>9999</Value>
          <Label>Pontos</Label>
        </Points>
      </Container>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => navigation.navigate('SignIn')}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;