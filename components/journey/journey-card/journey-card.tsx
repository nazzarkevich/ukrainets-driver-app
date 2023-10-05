import { Divider } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from 'components';
import { colorsConst, typographyConst } from 'consts';
import { Journey } from 'type';

import { JourneyCardDetails } from './journey-card-details';
import { JourneyCardHeader } from './journey-card-header';
import { JourneyDrivers } from './journey-drivers';
import { JourneyLoadIndicator } from './journey-load-indicator';

export type JourneyCardType = Pick<
  Journey,
  | 'origin'
  | 'journeyNumber'
  | 'destination'
  | 'isCompleted'
  | 'drivers'
  | 'vehicle'
> & { journeyLoadCapacity: number };

export const JourneyCard = ({
  origin,
  destination,
  journeyLoadCapacity,
  journeyNumber,
  isCompleted,
  drivers,
  vehicle,
}: JourneyCardType) => {
  return (
    <View style={styles.journeyCard}>
      <JourneyCardHeader
        origin={origin}
        destination={destination}
        isCompleted={isCompleted}
      />

      <JourneyCardDetails
        vehicle={vehicle}
        journeyNumber={journeyNumber}
        journeyLoadCapacity={journeyLoadCapacity}
      />

      <JourneyDrivers drivers={drivers} />

      <JourneyLoadIndicator journeyLoadCapacity={journeyLoadCapacity} />

      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  journeyCard: {
    gap: typographyConst.spacing.m,
    borderRadius: 14,
    padding: typographyConst.spacing.m,
    backgroundColor: colorsConst.background.default,
  },
});
