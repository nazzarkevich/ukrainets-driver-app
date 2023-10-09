import { Divider } from '@ui-kitten/components';
import * as React from 'react';

import { ScreenContainer } from 'components';
import { RootDrawerScreenProps } from 'type';

export function CreateJourneyScreen({
  navigation,
}: RootDrawerScreenProps<'CreateJourneyScreen'>) {
  return (
    <ScreenContainer showBack title="Створити нову поїздку">
      <Divider />
    </ScreenContainer>
  );
}
