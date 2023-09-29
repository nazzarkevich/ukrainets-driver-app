import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@components/';
import { typographyConst } from 'consts';

export const ScreenTitle = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: typographyConst.giant,
  },
});
