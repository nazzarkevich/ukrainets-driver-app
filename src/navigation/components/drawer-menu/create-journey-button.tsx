import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Spacer, View } from 'src/components';

export const CreateJourneyButton = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Button
        size="lg"
        onPress={() =>
          navigate('JourneyStackScreen', { screen: 'CreateJourneyScreen' })
        }>
        Створити поїздку
      </Button>

      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 25,
  },
});
