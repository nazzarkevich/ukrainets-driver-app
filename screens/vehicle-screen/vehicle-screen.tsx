import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootStackScreenProps } from '@type/';

export function VehicleScreen({ navigation }: RootStackScreenProps<'Vehicle'>) {
  return (
    <ScreenContainer title="Автомобілі">
      <Divider />
    </ScreenContainer>
  );
}
