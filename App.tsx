import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from './navigation';
import { useCachedResources, useColorScheme } from './hooks';
import { RootStoreProvider } from './components';
import { RootStore } from './stores';

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
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </RootStoreProvider>
      </SafeAreaProvider>
    );
  }
}
