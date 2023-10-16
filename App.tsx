import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Toast from 'react-native-toast-message';

import { RootStoreProvider } from '@components/';
import { useCachedResources, useColorScheme } from '@hooks/';
import { Navigation } from '@navigation/';
import { RootStore } from '@stores/';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const rootStore = new RootStore();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <RootStoreProvider store={rootStore}>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Toast />
      </ApplicationProvider>
    </RootStoreProvider>
  );
}
