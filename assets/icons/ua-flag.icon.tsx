import Svg, { Defs, Path, Rect } from 'react-native-svg';

import { SvgProps } from '@type/';

export const UaFlagIcon = ({ size = 50 }: SvgProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 12" fill="none">
      <g clipPath="url(#clip0_104_6526)">
        <Path d="M0 0.500244H16V11.5H0V0.500244Z" fill="#FFDA44" />
        <Path d="M0 0.500244H16V6.00013H0V0.500244Z" fill="#338AF3" />
      </g>
      <Defs>
        <clipPath id="clip0_104_6526">
          <Rect
            width="16"
            height="11"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </Defs>
    </Svg>
  );
};
