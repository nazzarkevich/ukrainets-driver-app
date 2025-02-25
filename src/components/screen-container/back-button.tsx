import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ChevronLeft } from 'lucide-react-native';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';

export const BackButton = (): React.ReactElement => {
  const { navigate } = useNavigation();

  return (
    <Button
      className="flex items-center"
      size="md"
      action="primary"
      variant="link"
      onPress={() => navigate('Journeys')}>
      <ButtonIcon
        size="lg"
        className="mr-3 text-background-900"
        as={ChevronLeft}
      />
      <ButtonText>Назад</ButtonText>
    </Button>
  );
};
