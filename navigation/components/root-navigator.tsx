import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import { layout } from '@constants/';
import {
  ClientsScreen,
  DrawerContent,
  DriversScreen,
  HomeScreen,
  JourneysScreen,
  NotFoundScreen,
  ParcelsScreen,
  VansScreen,
} from '@screens/';
import { RootStackParams } from '@type/';

const RootDrawer = createDrawerNavigator<RootStackParams>();

export function RootNavigator() {
  const { isTablet } = layout;

  return (
    <RootDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: isTablet ? 'permanent' : 'slide',
        headerShown: !isTablet,
        drawerStyle: { maxWidth: 250 },
        drawerActiveBackgroundColor: '#EEF1FC',
        drawerActiveTintColor: '#000000',
      }}>
      <RootDrawer.Screen name="Home" component={HomeScreen} />
      <RootDrawer.Screen name="Journeys" component={JourneysScreen} />
      <RootDrawer.Screen name="Parcels" component={ParcelsScreen} />
      <RootDrawer.Screen name="Clients" component={ClientsScreen} />
      <RootDrawer.Screen name="Drivers" component={DriversScreen} />
      <RootDrawer.Screen name="Vans" component={VansScreen} />
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
