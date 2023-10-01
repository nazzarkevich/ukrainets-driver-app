import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { CopyIcon } from 'assets/icons';
import { Text, Title, View } from 'components';
import { colorsConst, typographyConst } from 'consts';

interface JourneyCardDetailsType {
  carPlateNumber: string;
  journeyNumber: string;
  journeyLoad: string;
}

export const JourneyCardDetails = ({
  carPlateNumber,
  journeyNumber,
  journeyLoad,
}: JourneyCardDetailsType) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Текст скопійовано!',
    });
  };

  const handleCopyText = () => {
    showToast();
    Clipboard.setString(journeyNumber);
  };

  return (
    <View style={styles.journeyDetails}>
      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Авто</Title>
        <Text style={styles.journeyDetailsText}>{carPlateNumber}</Text>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Номер поїздки</Title>
        <Text style={[styles.journeyDetailsText, styles.journeyNumber]}>
          #{journeyNumber}
          <Pressable onPress={handleCopyText}>
            <CopyIcon size={20} color={colorsConst.roles.primary} />
          </Pressable>
        </Text>
      </View>

      <View style={styles.journeyDetailsTextRow}>
        <Title size="s">Навантаження</Title>
        <Text style={styles.journeyDetailsText}>{journeyLoad}кг</Text>
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
