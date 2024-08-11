import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'src/consts';

import { Text } from '../themed';

export const Title = ({
  size = 'm',
  children,
}: {
  size?: 's' | 'm';
  children: React.ReactNode;
}) => {
  return <Text style={[styles.title, styles[size]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: colorsConst.text.secondary,
  },
  s: {
    fontSize: typographyConst.font.s,
  },
  m: {
    fontSize: typographyConst.font.m,
  },
  l: {
    fontSize: typographyConst.font.l,
  },
});
