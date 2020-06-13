import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './drawer.menu';
import SignIn from '../pages/SignIn';

export default function CreateRouter() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
