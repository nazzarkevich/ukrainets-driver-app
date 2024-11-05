import React from 'react';
import colors from 'tailwindcss/colors';

import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Spinner } from '@/components/ui/spinner';

export const Loader = () => {
  return (
    <HStack space="sm">
      <Spinner color={colors.indigo[600]} />
      <Text size="md">Завантажуємо...</Text>
    </HStack>
  );
};
