import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

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
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ApplicationProvider>
    </RootStoreProvider>
  );
}
