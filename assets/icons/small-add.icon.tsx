import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '../../types';

export const SmallAddIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 15" fill="none">
      <Path
        d="M4.25 7.5H11.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 11.25V3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
