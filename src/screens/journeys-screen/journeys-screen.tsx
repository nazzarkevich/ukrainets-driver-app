import { Button, ScreenContainer } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';
import { Divider } from '@/components/ui/divider';

export function JourneysScreen({
  navigation,
}: RootDrawerScreenProps<'Journeys'>) {
  return (
    <ScreenContainer title="Поїздки">
      <Button onPress={() => console.log('test22')} />
      <Divider orientation="vertical" className="bg-gray-300" />
    </ScreenContainer>
  );
}
