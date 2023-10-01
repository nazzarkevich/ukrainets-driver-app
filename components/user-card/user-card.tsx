import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

import { Text, View } from 'components';
import { colorsConst, typographyConst } from 'consts';

export const UserCard = ({
  firstName,
  lastName,
  role,
}: {
  firstName: string;
  lastName: string;
  role: string;
}) => {
  const getFirstLetter = (str: string) => str[0];
  const avatarLetters = getFirstLetter(firstName) + getFirstLetter(lastName);

  return (
    <View style={styles.userCard}>
      <Avatar.Text size={40} label={avatarLetters} />

      <View>
        <Text style={styles.userName}>{firstName + ' ' + lastName}</Text>
        <Text style={styles.userRole}>{role}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    gap: typographyConst.spacing.s,
    flexDirection: 'row',
  },
  userName: {
    fontWeight: '500',
    fontSize: typographyConst.font.m,
  },
  userRole: {
    color: colorsConst.text.secondary,
    fontSize: typographyConst.font.xs,
  },
});
