import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, colorsPalette, typographyConst } from 'consts';

import { Text, View } from '../../../themed';

export const JourneyStatus = ({ isCompleted }: { isCompleted: boolean }) => {
  if (isCompleted) {
    return (
      <View style={[styles.journeyStatus, styles.journeyStatusCompleted]}>
        <Text
          style={[
            styles.journeyStatusLabel,
            styles.journeyStatusCompletedLabel,
          ]}>
          Завершено
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.journeyStatus, styles.journeyStatusNotCompleted]}>
      <Text
        style={[
          styles.journeyStatusLabel,
          styles.journeyStatusNotCompletedLabel,
        ]}>
        В дорозі
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  journeyStatus: {
    borderRadius: typographyConst.spacing.xs,
    paddingTop: typographyConst.spacing.xs,
    paddingBottom: typographyConst.spacing.xs,
    paddingLeft: typographyConst.spacing.s,
    paddingRight: typographyConst.spacing.s,
    maxWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  journeyStatusCompleted: {
    backgroundColor: colorsConst.foreground.secondary,
  },
  journeyStatusNotCompleted: {
    backgroundColor: colorsPalette.lightGreen,
  },
  journeyStatusLabel: {
    fontWeight: '600',
    letterSpacing: 0.5,
    fontSize: typographyConst.font.s,
  },
  journeyStatusCompletedLabel: {
    color: colorsConst.text.contrast,
  },
  journeyStatusNotCompletedLabel: {
    color: colorsPalette.green,
  },
});
