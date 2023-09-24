import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer, SectionTitle, View } from '@components/';
import { RootStackScreenProps } from '@type/';

export const HomeScreen = observer(function HomeScreen({
  navigation,
}: RootStackScreenProps<'Home'>) {
  return (
    <ScreenContainer>
      <View style={styles.wrapper}>
        <View style={styles.activeJourney}>
          <SectionTitle>Активна поїздка</SectionTitle>
        </View>

        <View style={styles.recentItems}>
          <View>
            <SectionTitle>Останні посилки</SectionTitle>
          </View>
          <View>
            <SectionTitle>Нові клієнти</SectionTitle>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 80,
  },
  activeJourney: {
    width: '60%',
  },
  recentItems: {
    width: '40%',
  },
});
