import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Text, View } from '../themed';

export function NavigationMenu() {
    const navigation = useNavigation();
    
  return (
    <View>
      <Text style={styles.title}>Navigation</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Clients')}>
      <Text>Clients</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Journeys')}>
      <Text>Journeys</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Parcels')}>
      <Text>Parcels</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
