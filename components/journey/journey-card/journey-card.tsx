import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

import { View } from 'components';
import { colorsConst } from 'consts';
import { Country } from 'type';

import { JourneyCardDetails } from './journey-card-details';
import { JourneyCardHeader } from './journey-card-header';
import { JourneyLoadDetails } from './journey-load-details';

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

      <JourneyLoadDetails />

      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  journeyCard: {
    padding: 16,
    borderRadius: 14,
    gap: 12,
    backgroundColor: colorsConst.background.default,
  },
});
