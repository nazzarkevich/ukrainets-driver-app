import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ArrowRightIcon } from 'src/assets/icons';
import { View } from 'src/components/themed';
import { colorsConst, typographyConst } from 'src/consts';

export const SmallCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.smallCard}>
      {children}
      <View style={styles.arrowRightIcon}>
        <Pressable onPress={() => console.log('Click on arrow')}>
          <ArrowRightIcon size={25} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallCard: {
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
  arrowRightIcon: {
    justifyContent: 'center',
  },
});
