import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { StyledView, Text } from '@components/';

export function ModalScreen() {
  return (
    <StyledView style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <StyledView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </StyledView>
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
