import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import MainRoutes from './main/routes';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

import CustomDrawerContent from './components/CustomDrawerContent';

export default function ProfileRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) =>
        <CustomDrawerContent {...props} />
      }
    >
      <Drawer.Screen
        name="Home"
        component={MainRoutes}
        options={{
          drawerLabel: "Roterizador",
          tabBarVisible: true
        }}
      />
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{
          drawerLabel: "Mapa"
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Meu Perfil"
        }}
      />
    </Drawer.Navigator>
  );
}