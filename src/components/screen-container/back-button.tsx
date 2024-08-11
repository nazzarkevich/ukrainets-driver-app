import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ArrowLeftIcon } from 'src/assets/icons';

export const BackButton = (): React.ReactElement => {
  const { navigate } = useNavigation();

  return (
    <Button
      style={styles.backButton}
      size="small"
      status="basic"
      appearance="ghost"
      onPress={() => navigate('Journeys')}>
      <ArrowLeftIcon size={20} />
    </Button>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 50,
  },
});
