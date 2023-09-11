import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

import { RootStackScreenProps } from '@type/';
import { NavigationMenu, Text, View } from '@components/';

export const HomeScreen = observer(function HomeScreen({
  navigation,
}: RootStackScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NavigationMenu />
    </View>
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
