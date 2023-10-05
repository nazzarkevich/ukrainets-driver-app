import React from 'react';
import { StyleSheet } from 'react-native';

import { SectionTitle, View, useRootStore } from 'components';

import { JourneyCard } from '../journey-card';

export const ActiveJourney = () => {
  const { journeyStore } = useRootStore();

  if (!journeyStore.activeJourney) {
    return <h2>No Active Journey</h2>;
  }

  return (
    <View style={styles.activeJourney}>
      <JourneyCard
        origin={journeyStore.activeJourney.origin}
        drivers={journeyStore.activeJourney.drivers}
        vehicle={journeyStore.activeJourney.vehicle}
        isCompleted={journeyStore.activeJourney.isCompleted}
        destination={journeyStore.activeJourney.destination}
        journeyLoadCapacity={journeyStore.journeyLoadCapacity}
        journeyNumber={journeyStore.activeJourney.journeyNumber}
      />
    </View>
  );
};

export const ActiveJourneySection = () => {
  return (
    <View style={styles.activeJourneySection}>
      <SectionTitle>Активна поїздка</SectionTitle>

      <ActiveJourney />
    </View>
  );
};

const styles = StyleSheet.create({
  activeJourneySection: {
    width: '60%',
    maxWidth: 440,
  },
  activeJourney: {
    gap: 25,
  },
});
