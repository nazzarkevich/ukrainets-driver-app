import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from '@type/';

export function VehicleScreen({ navigation }: RootDrawerScreenProps<'Vehicle'>) {
  return (
    <ScreenContainer title="Автомобілі">
      <Divider />
    </ScreenContainer>
  );
}
