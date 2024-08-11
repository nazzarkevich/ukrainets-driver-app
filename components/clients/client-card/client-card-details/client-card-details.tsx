import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import { CopyIcon } from 'assets/icons';
import { Text, View } from 'components/themed';
import { colorsConst, colorsPalette, typographyConst } from 'consts';
import { Client } from 'type';

export type ClientCardDetailsType = Pick<
  Client,
  'firstName' | 'lastName' | 'phone' | 'address'
>;

export const ClientCardDetails = ({
  firstName,
  lastName,
  phone,
  address,
}: ClientCardDetailsType) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Текст скопійовано!',
    });
  };

  const copyToClipboard = () => {
    showToast();
    Clipboard.setStringAsync(phone);
  };

  return (
    <View style={styles.clientCardDetails}>
      <View style={styles.clientCardHeader}>
        <Text style={styles.clientName}>
          {firstName} {lastName} м.{address.city}
        </Text>
      </View>
      <View style={styles.client}>
        <Text style={styles.clientNumber}>{phone}</Text>
        <Pressable onPress={copyToClipboard}>
          <CopyIcon size={20} color={colorsConst.roles.primary} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clientCardHeader: {
    marginBottom: 5,
  },
  clientCardDetails: {
    width: '75%',
  },
  client: {
    gap: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: colorsPalette.black,
  },
  clientName: {
    fontSize: typographyConst.font.l,
  },
  clientNumber: {
    fontSize: typographyConst.font.s,
  },
});
