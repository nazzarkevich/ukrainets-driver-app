import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from '@type/';

export function ClientsScreen({
  navigation,
}: RootDrawerScreenProps<'Clients'>) {
  return (
    <ScreenContainer title="Клієнти">
      <Divider />
    </ScreenContainer>
  );
}
