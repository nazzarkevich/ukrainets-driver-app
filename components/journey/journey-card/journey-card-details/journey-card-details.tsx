import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { CopyIcon } from 'assets/icons';
import { colorsConst, typographyConst } from 'consts';
import { Journey } from 'type';

import { Text, View } from '../../../themed';
import { Title } from '../../../title';

export type JourneyCardDetailsType = Pick<
  Journey,
  'journeyNumber' | 'vehicle'
> & { journeyLoadCapacity: number };

export const JourneyCardDetails = ({
  journeyNumber,
  journeyLoadCapacity,
  vehicle,
}: JourneyCardDetailsType) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Текст скопійовано!',
    });
  };

  const copyToClipboard = () => {
    showToast();
    Clipboard.setStringAsync(journeyNumber);
  };

  return (
    <View style={styles.journeyDetails}>
      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Авто</Title>
        <Text style={styles.journeyDetailsText}>{vehicle?.plateNumber}</Text>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Номер поїздки</Title>
        <Text style={[styles.journeyDetailsText, styles.journeyNumber]}>
          #{journeyNumber}
          <Pressable onPress={copyToClipboard}>
            <CopyIcon size={20} color={colorsConst.roles.primary} />
          </Pressable>
        </Text>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Навантаження</Title>
        <Text style={styles.journeyDetailsText}>{journeyLoadCapacity}кг</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  journeyDetails: {
    columnGap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  journeyDetailsTextRow: {
    gap: typographyConst.spacing.s,
  },
  journeyDetailsText: {
    fontWeight: '700',
  },
  journeyNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
