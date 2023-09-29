import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'components';

export const JourneyLoadDetails = () => {
  return (
    <View style={styles.journeyLoadDetails}>
      <Text>Завантажено</Text>
      <View style={styles.journeyLoadIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  journeyLoadDetails: {
    gap: 6,
  },
  journeyLoadIndicator: {
    height: 12,
    width: '100%',
    borderRadius: 15,
    backgroundColor: 'papayawhip',
  },
});
