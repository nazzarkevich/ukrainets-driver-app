import React from 'react';
import { StyleSheet } from 'react-native';

import { SectionTitle, View } from 'components';
import { Country } from 'type';

import { JourneyCard } from '../journey-card';

export const ActiveJourneySection = () => {
  return (
    <View style={styles.activeJourneySection}>
      <SectionTitle>Активна поїздка</SectionTitle>

      <JourneyCard
        isCompleted
        journeyLoad="1200"
        journeyNumber="2331223"
        carPlateNumber="BO4122BO"
        origin={Country.UKRAINE}
        destination={Country.UNITED_KINGDOM}
      />

      <JourneyCard
        journeyLoad="800"
        isCompleted={false}
        journeyNumber="883111"
        carPlateNumber="BO1212BO"
        origin={Country.UNITED_KINGDOM}
        destination={Country.UKRAINE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeJourneySection: {
    width: '60%',
    maxWidth: 440,
    gap: 25,
  },
});
