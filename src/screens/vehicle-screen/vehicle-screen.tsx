import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from 'src/types';

export function VehicleScreen({
  navigation,
}: RootDrawerScreenProps<'Vehicle'>) {
  return (
    <ScreenContainer title="Автомобілі">
      <Divider />
    </ScreenContainer>
  );
}
