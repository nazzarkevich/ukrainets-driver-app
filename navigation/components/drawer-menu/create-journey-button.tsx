import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colorsConst } from 'consts';

export const CreateJourneyButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button
      style={styles.createJourneyButton}
      onPress={() =>
        navigate('JourneyStackScreen', { screen: 'CreateJourneyScreen' })
      }>
      <Text style={styles.label}>Створити поїздку</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  createJourneyButton: {
    width: 170,
    height: 35,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colorsConst.roles.primary,
  },
  label: {
    textAlign: 'center',
    color: colorsConst.text.contrast,
  },
});
