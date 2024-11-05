import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'src/components/themed';
import { Parcel, ParcelTypeEnum } from 'src/types';

export type ParcelCardDetailsType = Pick<
  Parcel,
  'id' | 'sender' | 'recipient' | 'type' | 'deliveryDate'
>;

export const ParcelCardDetails = ({
  id,
  sender,
  recipient,
  type,
  deliveryDate,
}: ParcelCardDetailsType) => {
  const parcelType = {
    [ParcelTypeEnum.Regular]: 'Одяг',
    [ParcelTypeEnum.Document]: 'Документи',
    [ParcelTypeEnum.Passport]: 'Паспорт',
    [ParcelTypeEnum.Money]: 'Гроші',
    [ParcelTypeEnum.Unknown]: 'Інше',
  };

  return (
    <View style={styles.parcelCardDetails}>
      <View style={styles.parcelCardHeader}>
        <Text>
          {sender.address.city}-{recipient.address.city} ({deliveryDate})
        </Text>
      </View>
      <View style={styles.parcel}>
        <Text>{parcelType[type] || parcelType[ParcelTypeEnum.Unknown]}</Text>
        <Text>ID {id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parcelCardHeader: {
    marginBottom: 8,
  },
  parcelCardDetails: {
    width: '80%',
  },
  parcel: {
    gap: 4,
  },
});
