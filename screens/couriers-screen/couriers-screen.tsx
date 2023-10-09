import { Divider } from '@ui-kitten/components';

import { RootDrawerScreenProps } from '@type/';
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
