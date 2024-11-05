import React from 'react';
import { StyleSheet } from 'react-native';

import { typographyConst } from 'src/consts';

import { Text } from '../themed';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: typographyConst.font.l,
    marginBottom: typographyConst.spacing.m,
  },
});
