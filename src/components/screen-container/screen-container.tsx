import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@/components/ui/text';
import { typographyConst } from 'src/consts';

import { BackButton } from './back-button';
import { StyledView, View } from '../themed';

export const ScreenContainer = ({
  title,
  showBack,
  children,
}: {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}) => {
  return (
    <StyledView style={styles.container}>
      <View style={styles.header}>
        {showBack && <BackButton />}
        {title && (
          <Text italic size="xl">
            {title}
          </Text>
        )}
      </View>
      {children}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: typographyConst.spacing.l,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: typographyConst.spacing.l,
    gap: typographyConst.spacing.s,
  },
});
