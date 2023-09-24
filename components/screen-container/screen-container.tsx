import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../themed';

export const ScreenContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
