import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import { layout } from '@constants/';
import {
  ClientsScreen,
  DrawerContent,
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

  return (
    <RootDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: isTablet ? 'permanent' : 'slide',
        headerShown: !isTablet,
        drawerActiveBackgroundColor: '#EDF2FA',
        drawerActiveTintColor: '#413ECA',
        drawerStyle: { maxWidth: 220 },
        drawerLabelStyle: {
          marginLeft: -25,
          color: '#464850',
          fontFamily: 'Gilroy',
        },
      }}>
      <RootDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Головна панель',
          drawerIcon: ({ color }) => (
            <CategoryIcon width={22} height={22} color={color} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="Journeys"
        component={JourneysScreen}
        options={{
          title: 'Поїздки',
          drawerIcon: ({ color }) => (
            <GroupIcon width={22} height={22} color={color} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="Parcels"
        component={ParcelsScreen}
        options={{
          title: 'Посилки',
          drawerIcon: ({ color }) => (
            <BoxIcon width={22} height={22} color={color} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="Clients"
        component={ClientsScreen}
        options={{
          title: 'Клієнти',
          drawerIcon: ({ color }) => (
            <PeopleIcon width={22} height={22} color={color} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="Drivers"
        component={DriversScreen}
        options={{
          title: 'Перевізники',
          drawerIcon: ({ color }) => (
            <DriverIcon width={22} height={22} color={color} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="Vans"
        component={VansScreen}
        options={{
          title: 'Автомобілі',
          drawerIcon: ({ color }) => (
            <CarIcon width={22} height={22} color={color} />
          ),
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
