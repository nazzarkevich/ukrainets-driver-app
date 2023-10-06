import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { DotsMenuIcon } from 'assets/icons';
import { colorsConst } from 'consts';
import { DriverType } from 'type/driver.type';

interface UserInfoSectionProps {
  driver: DriverType;
}

export function UserInfoSection({ driver }: UserInfoSectionProps) {
  return (
    <View style={styles.userInfoSection}>
      <Pressable style={styles.btn} onPress={() => null}>
        <Text style={styles.textBtn}>Створити поїздку</Text>
      </Pressable>
      <View style={styles.user}>
        <View>
          <Avatar
            source={{
              uri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1236',
            }}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.title}>{driver.title}</Text>
          <Text style={styles.caption}>{driver.description}</Text>
        </View>
        <Pressable onPress={() => null}>
          <DotsMenuIcon color={colorsConst.roles.primary} size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colorsConst.roles.primary,
    borderRadius: 10,
    width: 173,
    height: 36,
    marginBottom: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textBtn: {
    textAlign: 'center',
    color: colorsConst.text.contrast,
  },
  title: {
    fontSize: 12,
    color: colorsConst.text.primary,
    paddingBottom: 3,
  },
  caption: {
    fontSize: 10,
    color: colorsConst.text.secondary,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
    marginBottom: 20,
    alignItems: 'center',
  },
  name: {
    marginRight: 50,
    alignContent: 'center',
  },
});
