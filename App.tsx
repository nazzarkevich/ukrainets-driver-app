import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
