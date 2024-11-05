import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, View } from 'src/components';

export const CreateJourneyButton = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={() =>
          navigate('JourneyStackScreen', { screen: 'CreateJourneyScreen' })
        }>
        Створити поїздку
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 25,
  },
});
