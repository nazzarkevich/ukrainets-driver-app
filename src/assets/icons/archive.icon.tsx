import Svg, { Path } from 'react-native-svg';

import { SvgProps } from 'src/types';

export const ArchiveIcon = ({ color = '#858D9D', size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 10.2202V19.0002C19.5 21.0002 19 22.0002 16.5 22.0002H7.5C5 22.0002 4.5 21.0002 4.5 19.0002V10.2202"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.18 14H13.82"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
