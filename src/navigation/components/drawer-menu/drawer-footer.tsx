// import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DotsMenuIcon } from 'src/assets/icons';
import { UserCard } from 'src/components';
import { colorsConst, typographyConst } from 'src/consts';
import { User } from 'src/types';

import { CreateJourneyButton } from './create-journey-button';

export function UserInfoSection({ driver }: { driver: User }) {
  return (
    <View style={styles.userInfoSection}>
      <CreateJourneyButton />

      <View style={styles.user}>
        <UserCard
          key={driver.id}
          type={driver.type}
          firstName={driver.firstName}
        />

        {/* <Button
          appearance="ghost"
          onPress={() => null}
          accessoryLeft={
            <DotsMenuIcon color={colorsConst.roles.primary} size={24} />
          }
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    alignItems: 'center',
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
