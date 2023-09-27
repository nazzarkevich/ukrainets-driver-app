import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import { layout } from '@constants/';
import {
  ClientsScreen,
  DriversScreen,
  HomeScreen,
  JourneysScreen,
  ParcelsScreen,
  VansScreen,
} from '@screens/';
import { RootStackParams } from '@type/';
import {
  BoxIcon,
  CarIcon,
  CategoryIcon,
  DriverIcon,
  GroupIcon,
  PeopleIcon,
} from 'assets/icons';

const RootDrawer = createDrawerNavigator<RootStackParams>();

export function RootNavigator() {
  const { isTablet } = layout;
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
        drawerStyle: { maxWidth: '100%' },
        drawerLabelStyle: { marginLeft: -25 },
        drawerActiveBackgroundColor: '#EEF1FC',
        drawerActiveTintColor: '#000000',
      }}>
      <RootDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Головна панель',
          drawerIcon: () => <CategoryIcon width={20} height={20} />,
        }}
      />
      <RootDrawer.Screen
        name="Journeys"
        component={JourneysScreen}
        options={{
          title: 'Поїздки',
          drawerIcon: () => <GroupIcon width={20} height={20} />,
        }}
      />
      <RootDrawer.Screen
        name="Parcels"
        component={ParcelsScreen}
        options={{
          title: 'Посилки',
          drawerIcon: () => <BoxIcon width={20} height={20} />,
        }}
      />
      <RootDrawer.Screen
        name="Clients"
        component={ClientsScreen}
        options={{
          title: 'Клієнти',
          drawerIcon: () => <PeopleIcon width={20} height={20} />,
        }}
      />
      <RootDrawer.Screen
        name="Drivers"
        component={DriversScreen}
        options={{
          title: 'Перевізники',
          drawerIcon: () => <DriverIcon width={20} height={20} />,
        }}
      />
      <RootDrawer.Screen
        name="Vans"
        component={VansScreen}
        options={{
          title: 'Автомобілі',
          drawerIcon: () => <CarIcon width={20} height={20} />,
        }}
      />

      {/* <RootDrawer.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      /> */}
    </RootDrawer.Navigator>

    // <RootStack.Navigator initialRouteName="Home">
    //   <RootStack.Group screenOptions={{ presentation: 'modal' }}>
    //     <RootStack.Screen name="Modal" component={ModalScreen} />
    //   </RootStack.Group>
    // </RootStack.Navigator>
  );
}
