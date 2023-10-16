import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer, Stepper, View } from 'components';
import { typographyConst } from 'consts';
import { RootDrawerScreenProps } from 'type';

export function CreateJourneyScreen({
  navigation,
}: RootDrawerScreenProps<'CreateJourneyScreen'>) {
  const stepPages = [
    { label: 'Головна інформація', component: <>Content 1</> },
    { label: 'Навантаження', component: <>Content 2</> },
    { label: 'Готово', component: <>Content 3</> },
  ];

  return (
    <ScreenContainer showBack title="Створити нову поїздку">
      <View style={styles.stepOneContainer}>
        <Stepper
          stepPages={stepPages}
          finishButtonText="Розпочати поїздку"
          inFinish={() => console.log('Finish!')}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stepOneContainer: {
    display: 'flex',
    gap: typographyConst.spacing.m,
  },
});
