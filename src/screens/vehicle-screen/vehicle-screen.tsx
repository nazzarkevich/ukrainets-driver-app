// import { Divider } from '@ui-kitten/components';

import { Button, ScreenContainer } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export function VehicleScreen({
  navigation,
}: RootDrawerScreenProps<'Vehicle'>) {
  return (
    <ScreenContainer title="Автомобілі">
      <Button onPress={() => console.log('test')} />
      {/* <Divider /> */}
    </ScreenContainer>
  );
}
