import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import { RootNavigator } from './components';
import { useLinkingConfiguration } from '../hooks';

export function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { linkingConfiguration } = useLinkingConfiguration();

  return (
    <NavigationContainer
      linking={linkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
