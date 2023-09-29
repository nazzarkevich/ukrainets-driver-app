import { useNavigation } from '@react-navigation/core';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, StyledView } from '../themed';

export function NavigationMenu() {
  const navigation = useNavigation();

  return (
    <StyledView>
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
    </StyledView>
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
