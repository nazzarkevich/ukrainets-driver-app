import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { LoginScreen } from 'src/screens';

import { AuthStackParams } from 'src/types';

const Stack = createNativeStackNavigator<AuthStackParams>();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
