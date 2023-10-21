import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { DotsMenuIcon } from 'assets/icons';

export const JourneyCardActions = ({
  isCompleted,
}: {
  isCompleted: boolean;
}) => {
  return (
    <Pressable
      style={styles.journeyCardActions}
      onPress={() => console.log('Click on actions')}>
      {!isCompleted ? <DotsMenuIcon size={25} /> : <></>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  journeyCardActions: {
    alignItems: 'flex-end',
  },
});
