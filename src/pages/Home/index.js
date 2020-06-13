import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

import {
  Container,
  Header,
  Title,
  TitleIcon,
  TitleText,
  DrawerButton,
  DrawerButtonIcon,
  End
} from './styles';

import Content from './components/Content';

const Home = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const navigation = useNavigation();


  const handleToogleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Container>
      <Header>
        <DrawerButton onPress={() => handleToogleDrawer()}>
          <DrawerButtonIcon />
        </DrawerButton>
        <Title>
          <TitleIcon />
          <TitleText>Roteirizador</TitleText>
        </Title>
        <End />
      </Header>

      <Content/>
    </Container>
  );
}

export default Home;
