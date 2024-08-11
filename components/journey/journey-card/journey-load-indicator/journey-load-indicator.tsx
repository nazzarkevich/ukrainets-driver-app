import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, colorsPalette, typographyConst } from 'consts';

import { Text, View } from '../../../themed';
import { Title } from '../../../title';

const MAX_LOAD_CAPACITY = 2000;

export const JourneyLoadIndicator = ({
  journeyLoadCapacity,
}: {
  journeyLoadCapacity: number;
}) => {
  const calculateCurrentPercent = Math.round(
    (journeyLoadCapacity / MAX_LOAD_CAPACITY) * 100,
  );

  return (
    <View style={styles.loadDetails}>
      <Title>Завантажено</Title>

      <View style={styles.loadIndicator}>
        <View
          style={[
            { width: `${calculateCurrentPercent}%` },
            styles.loadActiveIndicator,
          ]}>
          <Text style={styles.indicatorPercent}>
            {calculateCurrentPercent}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadDetails: {
    gap: typographyConst.spacing.s,
  },
  loadIndicator: {
    height: 18,
    width: '100%',
    borderRadius: 15,
    backgroundColor: colorsConst.foreground.active,
  },
  loadActiveIndicator: {
    height: 18,
    borderRadius: 15,
    backgroundColor: colorsPalette.orange,
  },

  indicatorPercent: {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 99,
    color: colorsConst.text.contrast,
  },
});
