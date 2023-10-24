import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'consts';
import { Parcel } from 'type';

import { ParcelCardArrow } from './parcel-card-arrow';
import { ParcelCardDetails } from './parcel-card-details';
import { ParcelCardIcon } from './parcel-card-icon';
import { View } from '../../themed';

export type ParcelCardType = Pick<
  Parcel,
  'id' | 'sender' | 'recipient' | 'type' | 'deliveryDate'
>;

export const ParcelCard = ({
  id,
  sender,
  recipient,
  type,
  deliveryDate,
}: ParcelCardType) => {
  return (
    <View style={styles.parcelCard}>
      <ParcelCardIcon type={type} />

      <ParcelCardDetails
        id={id}
        sender={sender}
        recipient={recipient}
        type={type}
        deliveryDate={deliveryDate}
      />

      <ParcelCardArrow />
    </View>
  );
};

const styles = StyleSheet.create({
  parcelCard: {
    gap: typographyConst.spacing.m,
    borderRadius: 14,
    padding: typographyConst.spacing.m,
    backgroundColor: colorsConst.background.default,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
