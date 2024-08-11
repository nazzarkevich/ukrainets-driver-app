import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from '@type/';
import { Divider } from '@ui-kitten/components';

export function JourneysScreen({
  navigation,
}: RootDrawerScreenProps<'Journeys'>) {
  return (
    <ScreenContainer title="Поїздки">
      <Divider />
    </ScreenContainer>
  );
}
