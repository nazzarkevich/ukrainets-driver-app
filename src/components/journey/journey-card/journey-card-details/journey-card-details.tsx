import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { CopyIcon } from 'src/assets/icons';
import { colorsConst, typographyConst } from 'src/consts';
import { Journey } from 'src/types';

import { Text, View } from '../../../themed';

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
        <Text className="text-m">Авто</Text>
        <Text style={styles.journeyDetailsText}>{vehicle.plateNumber}</Text>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Text className="text-m">Номер поїздки</Text>

        <View className="flex flex-row items-center justify-start gap-1">
          <Text className="font-bold">#{journeyNumber}</Text>

          <Pressable onPress={copyToClipboard}>
            <CopyIcon size={20} color={colorsConst.roles.primary} />
          </Pressable>
        </View>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Text className="text-m">Навантаження</Text>

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
