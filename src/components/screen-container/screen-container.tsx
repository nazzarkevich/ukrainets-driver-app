import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '@/components/ui/text';
import { typographyConst } from 'src/consts';

import { BackButton } from './back-button';
import { StyledView, View } from '../themed';
import { Spacer } from '../spacer';

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
      <View className="w-full flex-row items-center justify-center">
        <View className="absolute left-0 w-[5%]">
          {showBack && <BackButton />}
        </View>
        <View className="flex-1 flex-row items-center justify-center">
          {title && (
            <Text className="text-3xl font-bold text-black">{title}</Text>
          )}
        </View>
      </View>
      <Spacer size="xl" />
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
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: typographyConst.spacing.l,
    gap: typographyConst.spacing.s,
  },
});
