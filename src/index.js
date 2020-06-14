import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './App';
import { StatusBar } from 'react-native';

import { store, persistor } from './store';

const Index = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default Index;