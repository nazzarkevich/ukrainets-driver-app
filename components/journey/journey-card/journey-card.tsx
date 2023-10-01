import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

import { View } from 'components';
import { colorsConst, typographyConst } from 'consts';
import { Country } from 'type';

import { JourneyCardDetails } from './journey-card-details';
import { JourneyCardHeader } from './journey-card-header';
import { JourneyDrivers } from './journey-drivers';
import { JourneyLoadIndicator } from './journey-load-indicator';

interface JourneyCardType {
  journeyLoad: string;
  journeyNumber: string;
  carPlateNumber: string;
  origin: Country;
  destination: Country;
  isCompleted: boolean;
}

export const JourneyCard = ({
  origin,
  destination,
  journeyLoad,
  journeyNumber,
  carPlateNumber,
  isCompleted,
}: JourneyCardType) => {
  const drivers = [
    { firstName: 'Дмитро', lastName: 'Гнатюк', role: 'Водій' },
    { firstName: 'Карпо', lastName: 'Чумак', role: 'Водій' },
  ];

  return (
    <View style={styles.journeyCard}>
      <JourneyCardHeader
        origin={origin}
        destination={destination}
        isCompleted={isCompleted}
      />

      <JourneyCardDetails
        journeyLoad={journeyLoad}
        journeyNumber={journeyNumber}
        carPlateNumber={carPlateNumber}
      />

      <JourneyDrivers drivers={drivers} />

      <JourneyLoadIndicator />

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
