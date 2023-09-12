import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import { RootStore } from '@stores/';
import { Navigation } from '@navigation/';
import { RootStoreProvider } from '@components/';
import { useCachedResources, useColorScheme } from '@hooks/';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const rootStore = new RootStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RootStoreProvider store={rootStore}>
          <PaperProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PaperProvider>
        </RootStoreProvider>
      </SafeAreaProvider>
    );
  }
}
