import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useRootStore } from '../../root-store-provider';
import { SectionTitle } from '../../section-title';
import { Text, View } from '../../themed';
import { JourneyCard } from '../journey-card';

export const ActiveJourney = observer(() => {
  const { journeyStore } = useRootStore();

  if (!journeyStore.activeJourney) {
    return <Text>No Active Journey</Text>;
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
});

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
