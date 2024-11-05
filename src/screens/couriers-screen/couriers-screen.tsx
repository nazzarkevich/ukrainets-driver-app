import { Divider } from '@/components/ui/divider';

import { RootDrawerScreenProps } from 'src/types';
import { Button, ScreenContainer } from 'src/components';

export function CouriersScreen({
  navigation,
}: RootDrawerScreenProps<'Couriers'>) {
  return (
    <ScreenContainer title="Перевізники">
      <Button onPress={() => console.log('test')} />
      <Divider />
    </ScreenContainer>
  );
}
