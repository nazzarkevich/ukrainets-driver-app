import { StyleSheet, TouchableOpacity } from 'react-native';

import { StyledView, Text } from 'src/components/themed';
import { RootDrawerScreenProps } from 'src/types';

export function NotFoundScreen({
  navigation,
}: RootDrawerScreenProps<'NotFound'>) {
  return (
    <StyledView style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Home')}
        style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
