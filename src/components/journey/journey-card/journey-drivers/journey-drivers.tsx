import React from 'react';
import { StyleSheet } from 'react-native';

import { typographyConst } from 'src/consts';
import { User } from 'src/type';

import { View } from '../../../themed';
import { Title } from '../../../title';
import { UserCard } from '../../../user-card';

export const JourneyDrivers = ({ drivers }: { drivers?: User[] }) => {
  if (!drivers?.length) {
    return null;
  }

  return (
    <View style={styles.journeyDriversWrapper}>
      <Title>Перевізники</Title>

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