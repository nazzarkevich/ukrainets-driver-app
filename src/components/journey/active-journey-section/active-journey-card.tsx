import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'src/consts';
import { View } from '../../themed';
import { useRootStore } from '../../root-store-provider';
import {
  JourneyCardDetails,
  JourneyCardHeader,
  JourneyDrivers,
  JourneyLoadIndicator,
} from '../journey-card';
import { Text } from '@/components/ui';

export const ActiveJourneyCard = () => {
  const { journeyStore } = useRootStore();
  const { activeJourney } = journeyStore;

  if (!activeJourney) {
    // TODO: add skeleton
    return <Text>Немає активної поїздки</Text>;
  }

  return (
    <View style={styles.journeyCard}>
      <JourneyCardHeader
        origin={activeJourney.origin}
        destination={activeJourney.destination}
        isCompleted={activeJourney.isCompleted}
      />

      <JourneyCardDetails
        vehicle={activeJourney.vehicle}
        journeyNumber={activeJourney.journeyNumber}
        journeyLoadCapacity={journeyStore.journeyLoadCapacity}
      />

      <JourneyDrivers drivers={activeJourney.drivers} />

      <JourneyLoadIndicator
        journeyLoadCapacity={journeyStore.journeyLoadCapacity}
      />
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
