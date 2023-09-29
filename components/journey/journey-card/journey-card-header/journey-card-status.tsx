import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'components';
import { colorsConst } from 'consts';

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
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    maxWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  journeyStatusCompleted: {
    backgroundColor: colorsConst.foreground.green,
  },
  journeyStatusNotCompleted: {
    backgroundColor: colorsConst.foreground.secondary,
  },
  journeyStatusLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  journeyStatusCompletedLabel: {
    color: colorsConst.text.green,
  },
  journeyStatusNotCompletedLabel: {
    color: colorsConst.text.contrast,
  },
});
