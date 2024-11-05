import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MoveLeft } from 'lucide-react-native';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';

export const BackButton = (): React.ReactElement => {
  const { navigate } = useNavigation();

  return (
    <Button
      className="text-sky-500"
      size="sm"
      action="primary"
      variant="outline"
      onPress={() => navigate('Journeys')}>
      <ButtonIcon color="red" as={MoveLeft} />
      <ButtonText>Text</ButtonText>
    </Button>
  );
};
