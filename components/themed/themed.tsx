import { useColorScheme } from '@hooks/';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { themeColors } from 'consts';

import { TextProps, ViewProps } from './themed.types';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof themeColors.light & keyof typeof themeColors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return themeColors[theme][colorName];
  }
}

// TODO: Add Gilroy font globally https://trello.com/c/dqJQEJjZ
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function StyledView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  return <DefaultView style={[style]} {...otherProps} />;
}
