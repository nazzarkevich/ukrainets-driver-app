import 'global.css';
import 'reflect-metadata';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

  // Initialize injector immediately rather than in useEffect
  // This ensures the container is ready before any component renders
  setupInjector();

  if (!isLoadingComplete) {
    return null;
  }

  // Get rootStore instance after injector is initialized
  const rootStore = injector.get<RootStore>(injectionTokens.rootStore);

  return (
    <RootStoreProvider store={rootStore}>
      <GluestackUIProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Toast />
      </GluestackUIProvider>
    </RootStoreProvider>
  );
}
