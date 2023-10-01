import React from 'react';
import { StyleSheet } from 'react-native';

import { Title, UserCard, View } from 'components';
import { typographyConst } from 'consts';

export interface JourneyDriversType {
  firstName: string;
  lastName: string;
  role: string;
}

export const JourneyDrivers = ({
  drivers,
}: {
  drivers: JourneyDriversType[];
}) => {
  return (
    <View style={styles.journeyDriversWrapper}>
      <Title>Перевізники</Title>

      <View style={styles.journeyDrivers}>
        {drivers.map((driver) => (
          <UserCard
            role={driver.role}
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
