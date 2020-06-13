import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import MainRoutes from './main/routes';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

export default function ProfileRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{}}
    >
      <Drawer.Screen
        name="Home"
        component={MainRoutes}
        options={{
          tabBarVisible: true
        }}
      />
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{
          tabBarVisible: false
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>
  );
}