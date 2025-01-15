import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../../themed';
import { SectionTitle } from '../../section-title';
import { ActiveJourneyCard } from './active-journey-card';

const ActiveJourney = observer(() => {
  return (
    <View style={styles.activeJourney}>
      <ActiveJourneyCard />
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
