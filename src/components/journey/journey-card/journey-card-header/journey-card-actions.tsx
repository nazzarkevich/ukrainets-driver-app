import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { DotsMenuIcon } from 'src/assets/icons';

export const JourneyCardActions = ({
  isCompleted,
}: {
  isCompleted: boolean;
}) => {
  if (isCompleted) {
    return null;
  }

  return (
    <Pressable
      style={styles.journeyCardActions}
      onPress={() => console.log('Click on actions')}>
      <DotsMenuIcon size={25} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  journeyCardActions: {
    alignItems: 'flex-end',
  },
});
