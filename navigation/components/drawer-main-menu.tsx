import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ColorLogoIcon } from 'assets/icons';

export function DrawerMainContentMenu(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.logoIcon}>
          <ColorLogoIcon width={120} height={20} />
        </View>
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoIcon: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  drawerContent: {
    flex: 1,
  },
  itemList: {
    width: 212,
  },
});
