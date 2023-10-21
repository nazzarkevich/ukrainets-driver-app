import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'consts';

import { useRootStore } from '../../root-store-provider';
import { SectionTitle } from '../../section-title';
import { Text, View } from '../../themed';
import { JourneyCard } from '../journey-card';

export const LastJourneys = observer(() => {
  const { journeysStore } = useRootStore();

  if (!journeysStore.lastJourneys) {
    return <Text>No Last Journeys</Text>;
  }

  return (
    <View style={styles.lastJourney}>
      {journeysStore.lastJourneys.map((journeys) => (
        <JourneyCard
          origin={journeys.origin}
          vehicle={journeys.vehicle}
          isCompleted={journeys.isCompleted}
          destination={journeys.destination}
          journeyLoadCapacity={1800}
          journeyNumber={journeys.journeyNumber}
        />
      ))}
    </View>
  );
});

export const LastJourneysSection = observer(() => {
  return (
    <View style={styles.lastJourneysSection}>
      <SectionTitle>Останні Поїздки</SectionTitle>

      <LastJourneys />
    </View>
  );
});

const styles = StyleSheet.create({
  lastJourneysSection: {
    width: '60%',
    maxWidth: 440,
  },
  lastJourney: {
    gap: 25,
  },
  journeyCard: {
    gap: typographyConst.spacing.m,
    borderRadius: 14,
    padding: typographyConst.spacing.m,
    backgroundColor: colorsConst.background.default,
    marginBottom: 25,
  },
});
