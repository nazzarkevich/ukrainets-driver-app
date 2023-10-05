import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from 'components';
import { colorsConst, typographyConst } from 'consts';
import { UserTypesEnum } from 'type';

export const UserCard = ({
  firstName,
  lastName,
  type,
}: {
  firstName: string;
  lastName: string;
  type: UserTypesEnum;
}) => {
  const userTypes = {
    [UserTypesEnum.Driver]: 'Водій',
    [UserTypesEnum.Manager]: 'Менеджер',
    [UserTypesEnum.ParcelDriver]: `Кур'єр`,
  };

  return (
    <View style={styles.userCard}>
      <Avatar
        size="medium"
        source={require('../../assets/images/user-avatar.png')}
      />

      <View>
        <Text style={styles.userName}>{firstName + ' ' + lastName}</Text>
        <Text style={styles.userRole}>{userTypes[type]}</Text>
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
