import { StyleSheet } from 'react-native';

import { RootStackScreenProps } from '../../types';
import { NavigationMenu, Text, View } from '../../components';

export function ParcelsScreen({
  navigation,
}: RootStackScreenProps<'Parcels'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcels</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <NavigationMenu/>
    </View>
  );
}

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
