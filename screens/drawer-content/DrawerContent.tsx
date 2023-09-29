import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

import {
  BoxIcon,
  CarIcon,
  CategoryIcon,
  ColorLogoIcon,
  DotsMenuIcon,
  DriverIcon,
  GroupIcon,
  PeopleIcon,
} from 'assets/icons';

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 24 }}>
            <ColorLogoIcon width={117} height={20} />
          </View>
          <DrawerItem
            icon={() => <CategoryIcon width={20} height={20} />}
            label="Головна панель"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={() => <GroupIcon width={20} height={20} />}
            label="Поїздки"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Journeys')}
          />
          <DrawerItem
            icon={() => <BoxIcon width={20} height={20} />}
            label="Посилки"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Parcels')}
          />
          <DrawerItem
            icon={() => <PeopleIcon width={20} height={20} />}
            label="Клієнти"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Clients')}
          />
          <DrawerItem
            icon={() => <DriverIcon width={20} height={20} />}
            label="Перевізники"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Drivers')}
          />
          <DrawerItem
            icon={() => <CarIcon width={20} height={20} />}
            label="Автомобілі"
            labelStyle={{ color: '#4A4C55', marginLeft: -25 }}
            onPress={() => props.navigation.navigate('Vans')}
          />
        </View>
      </DrawerContentScrollView>

      <View style={styles.userInfoSection}>
        <Button style={styles.btn} onPress={() => null}>
          <Text style={{ color: '#fff', fontWeight: '400' }}>
            Створити поїздку
          </Text>
        </Button>
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
    width: 173,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 173,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  name: {
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: -40,
  },
});
