import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DRIVER_MOCK } from 'src/stores/journey/journeyMock';

import { UserInfoSection } from './drawer-footer';
import { DrawerMainContentMenu } from './drawer-main-menu';

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={styles.drawerContainer}>
      <DrawerMainContentMenu {...props} />

      <UserInfoSection driver={DRIVER_MOCK} />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
});
