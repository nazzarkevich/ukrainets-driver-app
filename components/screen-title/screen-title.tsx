import React from 'react';
import { StyleSheet } from 'react-native';

import { typographyConst } from 'consts';

import { Text } from '../themed';

export const ScreenTitle = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: typographyConst.font.xl,
  },
});
