import React from 'react';
import { StyleSheet } from 'react-native';

import { StyledView } from '../themed';

export const ScreenContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StyledView style={styles.container}>{children}</StyledView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
