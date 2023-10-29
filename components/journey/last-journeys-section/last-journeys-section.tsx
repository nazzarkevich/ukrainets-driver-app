import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'consts';

import { useRootStore } from '../../root-store-provider';
import { SectionTitle } from '../../section-title';
import { Text, View } from '../../themed';
import { JourneyCard } from '../journey-card';

export const LastJourneys = observer(() => {
  const { journeysStore } = useRootStore();

  useEffect(() => {
    journeysStore.fetchJourneys();
  }, []);

  if (!journeysStore.lastJourneys) {
    return <Text>No Last Journeys</Text>;
  }

  return (
    <View style={styles.lastJourney}>
      {journeysStore.lastJourneys.map((journey) => (
        <JourneyCard
          key={journey.id}
          origin={journey.origin}
          vehicle={journey.vehicle}
          isCompleted={journey.isCompleted}
          destination={journey.destination}
          journeyLoadCapacity={1800}
          journeyNumber={journey.journeyNumber}
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
