import React from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst } from 'src/consts';
import { Button as UIButton, ButtonText } from '@/components/ui/button';

export const Button = ({
  children,
  type = 'primary',
  disabled = false,
  onPress,
}: {
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
      action={isPrimary ? 'primary' : 'secondary'}
      className={`h-[35px] w-[170px] justify-center self-center rounded-lg ${
        isPrimary ? 'bg-primary' : 'bg-secondary'
      }`}>
      <ButtonText
        className={`text-center ${
          isPrimary ? 'text-contrast' : 'text-primary'
        }`}>
        {children}
      </ButtonText>
    </UIButton>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
    height: 35,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colorsConst.foreground.secondary,
  },
  label: {
    textAlign: 'center',
    color: colorsConst.text.primary,
  },
  primary: {
    backgroundColor: colorsConst.roles.primary,
  },
  primaryLabel: {
    textAlign: 'center',
    color: colorsConst.text.contrast,
  },
});
