import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { UserInfoSection } from './drawer-footer';
import { DrawerMainContentMenu } from './drawer-main-menu';

const driver = { title: 'Дмитро', description: 'Водій' };

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={styles.drawerContainer}>
      <DrawerMainContentMenu {...props} />
      <UserInfoSection driver={driver} />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
});
