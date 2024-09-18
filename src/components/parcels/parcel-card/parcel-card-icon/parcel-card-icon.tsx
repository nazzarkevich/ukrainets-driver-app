import React from 'react';
import { StyleSheet } from 'react-native';

import {
  BoxIcon,
  LetterIcon,
  MoneyBillIcon,
  SimpleBoxIcon,
} from 'src/assets/icons';
import { View } from 'src/components/themed';
import { colorsPalette } from 'src/consts';
import { Parcel, ParcelTypeEnum } from 'src/types';

export type ParcelCardIcon = Pick<Parcel, 'type'>;

export const ParcelCardIcon = ({ type }: ParcelCardIcon) => {
  const parcelIcon = {
    [ParcelTypeEnum.Regular]: (
      <BoxIcon size={30} color={colorsPalette.yellow} />
    ),
    [ParcelTypeEnum.Document]: (
      <LetterIcon size={30} color={colorsPalette.blue} />
    ),
    [ParcelTypeEnum.Passport]: (
      <LetterIcon size={30} color={colorsPalette.blue} />
    ),
    [ParcelTypeEnum.Money]: (
      <MoneyBillIcon size={30} color={colorsPalette.green} />
    ),
    [ParcelTypeEnum.Unknown]: (
      <SimpleBoxIcon size={30} color={colorsPalette.black} />
    ),
  };

  return (
    <View style={styles.parcelIcon}>
      {parcelIcon[type] || parcelIcon[ParcelTypeEnum.Unknown]}
    </View>
  );
};

const styles = StyleSheet.create({
  parcelIcon: {
    justifyContent: 'center',
  },
});
