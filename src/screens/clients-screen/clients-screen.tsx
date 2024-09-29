// import { Divider } from '@ui-kitten/components';

import { Button, ScreenContainer, View } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export function ClientsScreen({
  navigation,
}: RootDrawerScreenProps<'Clients'>) {
  return (
    <ScreenContainer title="Клієнти">
      <Button onPress={() => console.log('test')} />

      {/* <Divider /> */}
    </ScreenContainer>
  );
}
