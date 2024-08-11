import { Button as UIButton } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colorsConst } from 'src/consts';

export const Button = ({
  children,
  type = 'primary',
  disabled = false,
  onPress,
}: {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress: () => void;
}) => {
  const isPrimary = type === 'primary';

  return (
    <UIButton
      disabled={disabled}
      onPress={() => onPress()}
      status={isPrimary ? 'primary' : 'basic'}
      style={[styles.buttonContainer, isPrimary && styles.primary]}>
      <Text style={[styles.label, isPrimary && styles.primaryLabel]}>
        {children}
      </Text>
    </UIButton>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
    height: 35,
    border: 0,
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
