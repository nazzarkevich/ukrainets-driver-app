import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import {
  ClientsScreen,
  DriversScreen,
  HomeScreen,
  JourneysScreen,
  // NotFoundScreen,
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
import { colorsConst, layout } from 'consts';

import { DrawerContent } from './drawer-content';

const RootDrawer = createDrawerNavigator<RootStackParams>();

export function RootNavigator() {
  const { isTablet } = layout;

  return (
    <RootDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: isTablet ? 'permanent' : 'slide',
        headerShown: !isTablet,
        drawerActiveBackgroundColor: colorsConst.foreground.active,
        drawerActiveTintColor: colorsConst.text.contrast,
        drawerItemStyle: { width: '100%', paddingLeft: 10, marginLeft: 0 },
        drawerStyle: { maxWidth: 212 },
        drawerLabelStyle: {
          marginLeft: -25,
          color: colorsConst.text.secondary,
          // fontFamily: 'Gilroy',
        },
      }}>
      <RootDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Головна панель',
          drawerIcon: ({ color }) => <CategoryIcon size={22} color={color} />,
        }}
      />
      <RootDrawer.Screen
        name="Journeys"
        component={JourneysScreen}
        options={{
          title: 'Поїздки',
          drawerIcon: ({ color }) => <GroupIcon size={22} color={color} />,
        }}
      />
      <RootDrawer.Screen
        name="Parcels"
        component={ParcelsScreen}
        options={{
          title: 'Посилки',
          drawerIcon: ({ color }) => <BoxIcon size={22} color={color} />,
        }}
      />
      <RootDrawer.Screen
        name="Clients"
        component={ClientsScreen}
        options={{
          title: 'Клієнти',
          drawerIcon: ({ color }) => <PeopleIcon size={22} color={color} />,
        }}
      />
      <RootDrawer.Screen
        name="Drivers"
        component={DriversScreen}
        options={{
          title: 'Перевізники',
          drawerIcon: ({ color }) => <DriverIcon size={22} color={color} />,
        }}
      />
      <RootDrawer.Screen
        name="Vans"
        component={VansScreen}
        options={{
          title: 'Автомобілі',
          drawerIcon: ({ color }) => <CarIcon size={22} color={color} />,
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
