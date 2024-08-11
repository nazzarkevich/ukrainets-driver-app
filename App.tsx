import 'react-native-gesture-handler';
import { RootStoreProvider } from '@components/';
import * as eva from '@eva-design/eva';
import { useCachedResources, useColorScheme } from '@hooks/';
import { Navigation } from '@navigation/';
import { RootStore } from '@stores/';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Toast from 'react-native-toast-message';

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
        <Toast />
      </ApplicationProvider>
    </RootStoreProvider>
  );
}
