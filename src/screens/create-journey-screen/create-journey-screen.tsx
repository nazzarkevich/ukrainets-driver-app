import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer, Stepper, Text, View } from 'src/components';
import { typographyConst } from 'src/consts';
import { RootDrawerScreenProps } from 'src/type';

export function CreateJourneyScreen({
  navigation,
}: RootDrawerScreenProps<'CreateJourneyScreen'>) {
  const stepPages = [
    { label: 'Головна інформація', component: <Text>Content 1</Text> },
    { label: 'Навантаження', component: <Text>Content 2</Text> },
    { label: 'Готово', component: <Text>Content 3</Text> },
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
