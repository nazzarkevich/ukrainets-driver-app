// import { Divider } from '@ui-kitten/components';

import { RootDrawerScreenProps } from 'src/types';
import { Button, ScreenContainer } from 'src/components';

export function CouriersScreen({
  navigation,
}: RootDrawerScreenProps<'Couriers'>) {
  return (
    <ScreenContainer title="Перевізники">
      <Button onPress={() => console.log('test')} />
      {/* <Divider /> */}
    </ScreenContainer>
  );
}
