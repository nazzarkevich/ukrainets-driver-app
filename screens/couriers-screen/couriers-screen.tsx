import { RootDrawerScreenProps } from '@type/';
import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from 'components';

export function CouriersScreen({
  navigation,
}: RootDrawerScreenProps<'Couriers'>) {
  return (
    <ScreenContainer title="Перевізники">
      <Divider />
    </ScreenContainer>
  );
}
