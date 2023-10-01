import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Title, View } from 'components';
import { colorsConst, colorsPalette, typographyConst } from 'consts';

export const JourneyLoadIndicator = () => {
  return (
    <View style={styles.loadDetails}>
      <Title>Завантажено</Title>

      <View style={styles.loadIndicator}>
        <View style={styles.loadActiveIndicator}>
          <Text style={styles.indicatorPercent}>90%</Text>
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
    width: '90%',
    borderRadius: 15,
    backgroundColor: colorsPalette.orange,
  },

  indicatorPercent: {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    color: colorsConst.text.contrast,
  },
});
