import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DotsMenuIcon } from 'assets/icons';
import { UserCard } from 'components';
import { colorsConst, typographyConst } from 'consts';
import { User } from 'type';

export function UserInfoSection({ driver }: { driver: User }) {
  return (
    <View style={styles.userInfoSection}>
      <Button style={styles.createJourneyButton} onPress={() => null}>
        <Text style={styles.label}>Створити поїздку</Text>
      </Button>

      <View style={styles.user}>
        <UserCard
          key={driver.id}
          type={driver.type}
          firstName={driver.firstName}
        />

        <Button
          appearance="ghost"
          onPress={() => null}
          accessoryLeft={
            <DotsMenuIcon color={colorsConst.roles.primary} size={24} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    alignItems: 'center',
  },
  createJourneyButton: {
    width: 170,
    height: 35,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colorsConst.roles.primary,
  },
  label: {
    textAlign: 'center',
    color: colorsConst.text.contrast,
  },
  title: {
    color: colorsConst.text.primary,
    fontSize: typographyConst.font.s,
    paddingBottom: typographyConst.spacing.xs,
  },
  caption: {
    fontSize: typographyConst.font.xs,
    color: colorsConst.text.secondary,
  },
  user: {
    width: 170,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
