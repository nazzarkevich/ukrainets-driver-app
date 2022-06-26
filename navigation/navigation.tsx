import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { useLinkingConfiguration } from '../hooks';
import { RootNavigator } from './components';

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
