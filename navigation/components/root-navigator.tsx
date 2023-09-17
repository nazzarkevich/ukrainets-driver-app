import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Dimensions } from 'react-native';

import {
  ClientsScreen,
  HomeScreen,
  JourneysScreen,
  NotFoundScreen,
  ParcelsScreen,
} from '@screens/';
import { RootStackParams } from '@type/';

const RootDrawer = createDrawerNavigator<RootStackParams>();

export function RootNavigator() {
  const { width, height } = Dimensions.get('window');
  const aspectRation = height / width;
  const isTablet = aspectRation < 1.6;
  /*
    TODO: Screens to create:

    Поїздки -> Journeys
    Посилки -> Parcels
    Клієнти -> Clients
    Перевізники -> Drivers
    Автомобілі -> Vans
               -> Login
  */

  return (
    <RootDrawer.Navigator
      screenOptions={{
        drawerType: isTablet ? 'permanent' : 'slide',
        headerShown: !isTablet,
        drawerStyle: { maxWidth: 200 },
      }}>
      <RootDrawer.Screen name="Home" component={HomeScreen} />
      <RootDrawer.Screen name="Parcels" component={ParcelsScreen} />
      <RootDrawer.Screen name="Clients" component={ClientsScreen} />
      <RootDrawer.Screen name="Journeys" component={JourneysScreen} />

      <RootDrawer.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </RootDrawer.Navigator>

    // <RootStack.Navigator initialRouteName="Home">
    //   <RootStack.Group screenOptions={{ presentation: 'modal' }}>
    //     <RootStack.Screen name="Modal" component={ModalScreen} />
    //   </RootStack.Group>
    // </RootStack.Navigator>
  );
}
