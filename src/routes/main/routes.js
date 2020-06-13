import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../../pages/Home';
import Map from '../../pages/Map';

export default function ProfileRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{}}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}