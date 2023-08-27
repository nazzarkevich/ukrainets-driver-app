import { StyleSheet } from 'react-native';

import { EditScreenInfo, Text, View } from '../../components';
import { RootTabScreenProps } from '../../types';

export function TabHomeScreen({
  navigation,
}: RootTabScreenProps<'TabHomeScreen'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
      style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/tab-home-screen/tab-home-screen.tsx" />
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
