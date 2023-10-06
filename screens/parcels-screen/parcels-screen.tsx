import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootStackScreenProps } from '@type/';

export function ParcelsScreen({ navigation }: RootStackScreenProps<'Parcels'>) {
  return (
    <ScreenContainer title="Посилки">
      <Divider />
    </ScreenContainer>
  );
}
