import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootStackScreenProps } from '@type/';

export function JourneysScreen({
  navigation,
}: RootStackScreenProps<'Journeys'>) {
  return (
    <ScreenContainer title="Поїздки">
      <Divider />
    </ScreenContainer>
  );
}
