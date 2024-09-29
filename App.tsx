import 'reflect-metadata';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';

import { RootStoreProvider } from 'src/components/';
import { useCachedResources, useColorScheme } from 'src/hooks/';
import { injector, setupInjector } from 'src/injector/';
import { Navigation } from 'src/navigation/';
import { injectionTokens } from 'src/types/';
import { RootStore } from 'src/stores';
import { GluestackUIProvider } from 'components/ui/gluestack-ui-provider';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    setupInjector();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <RootStoreProvider
      store={injector.get<RootStore>(injectionTokens.rootStore)}>
      <GluestackUIProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Toast />
      </GluestackUIProvider>
    </RootStoreProvider>
  );
}
