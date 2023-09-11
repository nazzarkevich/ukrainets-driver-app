import Svg, { Path } from 'react-native-svg';

import { SvgProps } from '@type/';

export const CheckIcon = ({
  color = '#858D9D',
  width = 50,
  height = 50,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 9 8" fill="none">
      <Path
        d="M1 4.75L2.90909 7L8 1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
