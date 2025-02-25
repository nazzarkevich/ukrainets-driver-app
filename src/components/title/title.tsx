import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'src/consts';

import { Text } from '../themed';

export const Title = ({
  size = 'm',
  color = 'secondary',
  className,
  children,
}: {
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Text style={[styles[size], styles[color]]} className={className}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  primary: {
    color: colorsConst.text.primary,
  },
  secondary: {
    color: colorsConst.text.secondary,
  },
  tertiary: {
    color: colorsConst.text.tertiary,
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
