import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper';

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
      <PaperProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    </RootStoreProvider>
  );
}
