export const colorsPalette = {
  green: '#60CB74',
  lightGreen: '#d2ffda',
  red: '#D83E34',
  yellow: '#E7D859',
  purple: '#413ED2',
  white: '#FFFFFF',
  black: '#080A11',
  orange: '#E7A659',
  blue: '#20B5E3',
};

export const colorsConst = {
  text: {
    primary: colorsPalette.black,
    secondary: '#4A4C56',
    tertiary: '#C2C6CE',
    contrast: colorsPalette.white,
  },
  roles: {
    primary: colorsPalette.purple,
    success: colorsPalette.green,
    warning: colorsPalette.yellow,
    error: colorsPalette.red,
  },
  foreground: {
    primary: '#858D9D',
    secondary: '#C2C6CE',
    active: '#ECF2FB',
  },
  background: {
    main: '#F9F9FC',
    default: colorsPalette.white,
  },
};

export const themeColors = {
  light: {
    text: colorsConst.text.primary,
    background: colorsConst.background.main,
    tint: colorsConst.roles.primary,
    tabIconDefault: colorsConst.foreground.primary,
    tabIconSelected: colorsConst.roles.primary,
  },
  dark: {
    text: colorsConst.text.contrast,
    background: '#000',
    tint: colorsConst.text.contrast,
    tabIconDefault: '#ccc',
    tabIconSelected: colorsConst.text.contrast,
  },
};
