import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootStackScreenProps } from '@type/';

export function ClientsScreen({ navigation }: RootStackScreenProps<'Clients'>) {
  return (
    <ScreenContainer title="Клієнти">
      <Divider />
    </ScreenContainer>
  );
}
