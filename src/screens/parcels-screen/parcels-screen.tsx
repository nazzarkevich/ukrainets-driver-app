import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from '@type/';

export function ParcelsScreen({ navigation }: RootDrawerScreenProps<'Parcels'>) {
  return (
    <ScreenContainer title="Посилки">
      <Divider />
    </ScreenContainer>
  );
}
