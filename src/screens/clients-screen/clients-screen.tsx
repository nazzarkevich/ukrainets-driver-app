import { Divider } from '@/components/ui/divider';

import { Button, ScreenContainer } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';

export function ClientsScreen({
  navigation,
}: RootDrawerScreenProps<'Clients'>) {
  return (
    <ScreenContainer title="Клієнти">
      <Button onPress={() => console.log('test')} />

      <Divider />
    </ScreenContainer>
  );
}
