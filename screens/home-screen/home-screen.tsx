import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '@components/';
import { RootStackScreenProps } from '@type/';

export const HomeScreen = observer(function HomeScreen({
  navigation,
}: RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
