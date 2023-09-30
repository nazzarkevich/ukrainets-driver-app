import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

import { ColorLogoIcon, DotsMenuIcon } from 'assets/icons';

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{ padding: 15 }}>
            <ColorLogoIcon width={120} height={20} />
          </View>
          <DrawerItemList {...props} />
          <Button style={styles.btn} onPress={() => null}>
            <Text style={styles.textBtn}>Створити поїздку</Text>
          </Button>
        </View>
      </DrawerContentScrollView>

      <View style={styles.userInfoSection}>
        <View style={styles.user}>
          <View>
            <Avatar.Image
              source={{
                uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1236',
              }}
              size={32}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.title}>Дмитро</Text>
            <Text style={styles.caption}>Водій</Text>
          </View>
          <View>
            <DotsMenuIcon color="#413ECB" width={24} height={24} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#080A10',
  },
  caption: {
    fontSize: 10,
    color: '#4A4C55',
  },
  btn: {
    backgroundColor: '#413ECA',
    color: '#FFFFFF',
    borderRadius: 10,
    width: 180,
    marginTop: 230,
    marginLeft: 15,
  },
  textBtn: {
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 173,
    marginBottom: 20,
    alignItems: 'center',
  },
  name: {
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: -40,
  },
});
