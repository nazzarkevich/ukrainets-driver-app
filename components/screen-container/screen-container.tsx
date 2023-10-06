import { Text as EvaText } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

import { typographyConst } from 'consts';

import { StyledView } from '../themed';

export const ScreenContainer = ({
  title,
  children,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <StyledView style={styles.container}>
      {title && <EvaText category="h5">{title}</EvaText>}
      {children}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: typographyConst.spacing.l,
  },
});
