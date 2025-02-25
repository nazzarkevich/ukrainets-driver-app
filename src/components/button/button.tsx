import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst } from 'src/consts';
import { Button as UIButton, ButtonText } from '@/components/ui/button';

export const Button = ({
  size,
  children,
  type = 'primary',
  disabled = false,
  onPress,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
  children?: React.ReactNode;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress: () => void;
}) => {
  const isPrimary = type === 'primary';

  return (
    <UIButton
      disabled={disabled}
      onPress={onPress}
      // action={'primary'}
      // action={isPrimary ? 'primary' : 'secondary'}
      className="rounded-xl"
      size={size}
      // className={`h-[35px] w-[170px] justify-center self-center rounded-lg ${
      //   isPrimary ? 'bg-primary' : 'bg-secondary'
      // }`}
    >
      <ButtonText
      // className={`text-center color-slate-50 ${
      //   isPrimary ? 'text-contrast' : 'text-primary'
      // }`}
      >
        {children}
      </ButtonText>
    </UIButton>
  );
};
