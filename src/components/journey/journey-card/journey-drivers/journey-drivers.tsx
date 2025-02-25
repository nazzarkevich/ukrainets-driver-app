import React from 'react';
import { StyleSheet } from 'react-native';

import { typographyConst } from 'src/consts';
import { User } from 'src/types';

import { Text, View } from '../../../themed';
import { UserCard } from '../../../user-card';

export const JourneyDrivers = ({ drivers }: { drivers?: User[] }) => {
  if (!drivers?.length) {
    return null;
  }

  return (
    <View style={styles.journeyDriversWrapper}>
      <Text className="text-m">Перевізники</Text>

      <View style={styles.journeyDrivers}>
        {drivers.map((driver) => (
          <UserCard
            key={driver.id}
            type={driver.type}
            lastName={driver.lastName}
            firstName={driver.firstName}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  journeyDriversWrapper: {
    gap: typographyConst.spacing.s,
  },
  journeyDrivers: {
    display: 'flex',
    flexDirection: 'row',
    gap: typographyConst.spacing.m,
  },
});
