import { Button, ScreenContainer, Text, View } from 'src/components';
import { RootDrawerScreenProps } from 'src/types';
import { Divider } from '@/components/ui/divider';

export function JourneysScreen({
  navigation,
}: RootDrawerScreenProps<'Journeys'>) {
  return (
    <ScreenContainer title="Поїздки">
      <View>
        <Text>1</Text>
      </View>
    </ScreenContainer>
  );
}
