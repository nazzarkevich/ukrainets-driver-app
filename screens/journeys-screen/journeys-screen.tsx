import { Divider } from '@ui-kitten/components';

import { ScreenContainer } from '@components/';
import { RootDrawerScreenProps } from '@type/';

export function JourneysScreen({
  navigation,
}: RootDrawerScreenProps<'Journeys'>) {
  return (
    <ScreenContainer title="Поїздки">
      <Divider />
    </ScreenContainer>
  );
}
