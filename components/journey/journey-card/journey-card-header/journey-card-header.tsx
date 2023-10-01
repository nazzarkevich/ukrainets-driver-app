import React from 'react';
import { StyleSheet } from 'react-native';

import { GbFlagIcon, UaFlagIcon } from 'assets/icons';
import { Text, View } from 'components';
import { colorsConst, typographyConst } from 'consts';
import { Country } from 'type';

import { JourneyCardActions } from './journey-card-actions';
import { JourneyStatus } from './journey-card-status';

interface JourneyCardHeaderType {
  origin: Country;
  destination: Country;
  isCompleted: boolean;
}

export const JourneyCardHeader = ({
  origin,
  destination,
  isCompleted,
}: JourneyCardHeaderType) => {
  const countryNames = {
    [Country.UKRAINE]: 'Україна',
    [Country.UNITED_KINGDOM]: 'Велика Британія',
  };

  const countryFlags = {
    [Country.UKRAINE]: <UaFlagIcon size={20} />,
    [Country.UNITED_KINGDOM]: <GbFlagIcon size={20} />,
  };

  return (
    <View style={styles.journeyCardHeader}>
      <View style={styles.journeyDestination}>
        {countryFlags[origin]}
        <Text style={styles.country}>{countryNames[origin]}</Text>
        <Text>—</Text>
        <Text style={styles.country}>{countryNames[destination]}</Text>
      </View>

      <JourneyStatus isCompleted={isCompleted} />

      <JourneyCardActions />
    </View>
  );
};

const styles = StyleSheet.create({
  journeyCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  journeyDestination: {
    columnGap: typographyConst.spacing.xs,
    maxHeight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colorsConst.background.default,
  },
  country: {
    fontWeight: 'bold',
    fontSize: typographyConst.font.l,
  },
});
