import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const aspectRation = height / width;
const isTablet = aspectRation < 1.6;

export const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isTablet,
};
