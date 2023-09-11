import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ClientsScreen,
  HomeScreen,
  JourneysScreen,
  ModalScreen,
  NotFoundScreen,
  ParcelsScreen,
} from '@screens/';
import { RootStackParams } from '@type/';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParams>();

export function RootNavigator() {
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
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Parcels"
        component={ParcelsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Clients"
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Journeys"
        component={JourneysScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />

      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
