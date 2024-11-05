import { Divider } from '@/components/ui/divider';

import { Button, ScreenContainer } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export function VehicleScreen({
  navigation,
}: RootDrawerScreenProps<'Vehicle'>) {
  return (
    <ScreenContainer title="Автомобілі">
      <Button onPress={() => console.log('test')} />
      <Divider />
    </ScreenContainer>
  );
}
