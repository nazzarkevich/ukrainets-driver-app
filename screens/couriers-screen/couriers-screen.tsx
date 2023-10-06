import { Divider } from '@ui-kitten/components';

import { RootStackScreenProps } from '@type/';
import { ScreenContainer } from 'components';

export function CouriersScreen({
  navigation,
}: RootStackScreenProps<'Couriers'>) {
  return (
    <ScreenContainer title="Перевізники">
      <Divider />
    </ScreenContainer>
  );
}
