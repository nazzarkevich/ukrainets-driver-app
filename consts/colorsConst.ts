export const colorsConst = {
  text: {
    primary: '#080A11',
    secondary: '#4A4C56',
    tertiary: '#C2C6CE',
    contrast: '#FFFFFF',
    green: '#60CB74',
  },
  roles: {
    primary: '#413ED2',
    success: '#60CB74',
    warning: '#E7D859',
    error: '#D83E34',
  },
  foreground: {
    primary: '#858D9D',
    secondary: '#C2C6CE',
    active: '#ECF2FB',
    green: '#d2ffda',
  },
  background: {
    main: '#F9F9FC',
    default: '#FFFFFF',
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
