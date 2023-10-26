import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'consts';
import { Client } from 'type';

import { ClientCardArrow } from './client-card-arrow';
import { ClientCardDetails } from './client-card-details';
import { ClientCardImage } from './client-card-image';
import { View } from '../../themed';

export type ClientCardType = Pick<
  Client,
  'firstName' | 'lastName' | 'phone' | 'address'
>;

export const ClientCard = ({
  firstName,
  lastName,
  phone,
  address,
}: ClientCardType) => {
  return (
    <View style={styles.clientCard}>
      <ClientCardImage />

      <ClientCardDetails
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        address={address}
      />

      <ClientCardArrow />
    </View>
  );
};

const styles = StyleSheet.create({
  clientCard: {
    gap: typographyConst.spacing.s,
    borderRadius: 20,
    padding: typographyConst.spacing.m,
    backgroundColor: colorsConst.background.default,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
