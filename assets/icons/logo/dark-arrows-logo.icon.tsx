import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../../types';

export const DarkArrowsLogoIcon = ({
  color = '#163E5B',
  width = 25,
  height = 25,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 55 55" fill="none">
      <Path
        fill={color}
        d="M7.02174 54.0435C4.49482 54.0435 2.07542 52.6725 0.811962 50.3069C-0.989142 46.866 0.3012 42.6186 3.74211 40.8175L12.2906 36.3013L7.18303 29.8764C4.76364 26.8388 5.2744 22.4301 8.31208 20.0107C11.3498 17.5913 15.7584 18.1021 18.1778 21.1397L28.5275 34.2045C29.8178 35.8443 30.3286 37.968 29.8985 40.011C29.4683 42.054 28.1511 43.8014 26.2962 44.7691L10.2745 53.237C9.22608 53.8016 8.12391 54.0435 7.02174 54.0435Z"
      />
      <Path
        fill={color}
        d="M42.1839 36.3821C40.114 36.3821 38.0709 35.4681 36.6731 33.7208L26.2966 20.656C25.0062 19.0162 24.4955 16.8925 24.9256 14.8495C25.3557 12.8065 26.6729 11.0591 28.5278 10.0914L44.5495 1.62348C47.9905 -0.17762 52.2378 1.11273 54.0389 4.55365C55.8401 7.99456 54.5497 12.2419 51.1088 14.043L42.5603 18.5592L47.6679 24.9841C50.0873 28.0218 49.5765 32.4304 46.5388 34.8498C45.2754 35.8982 43.7162 36.3821 42.1839 36.3821Z"
      />
    </Svg>
  );
};
