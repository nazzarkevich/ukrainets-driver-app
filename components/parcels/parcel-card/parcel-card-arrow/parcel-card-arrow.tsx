import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ArrowRightIcon } from 'assets/icons';
import { View } from 'components/themed';

export const ParcelCardArrow = () => {
  return (
    <View style={styles.arrowRightIcon}>
      <Pressable onPress={() => console.log('Click on arrow')}>
        <ArrowRightIcon size={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowRightIcon: {
    justifyContent: 'center',
  },
});
