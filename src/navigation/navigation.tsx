import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { observer } from 'mobx-react';

import { useLinkingConfiguration } from 'src/hooks';

import { AuthNavigator, RootNavigator } from './components';
import { useRootStore } from '../components';

export const Navigation = observer(
  ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    const { linkingConfiguration } = useLinkingConfiguration();
    const { authStore } = useRootStore();
    const isAuthenticated = true; // TODO: remove

    return (
      <NavigationContainer
        linking={linkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  },
);
