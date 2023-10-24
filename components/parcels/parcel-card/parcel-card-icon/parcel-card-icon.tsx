import React from 'react';
import { StyleSheet } from 'react-native';

import { BoxIcon, LetterIcon, MoneyBillIcon } from 'assets/icons';
import { View } from 'components/themed';
import { colorsPalette } from 'consts';
import { Parcel, ParcelTypeEnum } from 'type';

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
  };

  return <View style={styles.parcelIcon}>{parcelIcon[type]}</View>;
};

const styles = StyleSheet.create({
  parcelIcon: {
    justifyContent: 'center',
  },
});
