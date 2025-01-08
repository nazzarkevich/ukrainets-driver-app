import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { useLinkingConfiguration } from 'src/hooks';

import { AuthNavigator, RootNavigator } from './components';

export function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { linkingConfiguration } = useLinkingConfiguration();
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = false;

  return (
    <NavigationContainer
      linking={linkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
