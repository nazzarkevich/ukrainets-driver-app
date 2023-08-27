import * as React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../../constants';
import { useColorScheme } from '../../hooks';
import { TabHomeScreen, TabParcelsScreen } from '../../screens';
import { RootTabParamList, RootTabScreenProps } from '../../types';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHomeScreen"
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabHomeScreen'>) => ({
          title: 'Tab Home Screen',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="TabParcelsScreen"
        component={TabParcelsScreen}
        options={{
          title: 'Tab Parcels Screen',
          tabBarIcon: ({ color }) => <TabBarIcon name="boxes" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
