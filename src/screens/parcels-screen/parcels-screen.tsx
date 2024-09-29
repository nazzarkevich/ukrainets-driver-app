// import { Divider } from '@ui-kitten/components';

import { Button, ScreenContainer } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export function ParcelsScreen({
  navigation,
}: RootDrawerScreenProps<'Parcels'>) {
  return (
    <ScreenContainer title="Посилки">
      <Button onPress={() => console.log('test')} />
      {/* <Divider /> */}
    </ScreenContainer>
  );
}
