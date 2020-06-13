import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import App from './App';
import { StatusBar } from 'react-native';

const Index = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <App />
    </NavigationContainer>
  );
}

export default Index;